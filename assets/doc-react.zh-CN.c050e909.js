import{d as a,c as n,a as t,o as l}from"./vue.9478c7d4.js";const p={class:"markdown-body"},c=t(`<h1>Tabbar \u5E95\u90E8\u680F</h1><h3>\u4ECB\u7ECD</h3><p>\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><p>\u5982\u679C\u4F7F\u7528 <code class="">quark-icons</code>\uFF0C\u8BF7\u5148\u5B89\u88C5\uFF1A<code class="">npm install --save quark-icons</code>\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Tabbar, TabbarItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-comment">// \u5F15\u5165 icons</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/home&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/user&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/tel&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>\u901A\u8FC7\u540D\u79F0\u5339\u914D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>\u5FBD\u6807\u63D0\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">badgecontent</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">inactivecolor</span>=<span class="hljs-string">&quot;#000&quot;</span> <span class="hljs-attr">activecolor</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u6807</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> img1 = <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src.jpeg&quot;</span>;
  <span class="hljs-keyword">const</span> img2 = <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png&quot;</span>;
  <span class="hljs-keyword">const</span> [activeIndex, setActiveIndex] = useState(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setActiveIndex(detail.value);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`\u5F53\u524D\u9009\u4E2D\uFF1A<span class="hljs-subst">\${detail.value}</span>\`</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo no-padding scope-list&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
            <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span>
            <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">height:</span> <span class="hljs-attr">20</span> }}
            <span class="hljs-attr">src</span>=<span class="hljs-string">{activeIndex</span> === <span class="hljs-string">1</span> ? <span class="hljs-attr">img1</span> <span class="hljs-attr">:</span> <span class="hljs-attr">img2</span>}
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u76D1\u542C\u5207\u6362\u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;{&quot;</span> <span class="hljs-attr">onChange</span> }&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h2>API</h2><h3>Tabbar Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fixed</td><td>\u662F\u5426\u56FA\u5B9A\u5728\u5E95\u90E8</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>inactivecolor</td><td>\u672A\u9009\u4E2D\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>activecolor</td><td>\u9009\u4E2D\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#0088FF</code></td></tr><tr><td>value</td><td>\u9009\u4E2D\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C</td><td><code class="">string</code></td><td><code class="">0</code></td></tr><tr><td>onChange</td><td>\u5207\u6362\u6807\u7B7E\u65F6\u89E6\u53D1</td><td><code class="">{e:{detail: {value: string}}} =&gt; void</code> \u5F53\u6CA1\u6709 <code class="">name</code> \u65F6\u8FD4\u56DE\u7D22\u5F15\uFF0C\u6709 <code class="">name</code> \u65F6\u8FD4\u56DE <code class="">name</code></td><td>-</td></tr></tbody></table><h3>TabbarItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E\u540D\u79F0, \u7528\u6765\u663E\u793A</td><td><code class="">string</code></td><td>-</td></tr><tr><td>name</td><td>\u6807\u7B7E\u503C\uFF0C\u4F5C\u4E3A\u5339\u914D\u7684\u6807\u8BC6\u7B26</td><td><code class="">string</code></td><td>-</td></tr><tr><td>badgecontent</td><td>\u5FBD\u6807\u5185\u5BB9</td><td><code class="">string</code></td><td>-</td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u56FE\u6807</td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--tabbar-z-index</code></td><td>tabbar z-index</td><td><code class="">1</code></td></tr><tr><td><code class="">--tabbar-box-shadow</code></td><td>tabbar \u4E0A\u9634\u5F71</td><td><code class="">0px -2px 8px 0px rgba(36, 39, 41, 0.08)</code></td></tr><tr><td><code class="">--tabbar-font-size</code></td><td>tabbar \u6587\u5B57\u5927\u5C0F</td><td><code class="">10px</code></td></tr><tr><td><code class="">--tabbar-height</code></td><td>tabbar \u9AD8\u5EA6</td><td><code class="">56px</code></td></tr></tbody></table>`,28),u=[c],j={},g="",d=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,o)=>(l(),n("div",p,u))}});export{d as default,g as excerpt,j as frontmatter};
