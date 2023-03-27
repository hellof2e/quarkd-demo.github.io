import{d as a,c as t,a as n,o as l}from"./vue.c4355146.js";const e={class:"markdown-body"},p=n(`<h1>Popover</h1><h3>Intro</h3><p>Used to display some content on top of another.</p><h3>Install</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Popover, PopoverRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>When the Popover pops up, it is positioned based on the contents of the default slot.</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> openRef = useRef &lt; PopoverRef &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> actions = [
    { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option1&quot;</span> },
    { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option2&quot;</span> },
    { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option3&quot;</span> },
  ];
  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{lightRef}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          handleClose();
        }}
        onSelect={({ detail }) =&gt; {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      &gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;quark-popover&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>
        &gt;</span>
          Basic Usage
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Light Style</h3><p>Popover supports light and dark styles. The default is dark style. Set the theme property to light to switch to light style.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>Light Style<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
</code></pre><h3>Show Icon</h3><p>In the actions array, you can define the icon of the option through the icon field, which supports passing in image link.</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> openRef = useRef &lt; PopoverRef &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> actions = [
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option1&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option2&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option3&quot;</span>,
    },
  ];

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{lightRef}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onSelect</span>=<span class="hljs-string">{({</span> <span class="hljs-attr">detail</span> }) =&gt;</span> {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      &gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;quark-popover&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>
        &gt;</span>
          Show Icon
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Disabled</h3><p>In the actions array, an option can be disabled via the disabled field.</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> actions = [
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option1&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option2&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option3&quot;</span>,
    },
  ];
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> openRef = useRef &lt; PopoverRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{lightRef}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          handleClose();
        }}
        onSelect={({ detail }) =&gt; {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      &gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;quark-popover&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> handleClick()}
        &gt;
          Disabled
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Position</h3><p>The pop-up position of the bubble is controlled by the placement property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span>&gt;</span>Light Style<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
</code></pre><p>placement supports the following values:</p><pre><code class="language-js">top           # Top middle position
topleft       # Top left position
topright      # Top right position
left          # Left middle position
lefttop       # Left top position
leftbottom    # Left bottom position
right         # Right middle position
righttop      # Right top position
rightbottom   # Right bottom position
bottom        # Bottom middle position
bottomleft    # Bottom Left position
bottomright   # Bottom Right position
</code></pre><h3>Custom Content</h3><p>With the content slot, arbitrary content can be placed inside the Popover.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span>&gt;</span>Custom Style<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popover-content&quot;</span>&gt;</span>This is custom content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.popover-content</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">140px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#4a4a4a</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">color</span>: white;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>Close Scroll</h3><p>The scrollhidden property controls whether to close when the page is scrolled.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">scroolhidden</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span>&gt;</span>Close Scroll<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>open</td><td>Whether to show popover</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>placement</td><td>tip popup position</td><td><code class="">top</code> <code class="">topleft</code> <code class="">topright</code> <code class="">left</code> <code class="">lefttop</code> <code class="">leftbottom</code> <code class="">right</code> <code class="">righttop</code> <code class="">rightbottom</code> <code class="">bottom</code> <code class="">bottomleft</code> <code class="">bottomright</code></td><td><code class="">bottom</code></td></tr><tr><td>scroolhidden</td><td>Whether to close automatically when the page is scrolled</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>popover z-index</td><td><code class="">number</code></td><td><code class="">999</code></td></tr><tr><td>theme</td><td>popover theme mode</td><td>support <code class="">light</code> <code class="">dark</code></td><td><code class="">dark</code></td></tr><tr><td>onClose</td><td>Emitted when an action is closed</td><td><code class="">() =&gt; void</code></td><td><code class="">require</code></td></tr><tr><td>onSelect</td><td>Emitted when an action is clicked</td><td><code class="">(e:{detail:{action: PopoverAction, index: number}}) =&gt; void</code></td><td><code class="">require</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Callback</th></tr></thead><tbody><tr><td>setActions</td><td>Used to set Popover options</td><td><code class="">(actions: PopoverAction[]) =&gt; void</code></td></tr></tbody></table><h3>Data Structure of PopoverAction</h3><pre><code class="language-js">type PopoverAction = {
  <span class="hljs-attr">text</span>: string,
  icon?: string, <span class="hljs-comment">// url link</span>
  disabled?: boolean,
};
</code></pre><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles.Please refer to <a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--popover-background-color</code></td><td>popover background-color</td><td><code class="">#4a4a4a</code></td></tr><tr><td><code class="">--popover-color</code></td><td>popover font-color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--popover-action-font-size</code></td><td>popover font-size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--popover-action-font-weight</code></td><td>popover font-weight</td><td><code class="">400</code></td></tr><tr><td><code class="">--popover-action-line-height</code></td><td>popover line-height</td><td><code class="">1.4</code></td></tr><tr><td><code class="">--popover-action-height</code></td><td>popover height</td><td><code class="">44px</code></td></tr><tr><td><code class="">--popover-hspacing</code></td><td>popover horizontal padding</td><td><code class="">16px</code></td></tr><tr><td><code class="">--popover-margin-bottom</code></td><td>popover distance from actual display element\uFF08It takes effect when placement is top, topleft, topright\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--popover-margin-top</code></td><td>popover distance from actual display element\uFF08It takes effect when placement is bottom\u3001bottomleft\u3001bottomright\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--popover-margin-right</code></td><td>popover distance from actual display element\uFF08It takes effect when placement is left\u3001lefttop\u3001leftbottom\uFF09</td><td><code class="">16px</code></td></tr><tr><td><code class="">--popover-margin-left</code></td><td>popover distance from actual display element\uFF08It takes effect when placement is right\u3001righttop\u3001rightbottom\uFF09</td><td><code class="">16px</code></td></tr></tbody></table>`,38),o=[p],i={},j="",g=a({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),t("div",e,o))}});export{g as default,j as excerpt,i as frontmatter};
