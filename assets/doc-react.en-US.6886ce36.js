import{d as a,c as t,a as n,o as l}from"./vue.0697e832.js";const e={class:"markdown-body"},c=n(`<h1>Navbar</h1><h3>Intro</h3><p>Provide navigation function for the page</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Navbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;pageTitle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;leftTitle&quot;</span> <span class="hljs-attr">closehide</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.left</span> {
  <span class="hljs-attribute">text-align</span>: left;
  <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">50px</span>;
}
</code></pre><h3>Text/Background color settings</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;pageTitle&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg&quot;</span> <span class="hljs-attr">righttext</span>=<span class="hljs-string">&quot;share&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;smallIcon&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg2&quot;</span> <span class="hljs-attr">iconsize</span>=<span class="hljs-string">&quot;18&quot;</span> <span class="hljs-attr">righttext</span>=<span class="hljs-string">&quot;share&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.bg</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#7ec1ff</span>, <span class="hljs-number">#2197ff</span>);
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
}
<span class="hljs-selector-class">.bg2</span> {
  <span class="hljs-attribute">background</span>: purple;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
}
</code></pre><h3>left button customization</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Display left custom icon&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show left text&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>back<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
</code></pre><h3>right button customization</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show right icon&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;share&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;text display on the right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
</code></pre><h3>Event</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> onLeftClick = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&quot;back&quot;</span>);
  };

  <span class="hljs-keyword">const</span> onRightClick = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&quot;clear&quot;</span>);
  };

  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&quot;close&quot;</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span>
      <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;share&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Click left or right&quot;</span>
      <span class="hljs-attr">onLeftclick</span>=<span class="hljs-string">{onLeftClick}</span>
      <span class="hljs-attr">onRightclick</span>=<span class="hljs-string">{onRightClick}</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>
    /&gt;</span></span>
  );
};
</code></pre><h3>notice\uFF1AUse within the Hello App</h3><p>There is a navigation bar by default in the App (return to the +title column)\uFF0CIf you want to use this component, you need to use the client-side ability <strong>hide the native navigation bar</strong>. Take the <code class="">vue</code> project as an example:</p><p>HTML \uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">meta</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0, viewport-fit=cover&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-tsx">useEffect(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// Android side takes effect</span>
  <span class="hljs-comment">// Set the topmost status bar to show and hide</span>
  Native.callNative({
    <span class="hljs-attr">classMap</span>: <span class="hljs-string">&quot;NavBar&quot;</span>,
    <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;setStatusBarColor&quot;</span>,
    <span class="hljs-attr">params</span>: {
      <span class="hljs-attr">isShowStatusBar</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// status bar display</span>
      <span class="hljs-attr">isDarkFont</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Status bar font black or white</span>
      <span class="hljs-attr">colorCode</span>: <span class="hljs-string">&quot;#666&quot;</span>, <span class="hljs-comment">// When the status bar is displayed, the background color code</span>
    },
  });
  <span class="hljs-comment">// Set whether the navigation bar is displayed</span>
  Native.callNative({
    <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;showNaviBar&quot;</span>,
    <span class="hljs-attr">params</span>: {
      <span class="hljs-attr">isShow</span>: <span class="hljs-literal">false</span>,
    },
    <span class="hljs-attr">classMap</span>: <span class="hljs-string">&quot;NavBar&quot;</span>,
  });
}, []);
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>props</th><th>Description</th><th>Type</th><th>DefaultValue</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>lefthide</td><td>Whether to hidden left content</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>closehide</td><td>Whether to hidden the close icon</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>right</td><td>right node</td><td><code class="">string</code></td><td></td></tr><tr><td>safearea</td><td>Safe zone adaptation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>iconsize</td><td>Default icon size</td><td><code class="">string</code></td><td><code class="">24px</code></td></tr><tr><td>onLeftclick</td><td>Emitted when the left button is clicked</td><td><code class="">() =&gt; void </code></td><td></td></tr><tr><td>onRightclick</td><td>Emitted when the right button is clicked</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onClose</td><td>close click event</td><td><code class="">() =&gt; void </code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>\uFF0Cwhich can be used to customize styles.Please refer to<a href="#/zh-CN/guide/theme">ConfigProvider component</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--navbar-title-font-weight</code></td><td>Title font weight</td><td><code class="">600</code></td></tr><tr><td><code class="">--navbar-title-color</code></td><td>Title color</td><td><code class="">inherit</code></td></tr><tr><td><code class="">--navbar-left-padding</code></td><td>Inner icon left spacing</td><td><code class="">16px</code></td></tr><tr><td><code class="">--navbar-left-space</code></td><td>Close icon left spacing</td><td><code class="">40px</code></td></tr><tr><td><code class="">--navbar-right-font-size</code></td><td>Right font size</td><td><code class="">inherit</code></td></tr><tr><td><code class="">--navbar-right-color</code></td><td>Right font color</td><td><code class="">inherit</code></td></tr><tr><td><code class="">--navbar-right-padding</code></td><td>Inner icon right spacing</td><td><code class="">16px</code></td></tr><tr><td><code class="">--navbar-right-font-weight</code></td><td>right font size</td><td><code class="">inherit</code></td></tr></tbody></table>`,28),p=[c],i={},g="",j=a({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),t("div",e,p))}});export{j as default,g as excerpt,i as frontmatter};
