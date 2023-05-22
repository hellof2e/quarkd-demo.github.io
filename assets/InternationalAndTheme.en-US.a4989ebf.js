import{d as a,c as e,a as t,o as n}from"./vue.49cbd51d.js";const l={class:"markdown-body"},o=t(`<h1>Internationalization</h1><h2>Intro</h2><p>Quarkd uses Chinese as the default language and supports multi-language switching. Please follow the tutorial below to set internationalization.</p><h2>Multi-language switch</h2><p>Quarkd implements multi-language support through the Locale component, and you can use the Locale.use method to switch the currently used language.</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> Locale, { zhCN } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale&quot;</span>;

Locale.use(zhCN);
</code></pre><h2>Override language packs</h2><p>The Locale.add method can be used to modify the text. Examples are as follows:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> Locale <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale&quot;</span>;

Locale.add({
  <span class="hljs-attr">confirm</span>: <span class="hljs-string">&quot;Custom confirm&quot;</span>,
  <span class="hljs-attr">pullRefresh</span>: {
    <span class="hljs-attr">pulling</span>: <span class="hljs-string">&quot;Custom pull to refresh...&quot;</span>,
    <span class="hljs-attr">loosing</span>: <span class="hljs-string">&quot;Custom loose to refresh...&quot;</span>,
  },
});
</code></pre><h2>Currently supported languages</h2><table><thead><tr><th>Languages</th><th>File</th><th>Version</th></tr></thead><tbody><tr><td>English</td><td>en-US</td><td><code class="">v1.0.0</code></td></tr><tr><td>Simplified Chinese</td><td>zh-CN</td><td><code class="">v1.0.0</code></td></tr><tr><td>Traditional Chinese</td><td>zh-TW</td><td><code class="">v1.0.0</code></td></tr><tr><td>Indonesian</td><td>id-ID</td><td><code class="">v1.0.0</code></td></tr><tr><td>Thai</td><td>th-TH</td><td><code class="">v1.0.0</code></td></tr></tbody></table><br><br><h2>Variables</h2><p>View all language configs</p><pre><code class="language-ts"><span class="hljs-comment">// English Examples</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">save</span>: <span class="hljs-string">&quot;Save&quot;</span>,
  <span class="hljs-attr">confirm</span>: <span class="hljs-string">&quot;Confirm&quot;</span>,
  <span class="hljs-attr">cancel</span>: <span class="hljs-string">&quot;Cancel&quot;</span>,
  <span class="hljs-attr">delete</span>: <span class="hljs-string">&quot;Delete&quot;</span>,
  <span class="hljs-attr">loading</span>: <span class="hljs-string">&quot;Loading...&quot;</span>,
  <span class="hljs-attr">placehold</span>: <span class="hljs-string">&quot;Please input content&quot;</span>,
  <span class="hljs-attr">image</span>: {
    <span class="hljs-attr">loadError</span>: <span class="hljs-string">&quot;Loaded error&quot;</span>,
  },
  <span class="hljs-attr">pullRefresh</span>: {
    <span class="hljs-attr">pulling</span>: <span class="hljs-string">&quot;Pull to refresh...&quot;</span>,
    <span class="hljs-attr">loosing</span>: <span class="hljs-string">&quot;Loose to refresh...&quot;</span>,
  },
  <span class="hljs-attr">search</span>: {
    <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&quot;Please input keywords&quot;</span>,
  },
  <span class="hljs-attr">actionSheet</span>: {
    <span class="hljs-attr">shareTitle</span>: <span class="hljs-string">&quot;Share to&quot;</span>,
  },
};
</code></pre><h2>How to internationalize business code?</h2><p>This can be done using <code class="">i18n</code>.</p><br><br><br><br><br><br><h1>Custom Themes</h1><p>Quarkd provides a set of UI themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.</p><div><br><img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quarkd Custom Themes"> \xA0\xA0\xA0\xA0\xA0\xA0 <img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quarkd Custom Themes"><br></div><h2>Style Variable</h2><p>Unlike some frameworks that use <code class="">less</code>, <code class="">sass</code> and other preprocessors, Quark uses <code class="">CSS</code>[custom properties](<a href="https://developer.mozilla.org/zh">https://developer.mozilla.org/zh</a> CN/docs/Web/CSS/Using_CSS_custom_properties) to achieve . You just need to set the following variables in your project to modify theme styles:</p><pre><code class="language-less"><span class="hljs-selector-pseudo">:root</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
  --quark-warning-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fb990f</span>;
  --quark-danger-<span class="hljs-attribute">color</span>: <span class="hljs-number">#ff5526</span>;
  --quark-success-<span class="hljs-attribute">color</span>: <span class="hljs-number">#07c160</span>;
}
</code></pre><h2>Custom Themes</h2><p>Set theme colors individually for components:</p><pre><code class="language-less"><span class="hljs-selector-tag">quark-button</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
}
</code></pre><p>Set the theme color globally for all components:</p><pre><code class="language-less"><span class="hljs-selector-pseudo">:root</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
}
</code></pre>`,35),r=[o],u={},i="",m=a({__name:"InternationalAndTheme.en-US",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,h)=>(n(),e("div",l,r))}});export{m as default,i as excerpt,u as frontmatter};
