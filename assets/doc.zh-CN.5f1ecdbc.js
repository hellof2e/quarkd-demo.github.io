import{d as a,c as t,a as n,o as l}from"./vue.0bf5e0d8.js";const u={class:"markdown-body"},p=n(`<h1>Tooltip \u6587\u5B57\u63D0\u793A</h1><h3>\u4ECB\u7ECD</h3><p>\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/tooltip&quot;</span>;
</code></pre><h3>\u8BBE\u7F6E tips \u65B9\u5411</h3><p>\u901A\u8FC7 <code class="">placement</code> \u5C5E\u6027\u6765\u63A7\u5236\u6C14\u6CE1\u7684\u5F39\u51FA\u4F4D\u7F6E\u3002</p><pre><code class="language-tsx">&lt;quark-tooltip placement=<span class="hljs-string">&quot;top&quot;</span> tips=<span class="hljs-string">&quot;\u6C14\u6CE1\u6587\u5B57&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top \u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/quark-tooltip&gt;
</code></pre><p><code class="">placement</code> \u652F\u6301\u4EE5\u4E0B\u503C\uFF1A</p><pre><code class="language-tsx">top           # \u9876\u90E8\u4E2D\u95F4\u4F4D\u7F6E
topleft       # \u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E
topright      # \u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E
left          # \u5DE6\u4FA7\u4E2D\u95F4\u4F4D\u7F6E
lefttop       # \u5DE6\u4FA7\u4E0A\u65B9\u4F4D\u7F6E
leftbottom    # \u5DE6\u4FA7\u4E0B\u65B9\u4F4D\u7F6E
right         # \u53F3\u4FA7\u4E2D\u95F4\u4F4D\u7F6E
righttop      # \u53F3\u4FA7\u4E0A\u65B9\u4F4D\u7F6E
rightbottom   # \u53F3\u4FA7\u4E0B\u65B9\u4F4D\u7F6E
bottom        # \u5E95\u90E8\u4E2D\u95F4\u4F4D\u7F6E
bottomleft    # \u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E
bottomright   # \u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E
</code></pre><h3>\u663E\u793A\u5173\u95ED\u6309\u94AE</h3><p>\u901A\u8FC7 closeable \u5C5E\u6027\u6765\u63A7\u5236\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;\u6C14\u6CE1\u6587\u5B57&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top \u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h3>\u662F\u5426\u81EA\u52A8\u5173\u95ED</h3><p>\u901A\u8FC7 autoclose \u5C5E\u6027\u6765\u63A7\u5236\u662F\u5426\u81EA\u52A8\u5173\u95ED\uFF0C\u901A\u8FC7 opentime \u5C5E\u6027\u63A7\u5236\u591A\u5C11\u6BEB\u79D2\u540E\u81EA\u52A8\u5173\u95ED\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;\u6C14\u6CE1\u6587\u5B57&quot;</span>
  <span class="hljs-attr">autoclose</span>
  <span class="hljs-attr">opentime</span>=<span class="hljs-string">&quot;5000&quot;</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top \u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h3>\u6EDA\u52A8\u5173\u95ED</h3><p>\u901A\u8FC7 scroolhidden \u5C5E\u6027\u6765\u63A7\u5236\u5F53\u9875\u9762\u6EDA\u52A8\u65F6\u662F\u5426\u5173\u95ED\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;\u6C14\u6CE1\u6587\u5B57&quot;</span>
  <span class="hljs-attr">scroolhidden</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top \u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;\u6C14\u6CE1\u6587\u5B57&quot;</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top \u4F4D\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.custom-style</span> {
    --tips-<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#0088ff</span>;
    --tips-<span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>tip \u662F\u5426\u663E\u793A</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>placement</td><td>tip \u5F39\u51FA\u4F4D\u7F6E</td><td>\u652F\u6301 <code class="">top</code> <code class="">topleft</code> <code class="">topright</code> <code class="">left</code> <code class="">lefttop</code> <code class="">leftbottom</code> <code class="">right</code> <code class="">righttop</code> <code class="">rightbottom</code> <code class="">bottom</code> <code class="">bottomleft</code> <code class="">bottomright</code></td><td><code class="">bottom</code></td></tr><tr><td>tips</td><td>tip \u6587\u5B57\u63D0\u793A\u5185\u5BB9</td><td><code class="">string</code></td><td><code class="">require</code></td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autoclose</td><td>\u663E\u793A\u540E\u662F\u5426\u81EA\u52A8\u5173\u95ED</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>opentime</td><td>\u663E\u793A\u540E\u5230\u81EA\u52A8\u5173\u95ED\u7684\u65F6\u95F4</td><td><code class="">string</code></td><td><code class="">3000</code></td></tr><tr><td>scroolhidden</td><td>\u5F53\u9875\u9762\u6EDA\u52A8\u540E\uFF0C\u662F\u5426\u81EA\u52A8\u5173\u95ED</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>tips \u5C42\u7EA7</td><td><code class="">number</code></td><td><code class="">999</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>close</td><td>tip \u6D88\u5931\u56DE\u8C03</td><td><code class="">() =&gt; void </code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--tips-background-color</code></td><td>tip \u80CC\u666F\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--tips-color</code></td><td>tip \u63D0\u793A\u6587\u5B57\u989C\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--tips-font-size</code></td><td>tip \u63D0\u793A\u6587\u5B57\u5927\u5C0F</td><td><code class="">14</code></td></tr><tr><td><code class="">--tips-font-weight</code></td><td>tip \u63D0\u793A\u6587\u5B57\u81EA\u91CD</td><td><code class="">400</code></td></tr><tr><td><code class="">--tips-line-height</code></td><td>tip \u63D0\u793A\u6587\u5B57\u884C\u9AD8</td><td><code class="">1.4</code></td></tr><tr><td><code class="">--tips-hspacing</code></td><td>tip \u6C34\u5E73\u5185\u8FB9\u8DDD</td><td><code class="">8px</code></td></tr><tr><td><code class="">--tips-vspacing</code></td><td>tip \u5782\u76F4\u5185\u8FB9\u8DDD</td><td><code class="">6px</code></td></tr><tr><td><code class="">--tips-margin-bottom</code></td><td>tip \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A top\u3001topleft\u3001topright \u65F6\u751F\u6548\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--tips-margin-top</code></td><td>tip \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A bottom\u3001bottomleft\u3001bottomright \u65F6\u751F\u6548\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--tips-margin-right</code></td><td>tip \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A left\u3001lefttop\u3001leftbottom \u65F6\u751F\u6548\uFF09</td><td><code class="">16px</code></td></tr><tr><td><code class="">--tips-margin-left</code></td><td>tip \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A right\u3001righttop\u3001rightbottom \u65F6\u751F\u6548\uFF09</td><td><code class="">16px</code></td></tr></tbody></table>`,33),c=[p],r={},i="",j=a({__name:"doc.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),t("div",u,c))}});export{j as default,i as excerpt,r as frontmatter};
