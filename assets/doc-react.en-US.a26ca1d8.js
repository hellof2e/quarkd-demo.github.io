import{d as t,c as a,a as n,o as l}from"./vue.9ec17576.js";const e={class:"markdown-body"},o=n(`<h1>Dialog</h1><h3>Intro</h3><p>A modal box pops up on the page.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>Alert<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a content&quot;</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a content&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Secondary button</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>Secondary button<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
        <span class="hljs-attr">btnvertical</span>=<span class="hljs-string">{true}</span>
        <span class="hljs-attr">oktext</span>=<span class="hljs-string">&quot;Primary button&quot;</span>
        <span class="hljs-attr">canceltext</span>=<span class="hljs-string">&quot;Secondary button&quot;</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a conetnt&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Alert without title</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>Alert without title<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;This is a content&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom body | Footer | Close button</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>Custom body | Footer | Close button<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
          <span class="hljs-attr">onclick</span>=<span class="hljs-string">{close}</span>
          <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/JPuH-8dD23.png&quot;</span>
          <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;close&quot;</span>
          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;close&quot;</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          This is custom body. The code is written for people to see, with the
          addition of running on the machine
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;footer&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;custom-footer&quot;</span>&gt;</span>
          {&quot; &quot;}
          Custom Footer{&quot; &quot;}
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>Content</td><td><code class="">string</code></td><td></td></tr><tr><td>oktext</td><td>Confirm button text</td><td><code class="">string</code></td><td></td></tr><tr><td>canceltext</td><td>Cancel button text</td><td><code class="">string</code></td><td></td></tr><tr><td>open</td><td>Whether to show dialog</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>Popup level</td><td><code class="">number</code></td><td><code class="">999</code></td></tr><tr><td>type</td><td>Type</td><td><code class="">modal</code>\u3001<code class="">confirm</code></td><td><code class="">modal</code></td></tr><tr><td>btnvertical</td><td>Whether the buttons are arranged vertically</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>nofooter</td><td>Whether to show footer</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideclose</td><td>Whether to hide the close button in the upper-right corner</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>maskclosable</td><td>Whether the click mask allow to close</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autoclose</td><td>Whether to close click event</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>hide</td><td>When autoclose is false, the functional call manually makes the pop-up window disappear to meet the flexible asynchronous requirements<code class=""> dialog.hide()</code></td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onConfirm</td><td>Emitted when the confirm button is clicked</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onCancel</td><td>Emitted when the cancel button is clicked</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onClose</td><td>Emitted when Dialog is closed</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>slot</td><td>Custom body</td></tr><tr><td>slot name=close</td><td>Custom close button</td></tr><tr><td>slot name=footer</td><td>Custom footer</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--dialog-width</code></td><td>Dialog width</td><td><code class="">320px</code></td></tr><tr><td><code class="">--dialog-title-font-size</code></td><td>Dialog font size</td><td></td></tr><tr><td><code class="">--dialog-title-color</code></td><td>Title font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--dialog-title-font-family</code></td><td>Title font family</td><td></td></tr><tr><td><code class="">--dialog-title-line-height</code></td><td>Title line height</td><td></td></tr><tr><td><code class="">--dialog-title-font-weight</code></td><td>Title font weight</td><td><code class="">700</code></td></tr><tr><td><code class="">--dialog-content-font-size</code></td><td>Content font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--dialog-content-color</code></td><td>Content font color</td><td><code class="">#5A6066</code></td></tr><tr><td><code class="">--dialog-content-font-weight</code></td><td>Content font weight</td><td><code class="">400</code></td></tr><tr><td><code class="">--dialog-content-font-family</code></td><td>Content font family</td><td><code class="">14px</code></td></tr><tr><td><code class="">--dialog-content-line-height</code></td><td>Content line height</td><td><code class="">20px</code></td></tr><tr><td><code class="">--dialog-btn-border-radius</code></td><td>Footer button border radius</td><td><code class="">8px</code></td></tr><tr><td><code class="">--dialog-btn-font-size</code></td><td>Footer button font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--dialog-btn-height</code></td><td>Footer button height</td><td><code class="">40px</code></td></tr></tbody></table>`,21),d=[o],i={},g="",j=t({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,h)=>(l(),a("div",e,d))}});export{j as default,g as excerpt,i as frontmatter};
