import{c as e,o as a,a as o}from"./vue.c5ba06d9.js";const t={class:"markdown-body"},r=o(`<h1>Custom Themes</h1><p>Quark provides a set of UI themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.</p><div><br><img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quark Custom Themes"> \xA0\xA0\xA0\xA0\xA0\xA0 <img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quark Custom Themes"><br></div><h2>Style Variable</h2><p>Unlike some frameworks that use <code>less</code>, <code>sass</code> and other preprocessors, Quark uses <code>CSS</code>[custom properties](<a href="https://developer.mozilla.org/zh">https://developer.mozilla.org/zh</a> CN/docs/Web/CSS/Using_CSS_custom_properties) to achieve . You just need to set the following variables in your project to modify theme styles:</p><pre><code class="language-less"><span class="hljs-selector-pseudo">:root</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
  --quark-warning-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fb990f</span>;
  --quark-danger-<span class="hljs-attribute">color</span>: <span class="hljs-number">#ff5526</span>;
  --quark-success-<span class="hljs-attribute">color</span>: <span class="hljs-number">#07c160</span>;
}
</code></pre><h2>Custom Themes</h2><p>Set theme colors individually for components:</p><pre><code class="language-less"><span class="hljs-selector-tag">quark-button</span> { 
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088FF</span>;
}
</code></pre><p>Set the theme color globally for all components:</p><pre><code class="language-less"><span class="hljs-selector-pseudo">:root</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
}
</code></pre>`,11),l=[r],m={__name:"theme.en-US",setup(n,{expose:s}){return s({frontmatter:{}}),(p,h)=>(a(),e("div",t,l))}};export{m as default};
