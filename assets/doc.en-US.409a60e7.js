import{d as a,c as n,a as t,o as l}from"./vue.c4b2ed7f.js";const p={class:"markdown-body"},c=t(`<h1>CascadePicker</h1><h3>Intro</h3><p>The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities. The data nesting depth of cascading selection needs to be consistent. If some options have no sub-options, you can use an empty string as a placeholder.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/cascadepicker&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cascade-picker</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose&quot;</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerRef&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//Simulate async fetch</span>
      <span class="hljs-keyword">const</span> picker = <span class="hljs-built_in">this</span>.$refs.pickerRef;
      picker.setColumns(
        [
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
      )
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value)
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    },
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value)
    }
  }
};
</code></pre><h3>Custom Header</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Custom Header<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>Custom Header<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cascade-picker</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerRef&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      <span class="hljs-attr">bottomhidden</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;head-container&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cancel&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;picker-title&quot;</span>&gt;</span>Please choose city<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ensure&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;confirm&quot;</span>&gt;</span>Confirm<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-cascade-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//Simulate async fetch</span>
      <span class="hljs-keyword">const</span> picker = <span class="hljs-built_in">this</span>.$refs.pickerRef;
      picker.setColumns(
        [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
            <span class="hljs-attr">children</span>: [
              {
                <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
                <span class="hljs-attr">children</span>: [
                  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Gulou District&#39;</span> },
                  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Taijiang District&#39;</span> }
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
      )
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> picker = <span class="hljs-built_in">this</span>.$refs.pickerRef;
      <span class="hljs-keyword">const</span> values = picker.getValues()
      <span class="hljs-built_in">console</span>.log(values)
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    },
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value)
    }
  }
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether to show Picker</td><td><code class="">boolean </code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string </code></td><td></td></tr><tr><td>bottomhidden</td><td>Whether to show bottom button (use with custom header\uFF09</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>close</td><td>Emitted when click mask or cancel button.</td><td><code class="">() =&gt; void</code></td></tr><tr><td>confirm</td><td>Emitted when click confirm button.</td><td><code class="">\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void</code></td></tr><tr><td>change</td><td>Emitted when current option changed.</td><td><code class="">\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void </code></td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=header</td><td>Custom header</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setColumns</td><td>Set current value of Picker</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get values selected by Picker, usually used with custom header.</td><td><code class="">\uFF08\uFF09=&gt; SelectedColumn[]</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">text</span>: string;
  children: PickerColumn[];
};

type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};

</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--cascadepicker-title-font-size</code></td><td>Title font size</td><td><code class="">18px</code></td></tr><tr><td><code class="">--cascadepicker-title-color</code></td><td>Title font color</td><td><code class=""> #242729</code></td></tr><tr><td><code class="">--cascadepicker-title-font-weight</code></td><td>Title font weight</td><td><code class="">500</code></td></tr><tr><td><code class="">--cascadepicker-title-font-family</code></td><td>Title font family</td><td><code class="">PingFangSC-Medium, PingFang SC</code></td></tr></tbody></table>`,25),e=[c],d={},j="",u=a({__name:"doc.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,i)=>(l(),n("div",p,e))}});export{u as default,j as excerpt,d as frontmatter};
