import{d as t,c as a,a as n,o}from"./vue.858c05d5.js";const e={class:"markdown-body"},l=n(`<h1>Countdown</h1><h3>Intro</h3><p>Used to display the countdown value in real time.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { CountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;7200000&quot;</span> /&gt;</span>
</code></pre><h3>Custom Format</h3><p>The format property controls that the spacer supports only one bit string.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;360000&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;MM:SS&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;360000&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;MM-SS&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;360000&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;MM SS&quot;</span> /&gt;</span>
</code></pre><h3>End the callback</h3><p>When the countdown is 0, an end event is triggered.</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> onEnd = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&quot;countdown finished&quot;</span>);
  };
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;5000&quot;</span> <span class="hljs-attr">onEnd</span>=<span class="hljs-string">{onEnd}</span> /&gt;</span></span>;
};
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">CountDown</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;css&quot;</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;360000&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.css</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
  <span class="hljs-attribute">letter-spacing</span>: <span class="hljs-number">2px</span>;
  --countdown-num-<span class="hljs-attribute">min-width</span>: <span class="hljs-number">20px</span>;
  --countdown-num-<span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
  --countdown-num-<span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;
  --countdown-num-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  --countdown-dot-<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
  --countdown-dot-<span class="hljs-attribute">margin</span>: <span class="hljs-number">6px</span>;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>time</td><td>Standard timestamp</td><td><code class="">string</code></td><td></td></tr><tr><td>format</td><td>HH MM SS\u3001 MM:SS The spacer customizes a one-bit string</td><td><code class="">string</code></td><td><code class="">HH:MM:SS</code></td></tr><tr><td>onEnd</td><td>Emitted when the countdown is 0.</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--countdown-num-min-width</code></td><td>The min width of digital content</td><td><code class="">18px</code></td></tr><tr><td><code class="">--countdown-num-background</code></td><td>Digital content background color</td><td><code class="">#F4433D</code></td></tr><tr><td><code class="">--countdown-num-padding</code></td><td>Digital content padding</td><td><code class="">0 4px</code></td></tr><tr><td><code class="">--countdown-num-border-radius</code></td><td>Digital border-radius</td><td><code class="">4px</code></td></tr><tr><td><code class="">--countdown-dot-color</code></td><td>Dot color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--countdown-dot-margin</code></td><td>Dot margin</td><td><code class="">0 2px</code></td></tr></tbody></table>`,22),c=[l],u={},i="",m=t({__name:"doc-react.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,r)=>(o(),a("div",e,c))}});export{m as default,i as excerpt,u as frontmatter};
