import{d as a,c as n,a as l,o as t}from"./vue.858c05d5.js";const p={class:"markdown-body"},c=l(`<h1>Form</h1><h3>Intro</h3><p>Form</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Form, FormRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Set value of form items, used with <code class="">name</code> prop.</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> form1 = useRef&lt;FormRef&gt;(<span class="hljs-literal">null</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    form1.current.setRules([
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;name&quot;</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;password&quot;</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;password&quot;</span> },
    ]);
  }, []);

  <span class="hljs-keyword">const</span> submit1 = <span class="hljs-function">() =&gt;</span> {
    form1.current
      .getValues()
      .then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&quot;22&quot;</span>);
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(e, <span class="hljs-string">&quot;e&quot;</span>);
        Toast.error(e.message || <span class="hljs-string">&quot;\u8BF7\u68C0\u67E5\u8868\u5355\u9879&quot;</span>);
      });
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{form1}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit1}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
          Submit
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span></span>
  );
};
</code></pre><h3>Validate Rules</h3><p>Only useful for field components, supports required and validator custom events.</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> form2 = useRef&lt;FormRef&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">const</span> submit2 = <span class="hljs-function">() =&gt;</span> {
    form2.current
      .getValues()
      .then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&quot;current form values&quot;</span>);
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
        Toast.error(e.message);
      });
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    form2.current.setRules([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;age&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;older than 18 years old&quot;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> value &gt;= <span class="hljs-number">18</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;phone&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Please enter the correct phone number&quot;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> <span class="hljs-regexp">/^1[3456789]\\d{9}$/g</span>.test(value),
      },
    ]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">From</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{form2}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;age&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span>
        <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;11&quot;</span>
        <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;phone&quot;</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;phone number&quot;</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">&quot;submit2&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
          Submit
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">From</span>&gt;</span></span>
  );
};
</code></pre><h3>Form Items</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [pickerStr, setStr] = useState(<span class="hljs-string">&quot;Please choose time&quot;</span>);
  <span class="hljs-keyword">const</span> form3 = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> picker = useRef();

  <span class="hljs-keyword">const</span> submit3 = <span class="hljs-function">() =&gt;</span> {
    form3.current.getValues().then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      Toast.text(<span class="hljs-string">&quot;Please check form value in the console&quot;</span>);
      <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&quot;current form values&quot;</span>);
    });
  };
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };
  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };
  <span class="hljs-keyword">const</span> confirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> datepickerStr = detail.value.map(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> i.value).join(<span class="hljs-string">&quot; &quot;</span>);
    setOpen(<span class="hljs-literal">false</span>);
    setStr(datepickerStr);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    picker.current.setColumns([
      {
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;Sun&quot;</span>, <span class="hljs-string">&quot;Mon&quot;</span>, <span class="hljs-string">&quot;Tue&quot;</span>, <span class="hljs-string">&quot;Wed&quot;</span>, <span class="hljs-string">&quot;Thu&quot;</span>, <span class="hljs-string">&quot;Fri&quot;</span>, <span class="hljs-string">&quot;Sat&quot;</span>],
      },
      {
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;a.m.&quot;</span>, <span class="hljs-string">&quot;p.m.&quot;</span>],
      },
    ]);
  }, []);
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo scoped-form&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{form3}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;age&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;textarea&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Vegetables:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>
              Cucumber
            <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>
              Ginger
            <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Fruits:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;blue&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Switch on:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Rate:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Rate</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Stepper:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;step&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Uploader:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">iconcolor</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">preview</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Picker<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{pickerStr}</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{click}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
            <span class="hljs-attr">ref</span>=<span class="hljs-string">{picker}</span>
            <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose time&quot;</span>
            <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;picker&quot;</span>
            <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
            <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>
            <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{confirm}</span>
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit3}</span>&gt;</span>
            Submit
          <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Method</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>submit</td><td>Submit and validate the form to get all form items value</td><td><code class="">() =&gt; Promise&lt;value: any[]&gt;</code></td></tr><tr><td>setRules</td><td>Only valid for field component</td><td><code class="">(rule: Rule[])=&gt;void</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type Rule = {
  <span class="hljs-attr">name</span>: string <span class="hljs-comment">// \`Name\` prop of field component that needs to be validated</span>
  required?: boolean <span class="hljs-comment">// Whether to be required</span>
  message?: string <span class="hljs-comment">// Error text</span>
  validator?: <span class="hljs-function">(<span class="hljs-params">value: string | number</span>) =&gt;</span> boolean; <span class="hljs-comment">// Custom validator function</span>
};
</code></pre>`,17),e=[c],g={},u="",i=a({__name:"doc-react.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,j)=>(t(),n("div",p,e))}});export{i as default,u as excerpt,g as frontmatter};
