import{c as a,o as t,a as n}from"./vue.a14da11e.js";const l={class:"markdown-body"},p=n(`<h1>Tab \u6807\u7B7E\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u9009\u9879\u5361\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Tabs, TabContent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{1}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>
        tab1 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>
        tab2 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
        tab3 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>
        tab4 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>\u901A\u8FC7\u540D\u79F0\u5339\u914D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">d</span>&#39;}&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
        tab1 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
        tab2 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>
        tab3 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;d&quot;</span>&gt;</span>
        tab4 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>\u6A2A\u5411\u6EDA\u52A8</h3><p>\u957F\u5EA6\u8D85\u8FC7\u81EA\u52A8\u652F\u6301\u6A2A\u5411\u6EDA\u52A8\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>tab1<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>tab2<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    ...
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab10&quot;</span>&gt;</span>tab10<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>\u70B9\u51FB\u4E8B\u4EF6</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {

  <span class="hljs-keyword">const</span> [activeName, setActiveName] = useState(<span class="hljs-string">&#39;d&#39;</span>);
  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setActiveName(<span class="hljs-function">() =&gt;</span> detail.name);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`\u5F53\u524D\u9009\u62E9: <span class="hljs-subst">\${detail.label}</span>\`</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo tab-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{activeName}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
            tab1 content
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
            tab2 content
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>
            tab3 content
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;d&quot;</span>&gt;</span>
            tab4 content
          <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
       <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>   
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}

</code></pre><h3>\u5438\u9876\u6548\u679C</h3><p>nav-item\u5728\u6EDA\u52A8\u65F6\u56FA\u5B9A\u5728\u5C4F\u5E55\u4E0A\u65B9</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;17vw&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>
        tab1 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>
        tab2 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span>&gt;</span>
        tab3 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>
        tab4 content
    <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h2>API</h2><h3>Tabs props</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>activekey</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684 tab\uFF0C\u5BF9\u5E94\u5230 <code>TabContent</code> \u4E2D\u7684 <code>name</code></td><td><code>string</code></td><td>-</td></tr><tr><td>sticky</td><td>\u662F\u5426\u5438\u9876</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>offsettop</td><td>\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB(\u5355\u4F4D: vw)</td><td><code>string</code></td><td><code>0vw</code></td></tr><tr><td>linewidth</td><td>\u4E0B\u5212\u7EBF\u5BBD</td><td>string</td><td><code>40px</code></td></tr><tr><td>onChange</td><td>change \u56DE\u8C03\u51FD\u6570</td><td><code>(e: {detail: { name: string\uFF0Clabel: number }}) =&gt; void</code></td><td>-</td></tr></tbody></table><h3>TabContent props</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>tab \u663E\u793A\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>tab \u7981\u7528\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>tab \u5339\u914D\u540D\u79F0(\u548Cactivekey\u5339\u914D)</td><td><code>string</code></td><td>-</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tab-item-color</code></td><td><code>tab-item</code> \u5B57\u4F53\u989C\u8272</td><td><code>#5E6266</code></td></tr><tr><td><code>--tab-item-active-color</code></td><td><code>tab-item</code> \u6FC0\u6D3B\u6001<code>active</code>\u5B57\u4F53\u989C\u8272</td><td><code>#333333</code></td></tr><tr><td><code>--tab-item-disabled-color</code></td><td><code>tab-item</code> \u7981\u7528\u72B6\u6001\u5B57\u4F53\u989C\u8272</td><td><code>#c8c9cc</code></td></tr><tr><td><code>--tab-item-min-width</code></td><td><code>tab-item</code> \u6700\u5C0F\u5BBD\u5EA6(\u51B3\u5B9A\u4E00\u884C\u6700\u591A\u5C55\u793A\u51E0\u4E2A)</td><td><code>20vw</code>(\u4E00\u884C\u6700\u591A\u5C55\u793A5\u4E2A)</td></tr><tr><td><code>--tab-item-height</code></td><td><code>tab-item</code> \u9AD8\u5EA6\u8BBE\u7F6E</td><td><code>44px </code></td></tr><tr><td><code>--tab-item-font-size</code></td><td><code>tab-item</code> \u5B57\u4F53\u5927\u5C0F</td><td><code>16px</code></td></tr><tr><td><code>--tab-active-line-color</code></td><td><code>tab-item</code> \u6FC0\u6D3B\u6001<code>\u4E0B\u5212\u7EBF</code>\u989C\u8272</td><td><code>#0088ff </code></td></tr><tr><td><code>--tabs-background-color</code></td><td>tabs\u80CC\u666F\u8272</td><td><code>#ffffff</code></td></tr><tr><td><code>--tab-item-background-color</code></td><td><code>tab-item</code> \u80CC\u666F\u8272</td><td><code>#ffffff </code></td></tr></tbody></table>`,25),e=[p],r={__name:"doc-react.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(t(),a("div",l,e))}};export{r as default};
