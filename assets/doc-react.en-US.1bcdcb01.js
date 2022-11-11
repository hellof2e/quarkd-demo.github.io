import{d as t,c as a,a as n,o as e}from"./vue.806cd2cd.js";const l={class:"markdown-body"},p=n(`<h1>Steps</h1><h3>Intro</h3><p>Split the process into multiple steps and display them, so that you can complete tasks through the process. Besides, the steps will show you the current status of work.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Steps, StepItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;done&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;step one&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">StepItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;doing&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;step two&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">StepItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;todo&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;step three&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">StepItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Steps</span>&gt;</span>
</code></pre><h3>Title &amp; Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;done&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;finished&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Your order has been packed and the item has been dispatched&quot;</span>
    &gt;</span>1&lt;/StepItem
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;doing&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;processing&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Your order is being shipped...&quot;</span>
    &gt;</span>2&lt;/StepItem
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;todo&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;not started&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;3&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;The delivery address is: 16F, Yizhan Business Building, Hangzhou&quot;</span>
    &gt;</span>3&lt;/StepItem
  &gt;
<span class="hljs-tag">&lt;/<span class="hljs-name">Steps</span>&gt;</span>
</code></pre><h3>Vertical Steps</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;done&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;finished&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Your order has been packed and the item has been dispatched&quot;</span>
    &gt;</span>1&lt;/StepItem
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;doing&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;processing&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Your order is being shipped...&quot;</span>
    &gt;</span>2&lt;/StepItem
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">StepItem</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;todo&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;not started&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;3&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;The delivery address is: 16F, Yizhan Business Building, Hangzhou&quot;</span>
    &gt;</span>3&lt;/StepItem
  &gt;
<span class="hljs-tag">&lt;/<span class="hljs-name">Steps</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><h4>Steps</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>direction</td><td>Display direction\uFF0Ccan be set to <code class="">horzontal</code> <code class="">vertical</code></td><td><code class="">string </code></td><td><code class="">horzontal</code></td></tr></tbody></table><h4>StepItem</h4><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>support <code class="">slot</code></th></tr></thead><tbody><tr><td>title</td><td>Title of the step</td><td><code class="">string</code></td><td><code class="">name = title</code></td></tr><tr><td>status</td><td>status of the step can be set to <code class="">done</code>\uFF0C<code class="">doing</code>\uFF0C <code class="">todo</code></td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>Description of the step(html is supported)</td><td><code class="">string</code></td><td><code class="">name = content </code></td></tr><tr><td>order</td><td>order</td><td><code class="">string</code></td><td><code class="">name = order</code></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title</td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>Description of the step(html is supported)</td><td><code class="">string </code></td><td></td></tr><tr><td>order</td><td>order</td><td><code class="">string</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--quark-theme-color</code></td><td>Theme color(blue)</td><td><code class="">#0088FF</code></td></tr><tr><td><code class="">--step-title-font-size</code></td><td>Title font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--step-title-color</code></td><td>Title font color</td><td><code class="">#909ca4</code></td></tr><tr><td><code class="">--step-content-font-size</code></td><td>Content font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--step-content-color</code></td><td>Content font color</td><td><code class="">#666</code></td></tr><tr><td><code class="">--steps-base-font-size</code></td><td>Set round size(radius\uFF1A 2em)</td><td><code class="">13px</code></td></tr></tbody></table>`,22),o=[p],i={},u="",g=t({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(e(),a("div",l,o))}});export{g as default,u as excerpt,i as frontmatter};
