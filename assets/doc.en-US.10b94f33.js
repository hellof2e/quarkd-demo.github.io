import{d as e,c as s,a,o as n}from"./vue.8c4481a8.js";const l={class:"markdown-body"},d=a(`<h1>Stepper</h1><h3>Intro</h3><p>The stepper component consists of an increase button, a decrease button and an input box, which are used to input and adjust numbers within a certain range.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/stepper&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-stepper</span>&gt;</span>
</code></pre><h3>Range</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;12&quot;</span> /&gt;</span>
</code></pre><h3>Step</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">steps</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre><h3>Integer</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">interger</span> /&gt;</span>
</code></pre><h3>Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  quark-stepper {
    --stepper-<span class="hljs-selector-tag">input</span>-text-<span class="hljs-attribute">color</span>: black;
    --stepper-<span class="hljs-selector-tag">input</span>-<span class="hljs-attribute">background-color</span>: white;
    --stepper-<span class="hljs-selector-tag">input</span>-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
    --stepper-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
    --stepper-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">border-width</span>: <span class="hljs-number">1px</span>;
    --stepper-plus-<span class="hljs-attribute">background-color</span>: red;
    --stepper-plus-<span class="hljs-attribute">color</span>: white;
    --stepper-minus-<span class="hljs-attribute">background-color</span>: white;
    --stepper-minus-<span class="hljs-attribute">color</span>: <span class="hljs-number">#ee0a24</span>;
    --stepper-minus-<span class="hljs-attribute">border-color</span>: <span class="hljs-number">#ee0a24</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.value = detail.value;
    },
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th style="text-align:center;">Attribute</th><th style="text-align:center;">Description</th><th style="text-align:center;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:center;">min</td><td style="text-align:center;">Minimum</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">max</td><td style="text-align:center;">Maximum</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">steps</td><td style="text-align:center;">Steps (Step size with each click changes)</td><td style="text-align:center;"><code class=""> number</code></td><td style="text-align:left;"><code class="">1</code></td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">Stepper name, which will be recalled in the <code class="">change</code> event</td><td style="text-align:center;"><code class="">string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">decimallength</td><td style="text-align:center;">Decimal length</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">integer</td><td style="text-align:center;">Whether to allow only integers</td><td style="text-align:center;"><code class="">boolean</code></td><td style="text-align:left;"><code class="">false</code></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">Whether to disable stepper</td><td style="text-align:center;"><code class="">boolean</code></td><td style="text-align:left;"><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th style="text-align:center;">Event</th><th style="text-align:center;">Description</th><th style="text-align:center;">Arguments</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">Emitted when value changed</td><td style="text-align:center;"><code class="">(e:{detail: { name: string, value: number }}) =&gt; void</code></td></tr><tr><td style="text-align:center;">overlimit</td><td style="text-align:center;">Emitted when a disabled button is clicked</td><td style="text-align:center;"><code class="">(e:{detail: { action: string}}) =&gt; void</code></td></tr><tr><td style="text-align:center;">plus</td><td style="text-align:center;">Emitted when the plus button is clicked</td><td style="text-align:center;"><code class="">() =&gt; void</code></td></tr><tr><td style="text-align:center;">minus</td><td style="text-align:center;">Emitted when the minus button is clicked</td><td style="text-align:center;"><code class="">() =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--stepper-input-text-color</code></td><td>stepper-input font color</td><td><code class="">#e8e8e8</code></td></tr><tr><td><code class="">--stepper-input-background-color</code></td><td>stepper-input background color</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--stepper-input-width</code></td><td>stepper-input width</td><td><code class="">32px</code></td></tr><tr><td><code class="">--stepper-input-height</code></td><td>stepper-input height</td><td><code class="">28px</code></td></tr><tr><td><code class="">--stepper-input-border-color</code></td><td>stepper-input border color</td><td></td></tr><tr><td><code class="">--stepper-input-border-width</code></td><td>stepper-input border width</td><td><code class="">1px</code></td></tr><tr><td><code class="">--stepper-input-font-size</code></td><td>stepper-input font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--stepper-input-line-height</code></td><td>stepper-input line-height</td><td><code class="">normal</code></td></tr><tr><td><code class="">--stepper-input-border-radius</code></td><td>stepper-input border radius</td><td></td></tr><tr><td><code class="">--stepper-button-border-radius</code></td><td>stepper-button border radius</td><td></td></tr><tr><td><code class="">--stepper-button-border-height</code></td><td>stepper-button height</td><td><code class="">28px</code></td></tr><tr><td><code class="">--stepper-button-border-width</code></td><td>stepper-button width</td><td><code class="">28px</code></td></tr><tr><td><code class="">--stepper-button-disabled-color</code></td><td>stepper disabled color</td><td><code class="">#c8c9cc</code></td></tr><tr><td><code class="">--stepper-minus-color</code></td><td>stepper-minus-button font color</td><td><code class="">#e8e8e8</code></td></tr><tr><td><code class="">--stepper-minus-background-color</code></td><td>stepper-minus-button background color</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--stepper-plus-color</code></td><td>stepper-plus-button font color</td><td><code class="">#e8e8e8</code></td></tr><tr><td><code class="">--stepper-plus-background-color</code></td><td>stepper-plus-button background color</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--stepper-minus-border-color</code></td><td>stepper-minus-button border color</td><td></td></tr><tr><td><code class="">--stepper-plus-border-color</code></td><td>stepper-plus-button border color</td><td></td></tr></tbody></table>`,28),c=[d],h={},u="",g=e({__name:"doc.en-US",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,o)=>(n(),s("div",l,c))}});export{g as default,u as excerpt,h as frontmatter};
