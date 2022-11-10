import{d as a,c as t,a as n,o as u}from"./vue.de3638f0.js";const l={class:"markdown-body"},p=n(`<h1>Navbar \u5934\u90E8\u5BFC\u822A</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/navbar&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9875\u9762\u6807\u9898&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DE6\u6807\u9898&quot;</span> <span class="hljs-attr">closehide</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.left</span> {
  <span class="hljs-attribute">text-align</span>: left;
  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">50px</span>;
}
</code></pre><h3>\u6587\u5B57/\u80CC\u666F\u989C\u8272\u8BBE\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9875\u9762\u6807\u9898&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg&quot;</span> <span class="hljs-attr">righttext</span>=<span class="hljs-string">&quot;\u5206\u4EAB&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5C0F\u53F7\u56FE\u6807&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg2&quot;</span>
  <span class="hljs-attr">iconsize</span>=<span class="hljs-string">&quot;18&quot;</span>
  <span class="hljs-attr">righttext</span>=<span class="hljs-string">&quot;\u5206\u4EAB&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.bg</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#7ec1ff</span>, <span class="hljs-number">#2197ff</span>);
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
}
<span class="hljs-selector-class">.bg2</span> {
  <span class="hljs-attribute">background</span>: purple;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
}
</code></pre><h3>\u5DE6\u4FA7\u6309\u94AE\u81EA\u5B9A\u4E49</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DE6\u4FA7\u81EA\u5B9A\u4E49\u56FE\u6807\u5C55\u793A&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DE6\u4FA7\u6587\u5B57\u5C55\u793A&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u8FD4\u56DE<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
</code></pre><h3>\u53F3\u4FA7\u6309\u94AE\u81EA\u5B9A\u4E49</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u53F3\u4FA7\u56FE\u6807\u5C55\u793A&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;\u5206\u4EAB&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u53F3\u4FA7\u6587\u5B57\u5C55\u793A&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
</code></pre><h3>\u4E8B\u4EF6\u7ED1\u5B9A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-navbar</span>
  <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;\u5206\u4EAB&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Click left or right&quot;</span>
  @<span class="hljs-attr">leftclick</span>=<span class="hljs-string">&quot;onLeftClick&quot;</span>
  @<span class="hljs-attr">rightclick</span>=<span class="hljs-string">&quot;onRightClick&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-navbar</span>&gt;</span>
</code></pre><h3>\u6CE8\u610F\uFF1A\u54C8\u5570 App \u5185\u4F7F\u7528</h3><p>App \u4E2D\u9ED8\u8BA4\u6709\u5BFC\u822A\u680F\uFF08\u8FD4\u56DE+title \u90A3\u680F\uFF09\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u672C\u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528\u5BA2\u6237\u7AEF\u80FD\u529B<strong>\u9690\u85CF\u539F\u751F\u5BFC\u822A\u680F</strong>\u3002\u4EE5 <code class="">vue</code> \u9879\u76EE\u4E3E\u4F8B\uFF1A</p><p>HTML \u4E2D\u8BBE\u7F6E\uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">meta</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0, viewport-fit=cover&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-tsx"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-comment">// \u5B89\u5353\u7AEF\u751F\u6548</span>
    <span class="hljs-comment">// \u8BBE\u7F6E\u6700\u9876\u90E8\u72B6\u6001\u680F\u663E\u793A\u548C\u9690\u85CF</span>
    Native.callNative({
        <span class="hljs-attr">classMap</span>: <span class="hljs-string">&#39;NavBar&#39;</span>,
        <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;setStatusBarColor&#39;</span>,
        <span class="hljs-attr">params</span>: {
            <span class="hljs-attr">isShowStatusBar</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// \u72B6\u6001\u680F\u663E\u793A</span>
            <span class="hljs-attr">isDarkFont</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// \u72B6\u6001\u680F\u5B57\u4F53\u9ED1 or \u767D</span>
            <span class="hljs-attr">colorCode</span>: <span class="hljs-string">&#39;#666&#39;</span>, <span class="hljs-comment">// \u72B6\u6001\u680F\u663E\u793A\u65F6\uFF0C\u80CC\u666F\u989C\u8272\u4EE3\u7801</span>
        },
    });
    <span class="hljs-comment">// \u8BBE\u7F6E\u5BFC\u822A\u680F\u662F\u5426\u663E\u793A</span>
    Native.callNative({
        <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;showNaviBar&#39;</span>,
        <span class="hljs-attr">params</span>: {
            <span class="hljs-attr">isShow</span>: <span class="hljs-literal">false</span>,
        },
        <span class="hljs-attr">classMap</span>: <span class="hljs-string">&#39;NavBar&#39;</span>,
    });
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>lefthide</td><td>\u662F\u5426\u9690\u85CF\u5DE6\u4FA7\u5185\u5BB9</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>closehide</td><td>\u662F\u5426\u9690\u85CF\u5173\u95ED\u56FE\u6807</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>right</td><td>\u53F3\u4FA7\u8282\u70B9</td><td><code class="">string</code></td><td></td></tr><tr><td>safearea</td><td>\u5B89\u5168\u533A\u9002\u914D</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>iconsize</td><td>\u9ED8\u8BA4\u56FE\u6807\u5927\u5C0F</td><td><code class="">string </code></td><td><code class="">24px</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>leftclick</td><td>\u5DE6\u4FA7\u70B9\u51FB\u4E8B\u4EF6</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr><tr><td>rightclick</td><td>\u53F3\u4FA7\u70B9\u51FB\u4E8B\u4EF6</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr><tr><td>close</td><td>\u5173\u95ED\u70B9\u51FB\u4E8B\u4EF6</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--navbar-title-font-weight</code></td><td>\u6807\u9898\u81EA\u91CD</td><td><code class="">600</code></td></tr><tr><td><code class="">--navbar-title-color</code></td><td>\u6807\u9898\u989C\u8272</td><td><code class="">\u7EE7\u627F</code></td></tr><tr><td><code class="">--navbar-left-padding</code></td><td>\u5185\u90E8\u56FE\u6807\u5DE6\u95F4\u8DDD</td><td><code class="">16px</code></td></tr><tr><td><code class="">--navbar-left-space</code></td><td>\u5173\u95ED\u56FE\u6807\u5DE6\u95F4\u8DDD</td><td><code class="">40px</code></td></tr><tr><td><code class="">--navbar-right-font-size</code></td><td>\u53F3\u4FA7\u5B57\u4F53\u5927\u5C0F</td><td><code class="">\u7EE7\u627F</code></td></tr><tr><td><code class="">--navbar-right-color</code></td><td>\u53F3\u4FA7\u5B57\u4F53\u989C\u8272</td><td><code class="">\u7EE7\u627F</code></td></tr><tr><td><code class="">--navbar-right-padding</code></td><td>\u5185\u90E8\u56FE\u6807\u53F3\u95F4\u8DDD</td><td><code class="">16px</code></td></tr><tr><td><code class="">--navbar-right-font-weight</code></td><td>\u53F3\u4FA7\u5B57\u4F53\u5927\u5C0F</td><td><code class="">\u7EE7\u627F</code></td></tr></tbody></table>`,30),c=[p],o={},F="",j=a({__name:"doc.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,d)=>(u(),t("div",l,c))}});export{j as default,F as excerpt,o as frontmatter};
