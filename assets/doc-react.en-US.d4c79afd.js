import{d as a,c as n,a as t,o as l}from"./vue.e730455f.js";const e={class:"markdown-body"},p=t(`<h1>DatetimePicker</h1><h3>Intro</h3><p>Used to select time, support date and time dimensions.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { DatetimePicker, DatetimePickerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><h4>Choose Date</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Date&quot;</span>
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
</code></pre><h4>Choose Year-Month</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> datetimePickerRef = useRef &lt; DatetimePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> formatter = <span class="hljs-function">(<span class="hljs-params">type, val</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;year&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Year\`</span>;
    }
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;month&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Month\`</span>;
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
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Year-Month&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year-month&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>Choose Month-Day</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Month\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;day&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Day\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    });
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{datetimePickerRef}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Month-Day&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month-day&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>Choose Time</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> datetimePickerRef = useRef &lt; DatetimePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> formatter = <span class="hljs-function">(<span class="hljs-params">type, val</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;hour&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Hour\`</span>;
    }
    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;minute&quot;</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Minute\`</span>;
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
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Tim&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
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
</code></pre><h4>Choose DateTime</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose DateTime&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>Choose DateHour</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose DateHour&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datehour&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h4>ShowToolBar</h4><p>setting showtoolbar true</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
</code></pre><h4>Set Current Date</h4><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Set Current Date&quot;</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">showtoolbar</span>=<span class="hljs-string">{true}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code class="">date</code> <code class="">time</code> <code class="">year-month</code> <code class="">month-day</code> <code class="">datehour</code></td><td><code class="">string</code></td><td><code class="">datetime</code></td></tr><tr><td>value</td><td>Default value\uFF0Cwhen <code class="">type</code> is <code class="">time</code>, the type of <code class="">value</code> should be <code class="">HH:mm</code>, others should be <code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td><code class="">string</code></td><td><code class="">null</code></td></tr><tr><td>open</td><td>Whether to show datetime-picker</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td></tr><tr><td>showtoolbar</td><td>Whether to show toolbar</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>confirmbuttontext</td><td>Text of confirm button</td><td><code class="">string</code></td><td><code class="">Confirm</code></td></tr><tr><td>cancelbuttontext</td><td>Text of cancel button</td><td><code class="">string</code></td><td><code class="">Cancel</code></td></tr><tr><td>onClose</td><td>Emitted when click mask or cancel button.</td><td><code class="">() =&gt; void </code></td><td></td></tr><tr><td>onConfirm</td><td>Emitted when click confirm button.</td><td><code class="">e: {detail:{value: Date | string }}\uFF09=&gt; void</code></td><td></td></tr><tr><td>onChange</td><td>Emitted when current option changed.</td><td><code class="">e: {detail:{value: Date | string }}\uFF09=&gt; void</code></td><td></td></tr></tbody></table><h3>DatePicker Props</h3><p>Following props are supported when the type is date or datetime</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>mindate</td><td>Min date</td><td><code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td>Ten years ago on January 1</td></tr><tr><td>maxdate</td><td>Max date</td><td><code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td>Ten years later on December 31</td></tr></tbody></table><h3>TimerPicker Props</h3><p>Following props are supported when the type is time</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>minhour</td><td>Min hour for time type</td><td><code class="">number</code></td><td>0</td></tr><tr><td>maxhour</td><td>Max hour for time type</td><td><code class="">number</code></td><td>23</td></tr><tr><td>minminute</td><td>Min minute for time type</td><td><code class="">number</code></td><td>0</td></tr><tr><td>maxminute</td><td>Max minute for time type</td><td><code class="">number</code></td><td>59</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setValue</td><td>Set current value, when <code class="">type</code> is <code class="">time</code>, the type of <code class="">value</code> should be <code class="">HH:mm</code>, others should be <code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td><code class="">(value: Date | string) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get current values of all columns</td><td><code class="">() =&gt; SelectedColumn[]</code></td></tr><tr><td>setFilter</td><td>Option filter</td><td><code class="">(type: string, values: string[]) =&gt; string[]</code></td></tr><tr><td>setFormatter</td><td>Option text formatter</td><td><code class="">(type: string, value: string) =&gt; string</code></td></tr></tbody></table><h3>Types</h3><pre><code class="language-js">type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};
</code></pre>`,36),c=[p],i={},j="",u=a({__name:"doc-react.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(l(),n("div",e,c))}});export{u as default,j as excerpt,i as frontmatter};
