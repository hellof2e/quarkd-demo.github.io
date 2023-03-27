import{d as a,c as n,a as l,o as t}from"./vue.c0a1ea97.js";const p={class:"markdown-body"},e=l(`<h1>DatetimePicker \u65F6\u95F4\u9009\u62E9</h1><h3>\u4ECB\u7ECD</h3><p>\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u652F\u6301\u65E5\u671F\u3001\u5E74\u6708\u3001\u65F6\u5206\u7B49\u7EF4\u5EA6\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { DatetimePicker, DatetimePickerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><h4>\u9009\u62E9\u5E74\u6708\u65E5</h4><p>DatetimePicker \u901A\u8FC7 type \u5C5E\u6027\u6765\u5B9A\u4E49\u9700\u8981\u9009\u62E9\u7684\u65F6\u95F4\u7C7B\u578B\uFF0Ctype \u4E3A date \u8868\u793A\u9009\u62E9\u5E74\u6708\u65E5\u3002\u901A\u8FC7 mindate \u548C maxdate \u5C5E\u6027\u53EF\u4EE5\u786E\u5B9A\u53EF\u9009\u7684\u65F6\u95F4\u8303\u56F4\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> minDate = <span class="hljs-string">&quot;2020-10-01&quot;</span>;
  <span class="hljs-keyword">const</span> maxDate = <span class="hljs-string">&quot;2025-08-13&quot;</span>;
  <span class="hljs-keyword">const</span> currentDate = <span class="hljs-string">&quot;2021-11-30&quot;</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708\u65E5&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{this.currentDate}</span>
        <span class="hljs-attr">mindate</span>=<span class="hljs-string">{this.minDate}</span>
        <span class="hljs-attr">maxdate</span>=<span class="hljs-string">{this.maxDate}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u9009\u62E9\u5E74\u6708</h4><p>\u5C06 type \u8BBE\u7F6E\u4E3A year-month \u5373\u53EF\u9009\u62E9\u5E74\u4EFD\u548C\u6708\u4EFD\u3002\u901A\u8FC7\u8C03\u7528 setFormatter \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6587\u5B57\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> datetimePickerRef = useRef &lt; DatetimePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> formatter = <span class="hljs-function">(<span class="hljs-params">type, val</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;year&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u5E74\`</span>;
    }
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;month&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u6708\`</span>;
    }
    <span class="hljs-keyword">return</span> val;
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setFormatter(formatter);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{datetimePickerRef}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year-month&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u9009\u62E9\u6708\u65E5</h4><p>\u5C06 type \u8BBE\u7F6E\u4E3A month-day \u5373\u53EF\u9009\u62E9\u6708\u4EFD\u548C\u65E5\u671F\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> datetimePickerRef = useRef &lt; DatetimePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setFormatter(<span class="hljs-function">(<span class="hljs-params">type, val</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;month&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u6708\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;day&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u65E5\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    });
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{datetimePickerRef}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u6708\u65E5&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month-day&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u9009\u62E9\u65F6\u95F4</h4><p>\u5C06 type \u8BBE\u7F6E\u4E3A time \u5373\u53EF\u9009\u62E9\u65F6\u95F4\uFF08\u5C0F\u65F6\u548C\u5206\u949F\uFF09\uFF0C\u901A\u8FC7\u8C03\u7528 setFilter \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6570\u7EC4\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u65F6\u95F4\u95F4\u9694\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> datetimePickerRef = useRef &lt; DatetimePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> formatter = <span class="hljs-function">(<span class="hljs-params">type, val</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;hour&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u65F6\`</span>;
    }
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;minute&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u5206\`</span>;
    }
    <span class="hljs-keyword">return</span> val;
  };

  <span class="hljs-keyword">const</span> filter = <span class="hljs-function">(<span class="hljs-params">type, options</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;minute&quot;</span>) {
      <span class="hljs-keyword">return</span> options.filter(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-built_in">Number</span>(option) % <span class="hljs-number">5</span> === <span class="hljs-number">0</span>);
    }
    <span class="hljs-keyword">return</span> options;
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setFormatter(formatter);
    datetimePickerCurrent.setFilter(filter);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{datetimePickerRef}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month-day&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">minhour</span>=<span class="hljs-string">{10}</span>
        <span class="hljs-attr">maxhour</span>=<span class="hljs-string">{22}</span>
        <span class="hljs-attr">minminute</span>=<span class="hljs-string">{5}</span>
        <span class="hljs-attr">maxminute</span>=<span class="hljs-string">{45}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u9009\u62E9\u5B8C\u6574\u65F6\u95F4</h4><p>\u5C06 type \u8BBE\u7F6E\u4E3A datetime \u5373\u53EF\u9009\u62E9\u5B8C\u6574\u65F6\u95F4\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3001\u5206\u949F\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5B8C\u6574\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6</h4><p>\u5C06 type \u8BBE\u7F6E\u4E3A datehour \u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u5C0F\u65F6\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3002</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datehour&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u663E\u793A\u9876\u90E8\u680F</h4><p>\u5C06 showtoolbar \u8BBE\u7F6E\u4E3A true</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5E74\u6708\u65E5&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">showtoolbar</span>=<span class="hljs-string">{true}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>\u8BBE\u7F6E\u5F53\u524D\u65F6\u95F4</h4><p>\u901A\u8FC7\u8C03\u7528 setValue \u65B9\u6CD5\uFF0C\u8BBE\u7F6E\u7EC4\u4EF6\u5F53\u524D\u65F6\u95F4\uFF0C \u5F53 type \u4E3A time \u65F6\uFF0C value \u7C7B\u578B\u4E3A <code class="">HH:mm</code>\uFF0C \u5176\u4ED6\u7C7B\u578B\u4E3A <code class="">yyyy-MM-dd</code> \u6216 <code class="">yyyy-MM-dd HH:mm</code></p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> datetimePickerRef = useRef &lt; DatetimePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setValue(<span class="hljs-string">&quot;2023-10-07&quot;</span>);
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BBE\u7F6E\u5F53\u524D\u65F6\u95F4&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">showtoolbar</span>=<span class="hljs-string">{true}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u65F6\u95F4\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">date</code> <code class="">time</code> <code class="">year-month</code> <code class="">month-day</code> <code class="">datehour</code></td><td><code class="">string</code></td><td><code class="">datetime</code></td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u503C\uFF0C<code class="">type</code> \u4E3A <code class="">time</code> \u65F6 <code class="">value</code> \u683C\u5F0F\u4E3A <code class="">HH:mm</code>, \u5176\u4ED6\u7C7B\u578B\u683C\u5F0F\u4E3A <code class="">yyyy-MM-dd</code> \u6216 <code class="">yyyy-MM-dd HH:mm</code></td><td><code class="">string</code></td><td><code class="">null</code></td></tr><tr><td>open</td><td>datetime-picker \u662F\u5426\u663E\u793A</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td></tr><tr><td>showtoolbar</td><td>\u662F\u5426\u663E\u793A\u9876\u90E8\u680F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>confirmbuttontext</td><td>\u9876\u90E8\u680F\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u786E\u8BA4</code></td></tr><tr><td>cancelbuttontext</td><td>\u9876\u90E8\u680F\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u53D6\u6D88</code></td></tr><tr><td>onClose</td><td>\u70B9\u51FB\u906E\u7F69\u6216\u8005\u53D6\u6D88\u6309\u94AE</td><td><code class="">() =&gt; void </code></td><td></td></tr><tr><td>onConfirm</td><td>\u786E\u5B9A\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: Date | string }}\uFF09=&gt; void </code></td><td></td></tr><tr><td>onChange</td><td>picker \u6539\u53D8\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: Date | string }}\uFF09=&gt; void</code></td><td></td></tr></tbody></table><h3>DatePicker Props</h3><p>\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A date \u6216 datetime \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>mindate</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F</td><td><code class="">yyyy-MM-dd</code> \u6216 <code class="">yyyy-MM-dd HH:mm</code></td><td>\u5341\u5E74\u524D</td></tr><tr><td>maxdate</td><td>\u53EF\u9009\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F</td><td><code class="">yyyy-MM-dd</code> \u6216 <code class="">yyyy-MM-dd HH:mm</code></td><td>\u5341\u5E74\u540E</td></tr></tbody></table><h3>TimerPicker Props</h3><p>\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A time \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>minhour</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u5C0F\u65F6</td><td><code class="">number</code></td><td>0</td></tr><tr><td>maxhour</td><td>\u53EF\u9009\u7684\u6700\u5927\u5C0F\u65F6</td><td><code class="">number</code></td><td>23</td></tr><tr><td>minminute</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u5206\u949F</td><td><code class="">number</code></td><td>0</td></tr><tr><td>maxminute</td><td>\u53EF\u9009\u7684\u6700\u5927\u5206\u949F</td><td><code class="">number</code></td><td>59</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setValue</td><td>\u7528\u4E8E\u8BBE\u7F6E\u9009\u62E9\u5668\u6570\u636E\uFF0C<code class="">type</code> \u4E3A <code class="">time</code> \u65F6 <code class="">value</code> \u683C\u5F0F\u4E3A <code class="">HH:mm</code>, \u5176\u4ED6\u7C7B\u578B\u683C\u5F0F\u4E3A <code class="">yyyy-MM-dd</code> \u6216 <code class="">yyyy-MM-dd HH:mm</code></td><td><code class="">(value: string) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u9009\u62E9\u5668\u9009\u4E2D\u7684\u6570\u636E\uFF0C\u901A\u5E38\u914D\u5408\u81EA\u5B9A\u4E49\u5934\u90E8\u65F6\u4F7F\u7528</td><td><code class="">() =&gt; SelectedColumn[]</code></td></tr><tr><td>setFilter</td><td>\u8BBE\u7F6E\u9009\u9879\u8FC7\u6EE4\u51FD\u6570</td><td><code class="">(type: string, values: string[]) =&gt; string[]</code></td></tr><tr><td>setFormatter</td><td>\u8BBE\u7F6E\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570</td><td><code class="">(type: string, value: string) =&gt; string</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};
</code></pre>`,43),u=[e],d={},j="",i=a({__name:"doc-react.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(t(),n("div",p,u))}});export{i as default,j as excerpt,d as frontmatter};
