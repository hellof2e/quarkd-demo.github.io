import{d as a,c as n,a as t,o as l}from"./vue.c83d0651.js";const e={class:"markdown-body"},p=t(`<h1>CascadePicker</h1><h3>Intro</h3><p>The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities. The data nesting depth of cascading selection needs to be consistent. If some options have no sub-options, you can use an empty string as a placeholder.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { CascadePicker, CascadePickerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> DATA = [
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Zhejiang&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Hangzhou&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;West Lake District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Yuhang District&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Wenzhou&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Lucheng District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Ouhai District&quot;</span> }],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Fujian&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Fuzhou&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Gulou District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Taijiang District&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Xiamen&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Siming District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Haicang District&quot;</span> }],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Beijing&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;&#39;</span> }],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef &lt; CascadePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> values = detail.value
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&quot;\uFF0C&quot;</span>);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`Current selected\uFF1A<span class="hljs-subst">\${values}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">//Simulate async fetch</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, <span class="hljs-number">1000</span>);
  }, []);

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CascadePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose&quot;</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Header</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> DATA = [
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Zhejiang&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Hangzhou&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;West Lake District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Yuhang District&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Wenzhou&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Lucheng District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Ouhai District&quot;</span> }],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Fujian&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Fuzhou&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Gulou District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Taijiang District&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Xiamen&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Siming District&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Haicang District&quot;</span> }],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef &lt; CascadePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { current } = pickerRef;
    <span class="hljs-keyword">const</span> values = current
      .getValues()
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&quot;\uFF0C&quot;</span>);
    <span class="hljs-built_in">console</span>.log(values);
    setOpen(<span class="hljs-literal">false</span>);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">//Simulate async fetch</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, <span class="hljs-number">1000</span>);
  }, []);

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CascadePicker</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">bottomhidden</span>
      &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;head-container&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cancel&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClose}</span>&gt;</span>
            Cancel
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;picker-title&quot;</span>&gt;</span>Please choose city<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ensure&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleConfirm}</span>&gt;</span>
            Confirm
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CascadePicker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether to show Picker</td><td><code class="">boolean </code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string </code></td><td></td></tr><tr><td>bottomhidden</td><td>Whether to show bottom button (use with custom header\uFF09</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>onClose</td><td>Emitted when click mask or cancel button.</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onConfirm</td><td>Emitted when click confirm button.</td><td><code class="">\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void</code></td><td></td></tr><tr><td>onChange</td><td>Emitted when current option changed.</td><td><code class="">\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void </code></td><td></td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=header</td><td>Custom header</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setColumns</td><td>Set current value of Picker</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get values selected by Picker, usually used with custom header.</td><td><code class="">\uFF08\uFF09=&gt; SelectedColumn[]</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">text</span>: string;
  children: PickerColumn[];
};

type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};

</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--cascadepicker-title-font-size</code></td><td>Title font size</td><td><code class="">18px</code></td></tr><tr><td><code class="">--cascadepicker-title-color</code></td><td>Title font color</td><td><code class=""> #242729</code></td></tr><tr><td><code class="">--cascadepicker-title-font-weight</code></td><td>Title font weight</td><td><code class="">500</code></td></tr><tr><td><code class="">--cascadepicker-title-font-family</code></td><td>Title font family</td><td><code class="">PingFangSC-Medium, PingFang SC</code></td></tr></tbody></table>`,21),c=[p],d={},j="",u=a({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),n("div",e,c))}});export{u as default,j as excerpt,d as frontmatter};
