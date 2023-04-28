import{d as a,c as t,a as n,o as l}from"./vue.ccefa8dc.js";const u={class:"markdown-body"},p=n(`<h1>Grid \u5BAB\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u5BAB\u683C\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u628A\u9875\u9762\u5206\u9694\u6210\u7B49\u5BBD\u5EA6\u7684\u533A\u5757\uFF0C\u7528\u4E8E\u5C55\u793A\u5185\u5BB9\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Grid, GridItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><p>\u901A\u8FC7 <code class="">icon</code> \u5C5E\u6027\u8BBE\u7F6E\u683C\u5B50\u5185\u7684\u56FE\u6807\uFF0C<code class="">text</code> \u5C5E\u6027\u8BBE\u7F6E\u6587\u5B57\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5217\u6570</h3><p>\u9ED8\u8BA4\u4E00\u884C\u5C55\u793A\u56DB\u4E2A\u683C\u5B50\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code class="">column</code> \u81EA\u5B9A\u4E49\u5217\u6570\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">column</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>\u6B63\u65B9\u5F62\u683C\u5B50</h3><p>\u8BBE\u7F6E <code class="">square</code> \u5C5E\u6027\u540E\uFF0C\u683C\u5B50\u7684\u9AD8\u5EA6\u4F1A\u548C\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">square</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>\u65E0\u8FB9\u6846</h3><p>\u8BBE\u7F6E noborder \u5C5E\u6027\u540E\uFF0C\u5C06\u4E0D\u663E\u793A\u8FB9\u6846\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">noborder</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p>\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u683C\u5B50\u5C55\u793A\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 40px;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 40px;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 40px;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>column</td><td>\u663E\u793A\u5217\u6570</td><td><code class="">string</code></td><td><code class="">4</code></td></tr><tr><td>noborder</td><td>\u662F\u5426\u9690\u85CF\u8FB9\u6846</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>square</td><td>\u662F\u5426\u5C06\u683C\u5B50\u56FA\u5B9A\u4E3A\u6B63\u65B9\u5F62</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>GridItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>text</td><td>\u663E\u793A\u7684\u6587\u5B57</td><td><code class="">string</code></td><td></td></tr><tr><td>icon</td><td>\u663E\u793A\u7684\u56FE\u6807</td><td><code class="">string</code></td><td></td></tr><tr><td>iconsize</td><td>\u56FE\u6807\u5927\u5C0F</td><td><code class="">string</code></td><td><code class="">28px</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--grid-item-background-color</code></td><td>\u683C\u5B50\u80CC\u666F\u8272</td><td><code class="">#FFFFFF</code></td></tr><tr><td><code class="">--grid-item-text-font-size</code></td><td>\u683C\u5B50\u6587\u5B57\u5927\u5C0F</td><td><code class="">12px</code></td></tr><tr><td><code class="">--grid-item-text-color</code></td><td>\u683C\u5B50\u6587\u5B57\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--grid-item-text-margin-top</code></td><td>\u683C\u5B50\u6587\u5B57\u8DDD icon \u7684\u8DDD\u79BB</td><td><code class="">8px</code></td></tr><tr><td><code class="">--grid-item-icon-font-size</code></td><td>icon \u5927\u5C0F</td><td><code class="">28px</code></td></tr><tr><td><code class="">--grid-item-hspacing</code></td><td>\u683C\u5B50\u5185\u5BB9\u5DE6\u53F3\u5185\u8FB9\u8DDD</td><td><code class="">16px</code></td></tr><tr><td><code class="">--grid-item-vspacing</code></td><td>\u683C\u5B50\u5185\u5BB9\u4E0A\u4E0B\u5185\u8FB9\u8DDD</td><td><code class="">16px</code></td></tr></tbody></table>`,28),c=[p],d={},g="",i=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(l(),t("div",u,c))}});export{i as default,g as excerpt,d as frontmatter};
