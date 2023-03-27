import{d as a,c as n,a as l,o as p}from"./vue.62476c4f.js";const t={class:"markdown-body"},c=l(`<h1>Form \u8868\u5355</h1><h3>\u4ECB\u7ECD</h3><p>\u8868\u5355</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Form, FormRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><p>\u914D\u5408 name \u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit1}</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
          \u63D0\u4EA4
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219</h3><p>\u53EA\u5BF9 field \u7EC4\u4EF6\u6709\u7528\uFF0C\u652F\u6301 required \u3001validator \u81EA\u5B9A\u4E49\u4E8B\u4EF6</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> form2 = useRef&lt;FormRef&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">const</span> submit2 = <span class="hljs-function">() =&gt;</span> {
    form2.current
      .getValues()
      .then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&quot;22&quot;</span>);
      })
      .catch(<span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
        Toast.error(e.message || <span class="hljs-string">&quot;\u8BF7\u68C0\u67E5\u8868\u5355\u9879&quot;</span>);
      });
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    form2.current.setRules([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;age&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u4E0D\u80FD\u5C0F\u4E8E18\u5C81&quot;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> value &gt;= <span class="hljs-number">18</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;phone&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u6B63\u786E\u7684\u624B\u673A\u53F7&quot;</span>,
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> <span class="hljs-regexp">/^1[3456789]\\d{9}$/g</span>.test(value),
      },
    ]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">From</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{form2}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6587\u672C&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;11&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;phone&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">&quot;submit2&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
          \u63D0\u4EA4
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">From</span>&gt;</span></span>
  );
};
</code></pre><h3>\u8868\u5355\u9879\u5927\u5168</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [pickerStr, setStr] = useState(<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>);
  <span class="hljs-keyword">const</span> form3 = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> picker = useRef();

  <span class="hljs-keyword">const</span> submit3 = <span class="hljs-function">() =&gt;</span> {
    form3.current.getValues().then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      Toast.text(<span class="hljs-string">&quot;\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u8868\u5355\u503C&quot;</span>);
      <span class="hljs-built_in">console</span>.log(value, <span class="hljs-string">&quot;22&quot;</span>);
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
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;\u661F\u671F\u4E00&quot;</span>, <span class="hljs-string">&quot;\u661F\u671F\u4E8C&quot;</span>, <span class="hljs-string">&quot;\u661F\u671F\u4E09&quot;</span>, <span class="hljs-string">&quot;\u661F\u671F\u56DB&quot;</span>, <span class="hljs-string">&quot;\u661F\u671F\u4E94&quot;</span>],
      },
      {
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;\u4E0A\u5348&quot;</span>, <span class="hljs-string">&quot;\u4E0B\u5348&quot;</span>],
      },
    ]);
  }, []);
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo scoped-form&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{form3}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6587\u672C&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;textarea&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u852C\u83DC:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>
              \u9EC4\u74DC
            <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>
              \u751F\u59DC
            <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u6C34\u679C:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>\u82F9\u679C<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;blue&quot;</span>&gt;</span>\u9999\u8549<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u5F00\u706F:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u6253\u5206:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Rate</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u6B65\u8FDB\u5668:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;step&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u4E0A\u4F20:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">iconcolor</span>=<span class="hljs-string">&quot;#ccc&quot;</span> <span class="hljs-attr">preview</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>picker \u9009\u62E9\u5668<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{pickerStr}</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{click}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
            <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
            <span class="hljs-attr">ref</span>=<span class="hljs-string">{picker}</span>
            <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
            <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>
            <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{confirm}</span>
            <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;picker&quot;</span>
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;submit-wrap&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit3}</span>&gt;</span>
            \u63D0\u4EA4
          <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;line&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>submit</td><td>\u63D0\u4EA4\u5E76\u6821\u9A8C\u8868\u5355\u83B7\u53D6\u6240\u6709\u7EC4\u4EF6\u7684 value</td><td><code class="">() =&gt; Promise&lt;any[]&gt;</code></td></tr><tr><td>setRules</td><td>\u53EA\u5BF9 field \u7EC4\u4EF6\u6709\u6548</td><td><code class="">(rule: Rule[])=&gt;void</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type Rule = {
  <span class="hljs-attr">name</span>: string <span class="hljs-comment">// \u9700\u8981\u6821\u9A8C\u7684 field \u7EC4\u4EF6\u7684 name \u5C5E\u6027</span>
  required?: boolean <span class="hljs-comment">// \u662F\u5426\u5FC5\u586B</span>
  message?: string <span class="hljs-comment">// \u9519\u8BEF\u4FE1\u606F</span>
  validator?: <span class="hljs-function">(<span class="hljs-params">value: string | number</span>) =&gt;</span> boolean; <span class="hljs-comment">// \u6821\u9A8C\u89C4\u5219</span>
};
</code></pre>`,17),u=[c],o={},g="",i=a({__name:"doc-react.zh-CN",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,j)=>(p(),n("div",t,u))}});export{i as default,g as excerpt,o as frontmatter};
