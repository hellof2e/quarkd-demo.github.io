import{d as a,c as n,a as l,o as t}from"./vue.6d2987d5.js";const p={class:"markdown-body"},e=l(`<h1>DatetimePicker</h1><h3>Intro</h3><p>Used to select time, support date and time dimensions.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/datetimepicker&quot;</span>;
</code></pre><h3>Basic Usage</h3><h4>Choose Date</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose Date&quot;</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      <span class="hljs-attr">:mindate</span>=<span class="hljs-string">&quot;minDate&quot;</span>
      <span class="hljs-attr">:maxdate</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">currentDate</span>: <span class="hljs-string">&quot;2021-11-30&quot;</span>,
      <span class="hljs-attr">minDate</span>: <span class="hljs-string">&quot;2020-10-01&quot;</span>,
      <span class="hljs-attr">maxDate</span>: <span class="hljs-string">&quot;2025-08-13&quot;</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
    },
  },
};
</code></pre><h4>Choose Year-Month</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;yearMonthRef&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year-month&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose Year-Month&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      <span class="hljs-attr">:showtoolbar</span>=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">:hidebottombutton</span>=<span class="hljs-string">&quot;true&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">formatter</span>(<span class="hljs-params">type, val</span>)</span> {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;year&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Year\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;month&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Month\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    },
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.yearMonthRef.setFormatter(<span class="hljs-built_in">this</span>.formatter);
  },
};
</code></pre><h4>Choose Month-Day</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;monthDayRef&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month-day&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose Month-Day&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.monthDayRef.setFormatter(<span class="hljs-function">(<span class="hljs-params">type, value</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;month&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u6708\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&quot;day&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>\u65E5\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    });
  },
};
</code></pre><h4>Choose Time</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;timeRef&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      <span class="hljs-attr">:minhour</span>=<span class="hljs-string">&quot;10&quot;</span>
      <span class="hljs-attr">:maxhour</span>=<span class="hljs-string">&quot;22&quot;</span>
      <span class="hljs-attr">:minminute</span>=<span class="hljs-string">&quot;3&quot;</span>
      <span class="hljs-attr">:maxminute</span>=<span class="hljs-string">&quot;45&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">formatter</span>(<span class="hljs-params">type, val</span>)</span> {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;hour&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Hour\`</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${val}</span>Minute\`</span>;
      }
      <span class="hljs-keyword">return</span> val;
    },
    <span class="hljs-function"><span class="hljs-title">filter</span>(<span class="hljs-params">type, options</span>)</span> {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        <span class="hljs-keyword">return</span> options.filter(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-built_in">Number</span>(option) % <span class="hljs-number">5</span> === <span class="hljs-number">0</span>);
      }
      <span class="hljs-keyword">return</span> options;
    };
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.timeRef.setFilter(<span class="hljs-built_in">this</span>.filter);
    <span class="hljs-built_in">this</span>.$refs.timeRef.setFormatter(<span class="hljs-built_in">this</span>.formatter);
  }
};
</code></pre><h4>Choose DateTime</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose DateTime&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h4>Choose DateHour</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datehour&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose DateHour&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h4>ShowToolBar</h4><p>setting showtoolbar true</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Choose Date&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      <span class="hljs-attr">:showtoolbar</span>=<span class="hljs-string">&quot;true&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h4>Set Current Date</h4><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-datetime-picker</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;datetimePickerRef&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Set Current Date&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      <span class="hljs-attr">:showtoolbar</span>=<span class="hljs-string">&quot;true&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$refs.datetimePickerRef.setValue(<span class="hljs-string">&quot;2023-10-07&quot;</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params"></span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${detail.value}</span>\`</span>);
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code class="">date</code> <code class="">time</code> <code class="">year-month</code> <code class="">month-day</code> <code class="">datehour</code></td><td><code class="">string</code></td><td><code class="">datetime</code></td></tr><tr><td>value</td><td>Default value\uFF0Cwhen <code class="">type</code> is <code class="">time</code>, the type of <code class="">value</code> should be <code class="">HH:mm</code>, others should be <code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td><code class="">string</code></td><td><code class="">null</code></td></tr><tr><td>open</td><td>Whether to show datetime-picker</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td><code class="">&#39;&#39;</code></td></tr><tr><td>showtoolbar</td><td>Whether to show toolbar</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>confirmbuttontext</td><td>Text of confirm button</td><td><code class="">string</code></td><td><code class="">Confirm</code></td></tr><tr><td>cancelbuttontext</td><td>Text of cancel button</td><td><code class="">string</code></td><td><code class="">Cancel</code></td></tr></tbody></table><h3>DatePicker Props</h3><p>Following props are supported when the type is date or datetime</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>mindate</td><td>Min date</td><td><code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td>Ten years ago on January 1</td></tr><tr><td>maxdate</td><td>Max date</td><td><code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td>Ten years later on December 31</td></tr></tbody></table><h3>TimerPicker Props</h3><p>Following props are supported when the type is time</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>minhour</td><td>Min hour for time type</td><td><code class="">number</code></td><td>0</td></tr><tr><td>maxhour</td><td>Max hour for time type</td><td><code class="">number</code></td><td>23</td></tr><tr><td>minminute</td><td>Min minute for time type</td><td><code class="">number</code></td><td>0</td></tr><tr><td>maxminute</td><td>Max minute for time type</td><td><code class="">number</code></td><td>59</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>close</td><td>Emitted when click mask or cancel button.</td><td><code class="">() =&gt; void </code></td></tr><tr><td>confirm</td><td>Emitted when click confirm button.</td><td><code class="">e: {detail:{value: Date | string }}\uFF09=&gt; void</code></td></tr><tr><td>change</td><td>Emitted when current option changed.</td><td><code class="">e: {detail:{value: Date | string }}\uFF09=&gt; void</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setValue</td><td>Set current value, when <code class="">type</code> is <code class="">time</code>, the type of <code class="">value</code> should be <code class="">HH:mm</code>, others should be <code class="">yyyy-MM-dd</code> or <code class="">yyyy-MM-dd HH:mm</code></td><td><code class="">(value: Date | string) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get current values of all columns</td><td><code class="">() =&gt; SelectedColumn[]</code></td></tr><tr><td>setFilter</td><td>Option filter</td><td><code class="">(type: string, values: string[]) =&gt; string[]</code></td></tr><tr><td>setFormatter</td><td>Option text formatter</td><td><code class="">(type: string, value: string) =&gt; string</code></td></tr></tbody></table><h3>Types</h3><pre><code class="language-js">type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};
</code></pre>`,46),c=[e],j={},d="",u=a({__name:"doc.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(t(),n("div",p,c))}});export{u as default,d as excerpt,j as frontmatter};
