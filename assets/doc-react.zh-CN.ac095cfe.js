import{d as a,c as n,a as t,o as l}from"./vue.afd17d73.js";const u={class:"markdown-body"},p=t(`<h1>Popover \u6C14\u6CE1\u5F39\u51FA\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5F0F\u7684\u6C14\u6CE1\u83DC\u5355\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Popover, PopoverRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><p>\u5F53 Popover \u5F39\u51FA\u65F6\uFF0C\u4F1A\u57FA\u4E8E\u9ED8\u8BA4\u63D2\u69FD\u7684\u5185\u5BB9\u8FDB\u884C\u5B9A\u4F4D\u3002</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> openRef = useRef &lt; PopoverRef &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> actions = [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span> }];

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
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            handleClick();
          }}
        &gt;
          \u57FA\u672C\u4F7F\u7528
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u6D45\u8272\u6A21\u5F0F</h3><p>Popover \u652F\u6301\u6D45\u8272\u548C\u6DF1\u8272\u4E24\u79CD\u98CE\u683C\uFF0C\u9ED8\u8BA4\u4E3A\u6DF1\u8272\u98CE\u683C\uFF0C\u5C06 theme \u5C5E\u6027\u8BBE\u7F6E\u4E3A light \u53EF\u5207\u6362\u4E3A\u6D45\u8272\u98CE\u683C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>\u6D45\u8272\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
</code></pre><h3>\u5C55\u793A\u56FE\u6807</h3><p>\u5728 actions \u6570\u7EC4\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 icon \u5B57\u6BB5\u6765\u5B9A\u4E49\u9009\u9879\u7684\u56FE\u6807\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u6807\u94FE\u63A5\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> openRef = useRef &lt; PopoverRef &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> actions = [
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span>,
    },
  ];

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

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
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            handleClick();
          }}
        &gt;
          \u5C55\u793A\u56FE\u6807
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><p>\u5728 actions \u6570\u7EC4\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 disabled \u5B57\u6BB5\u6765\u7981\u7528\u67D0\u4E2A\u9009\u9879\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> actions = [
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https:xxx&quot;</span>,
    },
    {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span>,
    },
  ];
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> openRef = useRef &lt; PopoverRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

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
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            handleClick();
          }}
        &gt;
          \u7981\u7528\u67D0\u9879
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u5F39\u51FA\u4F4D\u7F6E</h3><p>\u901A\u8FC7 placement \u5C5E\u6027\u6765\u63A7\u5236\u6C14\u6CE1\u7684\u5F39\u51FA\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span>&gt;</span>\u6D45\u8272\u6A21\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
</code></pre><p>placement \u652F\u6301\u4EE5\u4E0B\u503C\uFF1A</p><pre><code class="language-js">top           # \u9876\u90E8\u4E2D\u95F4\u4F4D\u7F6E
topleft     # \u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E
topright       # \u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E
left          # \u5DE6\u4FA7\u4E2D\u95F4\u4F4D\u7F6E
lefttop    # \u5DE6\u4FA7\u4E0A\u65B9\u4F4D\u7F6E
leftbottom      # \u5DE6\u4FA7\u4E0B\u65B9\u4F4D\u7F6E
right         # \u53F3\u4FA7\u4E2D\u95F4\u4F4D\u7F6E
righttop   # \u53F3\u4FA7\u4E0A\u65B9\u4F4D\u7F6E
rightbottom     # \u53F3\u4FA7\u4E0B\u65B9\u4F4D\u7F6E
bottom        # \u5E95\u90E8\u4E2D\u95F4\u4F4D\u7F6E
bottomleft  # \u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E
bottomright    # \u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E
</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p>\u901A\u8FC7 content \u63D2\u69FD\uFF0C\u53EF\u4EE5\u5728 Popover \u5185\u90E8\u653E\u7F6E\u4EFB\u610F\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popover-content&quot;</span>&gt;</span>\u6211\u662F\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
</code></pre><h3>\u6EDA\u52A8\u5173\u95ED</h3><p>\u901A\u8FC7 scroolhidden \u5C5E\u6027\u6765\u63A7\u5236\u5F53\u9875\u9762\u6EDA\u52A8\u65F6\u662F\u5426\u5173\u95ED\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">scroolhidden</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;Popover&quot;</span>&gt;</span>\u6EDA\u52A8\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>popover \u662F\u5426\u663E\u793A</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>placement</td><td>tip \u5F39\u51FA\u4F4D\u7F6E</td><td>\u652F\u6301 <code class="">top</code> <code class="">topleft</code> <code class="">topright</code> <code class="">left</code> <code class="">lefttop</code> <code class="">leftbottom</code> <code class="">right</code> <code class="">righttop</code> <code class="">rightbottom</code> <code class="">bottom</code> <code class="">bottomleft</code> <code class="">bottomright</code></td><td><code class="">bottom</code></td></tr><tr><td>scroolhidden</td><td>\u5F53\u9875\u9762\u6EDA\u52A8\u540E\uFF0C\u662F\u5426\u81EA\u52A8\u5173\u95ED</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>popover \u5C42\u7EA7</td><td><code class="">number</code></td><td><code class="">999</code></td></tr><tr><td>theme</td><td>popover \u4E3B\u9898\u6A21\u5F0F</td><td>\u652F\u6301 <code class="">light</code> <code class="">dark</code></td><td><code class="">dark</code></td></tr><tr><td>onClose</td><td>popover \u6D88\u5931\u56DE\u8C03</td><td><code class="">() =&gt; void</code></td><td><code class="">require</code></td></tr><tr><td>onSelect</td><td>popover \u9009\u9879\u9009\u4E2D\u56DE\u8C03</td><td><code class="">(e:{detail:{action: PopoverAction, index: number}}) =&gt; void</code></td><td><code class="">require</code></td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setActions</td><td>\u7528\u4E8E\u8BBE\u7F6E Popover \u9009\u9879</td><td><code class="">(actions: PopoverAction[]) =&gt; void </code></td></tr></tbody></table><h3>PopoverAction \u6570\u636E\u7ED3\u6784</h3><pre><code class="language-js">type PopoverAction = {
  <span class="hljs-attr">text</span>: string,
  icon?: string, <span class="hljs-comment">// url link</span>
  disabled?: boolean,
};
</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--popover-background-color</code></td><td>popover \u80CC\u666F\u8272</td><td><code class="">#4a4a4a</code></td></tr><tr><td><code class="">--popover-color</code></td><td>popover \u9009\u9879\u6587\u5B57\u989C\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--popover-action-font-size</code></td><td>popover \u9009\u9879\u6587\u5B57\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--popover-action-font-weight</code></td><td>popover \u9009\u9879\u6587\u5B57\u81EA\u91CD</td><td><code class="">400</code></td></tr><tr><td><code class="">--popover-action-line-height</code></td><td>popover \u9009\u9879\u6587\u5B57\u884C\u9AD8</td><td><code class="">1.4</code></td></tr><tr><td><code class="">--popover-action-height</code></td><td>popover \u9009\u9879\u9AD8\u5EA6</td><td><code class="">44px</code></td></tr><tr><td><code class="">--popover-hspacing</code></td><td>popover \u6C34\u5E73\u5185\u8FB9\u8DDD</td><td><code class="">16px</code></td></tr><tr><td><code class="">--popover-margin-bottom</code></td><td>popover \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A <code class="">top</code>\u3001<code class="">topleft</code>\u3001<code class="">topright</code> \u65F6\u751F\u6548\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--popover-margin-top</code></td><td>popover \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A <code class="">bottom</code>\u3001<code class="">bottomleft</code>\u3001<code class="">bottomright</code> \u65F6\u751F\u6548\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--popover-margin-right</code></td><td>popover \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A <code class="">left</code>\u3001<code class="">lefttop</code>\u3001<code class="">leftbottom</code> \u65F6\u751F\u6548\uFF09</td><td><code class="">16px</code></td></tr><tr><td><code class="">--popover-margin-left</code></td><td>popover \u8DDD\u5B9E\u9645\u663E\u793A\u5143\u7D20\u8DDD\u79BB\uFF08placement \u4E3A <code class="">right</code>\u3001<code class="">righttop</code>\u3001<code class="">rightbottom</code> \u65F6\u751F\u6548\uFF09</td><td><code class="">16px</code></td></tr></tbody></table>`,38),e=[p],h={},j="",i=a({__name:"doc-react.zh-CN",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,d)=>(l(),n("div",u,e))}});export{i as default,j as excerpt,h as frontmatter};
