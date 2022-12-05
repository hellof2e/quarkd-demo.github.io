import{d as a,c as n,a as l,o as t}from"./vue.6c0d2727.js";const p={class:"markdown-body"},c=l(`<h1>Form</h1><h3>Intro</h3><p>Form</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/form&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Set value of form items, used with <code class="">name</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-field</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit1&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-built_in">this</span>.$refs.form1.setRules = ([
  { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;name&#39;</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;password&#39;</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;password&#39;</span> }
]);
<span class="hljs-function"><span class="hljs-title">submit1</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.form1.submit().then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&#39;current form values&#39;</span>);
  }).catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
    Toast.text(err)
  });
},
</code></pre><h3>Validate Rules</h3><p>Only useful for field components, supports required and validator custom events.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;age&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;age&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-field</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
    <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span>
    <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;11&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;phone&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;phone number&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit2&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
</code></pre><pre><code class="language-js"> <span class="hljs-built_in">this</span>.$refs.form2.setRules([
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;age&#39;</span>,
    <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;older than 18 years old&#39;</span>,
    <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> value &gt;= <span class="hljs-number">18</span>
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;phone&#39;</span>,
    <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Please enter the correct phone number&#39;</span>,
    <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> <span class="hljs-regexp">/^1[3456789]\\d{9}$/g</span>.test(value)
  }
  ]);

  <span class="hljs-function"><span class="hljs-title">submit2</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.form2.submit().then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&#39;current form values&#39;</span>);
    }).catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
      Toast.text(err)
    });
  },
</code></pre><h3>Form Items</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;field&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;age&quot;</span>
    <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;field&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-field</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;textarea&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Vegetables:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;checkbox1&quot;</span>
      &gt;</span>Cucumber&lt;/quark-checkbox
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;checkbox2&quot;</span>
      &gt;</span>Ginger&lt;/quark-checkbox
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Fruits:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;blue&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Switch on:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Rate:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Stepper:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;step&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Uploader:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">iconcolor</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">preview</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Picker:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;datepicker&quot;</span> <span class="hljs-attr">isLink</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerRef&quot;</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose time&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;picker&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit3&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
</code></pre><pre><code class="language-js">  <span class="hljs-function"><span class="hljs-title">submit3</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$refs.form3.submit().then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
        Toast.text(<span class="hljs-string">&#39;Please check form value in the console&#39;</span>);
        <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&#39;current form values&#39;</span>);
      });
    },
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.datepicker = detail.value.map(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> i.value).join(<span class="hljs-string">&#39; &#39;</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    }
</code></pre><h2>API</h2><h3>Method</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>submit</td><td>Submit and validate the form to get all form items value</td><td><code class="">() =&gt; Promise&lt;value: any[]&gt;</code></td></tr><tr><td>setRules</td><td>Only valid for field component</td><td><code class="">(rule: Rule[])=&gt;void</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type Rule = {
  <span class="hljs-attr">name</span>: string <span class="hljs-comment">// \`Name\` prop of field component that needs to be validated</span>
  required?: boolean <span class="hljs-comment">// Whether to be required</span>
  message?: string <span class="hljs-comment">// Error text</span>
  <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value: string</span>) =&gt;</span> <span class="hljs-keyword">void</span>; <span class="hljs-comment">// Custom validator function</span>
};
</code></pre>`,21),h=[c],i={},u="",g=a({__name:"doc.en-US",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,j)=>(t(),n("div",p,h))}});export{g as default,u as excerpt,i as frontmatter};
