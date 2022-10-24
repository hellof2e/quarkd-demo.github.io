import{c as a,o as t,a as n}from"./vue.5fbbd235.js";const l={class:"markdown-body"},e=n(`<h1>Navbar</h1><h3>Intro</h3><p>Provide navigation function for the page</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Navbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;pageTitle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;leftTitle&quot;</span> <span class="hljs-attr">closehide</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&#39;left&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.left</span> {
    <span class="hljs-attribute">text-align</span>: left;
    <span class="hljs-attribute">padding-left</span>: <span class="hljs-number">50px</span>;
  }
</code></pre><h3>Text/Background color settings</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;pageTitle&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;bg&#39;</span> <span class="hljs-attr">righttext</span>=<span class="hljs-string">&quot;share&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;smallIcon&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;bg2&#39;</span> <span class="hljs-attr">iconsize</span>=<span class="hljs-string">&#39;18&#39;</span> <span class="hljs-attr">righttext</span>=<span class="hljs-string">&quot;share&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
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
</code></pre><h3>right button customization</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show right icon&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;share&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;text display on the right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Navbar</span>&gt;</span>
</code></pre><h3>Event</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> onLeftClick = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&#39;back&#39;</span>);
  };

  <span class="hljs-keyword">const</span> onRightClick = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&#39;clear&#39;</span>);
  };

  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&#39;close&#39;</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Navbar</span>
      <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;share&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Click left or right&quot;</span>
      <span class="hljs-attr">onLeftclick</span>=<span class="hljs-string">{onLeftClick}</span>
      <span class="hljs-attr">onRightclick</span>=<span class="hljs-string">{onRightClick}</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>
    /&gt;</span></span>
  )
}
</code></pre><h3>notice\uFF1AUse within the Hello App</h3><p>There is a navigation bar by default in the App (return to the +title column)\uFF0CIf you want to use this component, you need to use the client-side ability <strong>hide the native navigation bar</strong>. Take the <code>vue</code> project as an example:</p><p>HTML \uFF1A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0, viewport-fit=cover&quot;</span>&gt;</span>
</code></pre><pre><code class="language-tsx">useEffect(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// Android side takes effect</span>
  <span class="hljs-comment">// Set the topmost status bar to show and hide</span>
  Native.callNative({
    <span class="hljs-attr">classMap</span>: <span class="hljs-string">&#39;NavBar&#39;</span>,
    <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;setStatusBarColor&#39;</span>,
    <span class="hljs-attr">params</span>: {
      <span class="hljs-attr">isShowStatusBar</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// status bar display</span>
      <span class="hljs-attr">isDarkFont</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Status bar font black or white</span>
      <span class="hljs-attr">colorCode</span>: <span class="hljs-string">&#39;#666&#39;</span>, <span class="hljs-comment">// When the status bar is displayed, the background color code</span>
    },
  });
  <span class="hljs-comment">// Set whether the navigation bar is displayed</span>
  Native.callNative({
    <span class="hljs-attr">method</span>: <span class="hljs-string">&#39;showNaviBar&#39;</span>,
    <span class="hljs-attr">params</span>: {
      <span class="hljs-attr">isShow</span>: <span class="hljs-literal">false</span>,
    },
    <span class="hljs-attr">classMap</span>: <span class="hljs-string">&#39;NavBar&#39;</span>,
  });
}, [])
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>props</th><th>Description</th><th>Type</th><th>DefaultValue</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code>string</code></td><td></td></tr><tr><td>lefthide</td><td>Whether to hidden left content</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closehide</td><td>Whether to hidden the close icon</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>right</td><td>right node</td><td><code>string</code></td><td></td></tr><tr><td>safearea</td><td>Safe zone adaptation</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>iconsize</td><td>Default icon size</td><td><code>string</code></td><td><code>24px</code></td></tr><tr><td>onLeftClick</td><td>Emitted when the left button is clicked</td><td><code>() =&gt; void </code></td><td></td></tr><tr><td>onRightClick</td><td>Emitted when the right button is clicked</td><td><code>() =&gt; void</code></td><td></td></tr><tr><td>onClose</td><td>close click event</td><td><code>() =&gt; void </code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>\uFF0Cwhich can be used to customize styles.Please refer to<a href="#/zh-CN/guide/theme">ConfigProvider component</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>--navbar-title-font-weight</code></td><td>Title font weight</td><td><code>600</code></td></tr><tr><td><code>--navbar-title-color</code></td><td>Title color</td><td><code>inherit</code></td></tr><tr><td><code>--navbar-left-padding</code></td><td>Inner icon left spacing</td><td><code>16px</code></td></tr><tr><td><code>--navbar-left-space</code></td><td>Close icon left spacing</td><td><code>40px</code></td></tr><tr><td><code>--navbar-right-font-size</code></td><td>Right font size</td><td><code>inherit</code></td></tr><tr><td><code>--navbar-right-color</code></td><td>Right font color</td><td><code>inherit</code></td></tr><tr><td><code>--navbar-right-padding</code></td><td>Inner icon right spacing</td><td><code>16px</code></td></tr><tr><td><code>--navbar-right-font-weight</code></td><td>right font size</td><td><code>inherit</code></td></tr></tbody></table>`,28),p=[e],i={__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(t(),a("div",l,p))}};export{i as default};
