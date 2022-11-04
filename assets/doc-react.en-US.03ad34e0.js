import{c as a,o as n,a as t}from"./vue.2a70c3fc.js";const l={class:"markdown-body"},e=t(`<h1>CascadePicker</h1><h3>Intro</h3><p>The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities. The data nesting depth of cascading selection needs to be consistent. If some options have no sub-options, you can use an empty string as a placeholder.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { CascadePicker,CascadePickerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> DATA = [
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;West Lake District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Yuhang District&#39;</span> }
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Lucheng District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Ouhai District&#39;</span> }
        ],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Fujian&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Fuzhou&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Gulou District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Taijiang District&#39;</span> }
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Xiamen&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Siming District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Haicang District&#39;</span> }
        ],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef&lt;CascadePickerRef&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> values = detail.value
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&#39;\uFF0C&#39;</span>);
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

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

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
}

</code></pre><h3>Custom Header</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> DATA = [
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;West Lake District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Yuhang District&#39;</span> }
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Lucheng District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Ouhai District&#39;</span> }
        ],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Fujian&#39;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Fuzhou&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Gulou District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Taijiang District&#39;</span> }
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Xiamen&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Siming District&#39;</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Haicang District&#39;</span> }
        ],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef&lt;CascadePickerRef&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { current } = pickerRef;
    <span class="hljs-keyword">const</span> values = current
      .getValues()
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&#39;\uFF0C&#39;</span>);
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

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

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
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether to show Picker</td><td><code>boolean </code></td><td><code>require</code></td></tr><tr><td>title</td><td>Title</td><td><code>string </code></td><td></td></tr><tr><td>bottomhidden</td><td>Whether to show bottom button (use with custom header\uFF09</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>onClose</td><td>Emitted when click mask or cancel button.</td><td><code>() =&gt; void</code></td><td></td></tr><tr><td>onConfirm</td><td>Emitted when click confirm button.</td><td><code>\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void</code></td><td></td></tr><tr><td>onChange</td><td>Emitted when current option changed.</td><td><code>\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void </code></td><td></td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=header</td><td>Custom header</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setColumns</td><td>Set current value of Picker</td><td><code>(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get values selected by Picker, usually used with custom header.</td><td><code>\uFF08\uFF09=&gt; SelectedColumn[]</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">text</span>: string;
  children: PickerColumn[];
};

type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};

</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--cascadepicker-title-font-size</code></td><td>Title font size</td><td><code>18px</code></td></tr><tr><td><code>--cascadepicker-title-color</code></td><td>Title font color</td><td><code> #242729</code></td></tr><tr><td><code>--cascadepicker-title-font-weight</code></td><td>Title font weight</td><td><code>500</code></td></tr><tr><td><code>--cascadepicker-title-font-family</code></td><td>Title font family</td><td><code>PingFangSC-Medium, PingFang SC</code></td></tr></tbody></table>`,21),p=[e],d={__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(h,o)=>(n(),a("div",l,p))}};export{d as default};
