import{d as a,c as t,a as l,o as n}from"./vue.9fde585d.js";const u={class:"markdown-body"},c=l(`<h1>Cell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u5217\u8868\u9879\uFF0C\u53EF\u7EC4\u6210\u5217\u8868\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
  )
}
</code></pre><h3>\u94FE\u63A5\u8DF3\u8F6C</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8DEF\u7531\u8DF3\u8F6C&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;#/button&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u94FE\u63A5\u8DF3\u8F6C&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;https://baidu.com&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
  )
}
</code></pre><h3>\u56FE\u6807\u5C55\u793A</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> 
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> 
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png&quot;</span> 
      <span class="hljs-attr">islink</span> 
    /&gt;</span></span>
  )
}
</code></pre><h3>\u5206\u7EC4\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell, CellGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CellGroup</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">CellGroup</span>&gt;</span></span>
  )
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u8BBE\u7F6E\u6807\u9898\u6700\u5927\u5BBD\u5EA6\uFF0C\u7701\u7565\u53F7\u5C55\u793A</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> 
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898\u5F88\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F&quot;</span> 
    /&gt;</span></span>
  )
}
</code></pre><pre><code class="language-css"><span class="hljs-comment">/* CSS \u7701\u7565\u53F7\u5C55\u793A */</span>
<span class="hljs-selector-class">.my-cell</span> {
  --cell-title-<span class="hljs-attribute">white-space</span>: nowrap;
  --cell-title-<span class="hljs-attribute">text-overflow</span>: ellipsis;
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u63CF\u8FF0</h3><p>\u901A\u8FC7 Slot\uFF08<code class="">Cell</code> \u5305\u88F9\u7684\u5185\u5BB9\uFF09\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u63CF\u8FF0\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
  )
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td>-</td></tr><tr><td>desc</td><td>\u63CF\u8FF0\u6587\u5B57</td><td><code class="">string</code></td><td>-</td></tr><tr><td>to</td><td>\u94FE\u63A5\u8DF3\u8F6C</td><td><code class="">string</code></td><td>-</td></tr><tr><td>islink</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u7BAD\u5934</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr><tr><td>icon</td><td>\u5DE6\u4FA7\u56FE\u6807(\u652F\u6301\u4F20url\u94FE\u63A5)</td><td><code class="">string </code></td><td>-</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--cell-title-font-size</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--cell-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#666</code></td></tr><tr><td><code class="">--cell-title-width</code></td><td>\u6807\u9898\u5B57\u4F53\u6700\u5927\u5BBD\u5EA6</td><td></td></tr><tr><td><code class="">--cell-title-font-weight</code></td><td>\u6807\u9898\u5B57\u91CD</td><td></td></tr><tr><td><code class="">--cell-title-font-family</code></td><td>\u6807\u9898\u5B57\u4F53</td><td><code class="">PingFangSC-Regular, PingFang SC</code></td></tr><tr><td><code class="">--cell-title-white-space</code></td><td>\u6807\u9898\u662F\u5426\u6362\u884C</td><td><code class="">nowrap</code></td></tr><tr><td><code class="">--cell-desc-font-size</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u5927\u5C0F</td><td></td></tr><tr><td><code class="">--cell-desc-color</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u989C\u8272</td><td><code class="">#969799</code></td></tr><tr><td><code class="">--cell-desc-width</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u6700\u5927\u5BBD\u5EA6</td><td><code class="">14px</code></td></tr><tr><td><code class="">--cell-desc-white-space</code></td><td>\u63CF\u8FF0\u662F\u5426\u6362\u884C</td><td><code class="">nowrap</code></td></tr><tr><td><code class="">--cell-desc-font-weight</code></td><td>\u63CF\u8FF0\u5B57\u91CD</td><td></td></tr><tr><td><code class="">--cell-desc-font-family</code></td><td>\u63CF\u8FF0\u5B57\u4F53</td><td><code class="">PingFangSC-Regular, PingFang SC</code></td></tr><tr><td><code class="">--cell-icon-font-size</code></td><td>\u56FE\u6807\u5927\u5C0F</td><td><code class="">16px</code></td></tr><tr><td><code class="">--cell-quark-icon-color</code></td><td>\u56FE\u6807\u989C\u8272</td><td><code class="">#969799</code></td></tr><tr><td><code class="">--cell-hspacing</code></td><td>cell \u5DE6\u53F3\u5185\u8FB9\u8DDD</td><td><code class="">16px</code></td></tr><tr><td><code class="">--cell-vspacing</code></td><td>cell \u4E0A\u4E0B\u5185\u8FB9\u8DDD</td><td><code class="">13px</code></td></tr></tbody></table>`,26),e=[c],h={},F="",i=a({__name:"doc-react.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,o)=>(n(),t("div",u,e))}});export{i as default,F as excerpt,h as frontmatter};
