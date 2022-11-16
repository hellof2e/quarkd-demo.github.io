import{d as t,c as a,a as n,o as l}from"./vue.c821364d.js";const o={class:"markdown-body"},e=n(`<h1>Dialog</h1><h3>Intro</h3><p>A modal box pops up on the page.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/dialog&quot;</span>;
</code></pre><h3>Prompt popup</h3><p>By setting <code class="">type=&quot;confirm&quot;</code> to prompt popup</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span> // <span class="hljs-attr">Confirm</span> <span class="hljs-attr">button</span> <span class="hljs-attr">callback</span> <span class="hljs-attr">function</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span> // <span class="hljs-attr">Close</span> <span class="hljs-attr">button</span> <span class="hljs-attr">callback</span> <span class="hljs-attr">function</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>Prompt popup\uFF08no content\uFF09</h3><p>Just do not pass in <code class="">content</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;confirm&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;This is a confirmation pop-up that can be explained clearly in one sentence, so only the title&quot;</span>
  <span class="hljs-attr">oktext</span>=<span class="hljs-string">&quot;OK&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span> // <span class="hljs-attr">Confirm</span> <span class="hljs-attr">button</span> <span class="hljs-attr">callback</span> <span class="hljs-attr">function</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span> // <span class="hljs-attr">Close</span> <span class="hljs-attr">button</span> <span class="hljs-attr">callback</span> <span class="hljs-attr">function</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>Confirmation popup</h3><p><code class="">type</code> If not passed by default, it is a confirmation popup.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;The code is written for people to see, with the addition of running on the machine&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;open = false&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>Confirmation popup window\uFF08Button vertical arrangement\uFF09</h3><p>Buttons can be arranged vertically by setting the property <code class="">btnvertical</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
  <span class="hljs-attr">btnvertical</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;The code is written for people to see, with the addition of running on the machine&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;open = false&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>custom title/footer</h3><p>Set custom title/footer via <code class="">slot=&#39;title&#39;</code> , <code class="">slot=&#39;footer&#39;</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;translate(&#39;content&#39;)&quot;</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>custom title<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>custom footer<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>Hide title/footer</h3><p>Hide the title/footer by passing in the <code class="">notitle</code>, <code class="">nofooter</code> properties.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span> <span class="hljs-attr">notitle</span> <span class="hljs-attr">nofooter</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>
  The code is written for people to see, with the addition of running on the
  machine
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>Content</td><td><code class="">string</code></td><td></td></tr><tr><td>oktext</td><td>Confirm button</td><td><code class="">string </code></td><td><code class="">Confirm</code></td></tr><tr><td>canceltext</td><td>Cancel button</td><td><code class="">string </code></td><td><code class="">Cancel</code></td></tr><tr><td>open</td><td>Dialog status</td><td><code class="">boolean </code></td><td><code class="">require</code></td></tr><tr><td>zindex</td><td>Dialog z-index</td><td><code class="">number</code></td><td><code class="">999</code></td></tr><tr><td>type</td><td>Type</td><td><code class=""> modal</code>\u3001<code class="">confirm</code></td><td><code class="">modal</code></td></tr><tr><td>btnvertical</td><td>Whether the button is vertical, the default is horizontal</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>nofooter</td><td>Whether to show footer</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideclose</td><td>Whether to hide the close button in the upper right corner</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>maskclosable</td><td>Whether the click mask allow to close</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autoclose</td><td>Whether the click event is closed by default</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>hide</td><td>When autoclose is false, the function call manually makes the dialog disappear to meet flexible asynchronous requirements dialog.hide()</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>slot</td><td>Custom dialog body</td></tr><tr><td>slot name=close</td><td>Custom close icon including position, size, and type</td></tr><tr><td>slot name=footer</td><td>Custom footer</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when the confirm button is clicked</td><td><code class="">() =&gt; void</code></td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td><code class="">() =&gt; void</code></td></tr><tr><td>close</td><td>Emitted when closing Dialog</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to<a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--dialog-width</code></td><td>Dialog width</td><td><code class="">320px</code></td></tr><tr><td><code class="">--dialog-title-font-size</code></td><td>Title font size</td><td></td></tr><tr><td><code class="">--dialog-title-color</code></td><td>Title font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--dialog-title-font-family</code></td><td>Title font family</td><td></td></tr><tr><td><code class="">--dialog-title-line-height</code></td><td>Title line height</td><td></td></tr><tr><td><code class="">--dialog-title-font-weight</code></td><td>Title font weight</td><td><code class="">700</code></td></tr><tr><td><code class="">--dialog-content-font-size</code></td><td>Content font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--dialog-content-color</code></td><td>Content font color</td><td><code class="">#5A6066</code></td></tr><tr><td><code class="">--dialog-content-font-weight</code></td><td>Content font weight</td><td><code class="">400</code></td></tr><tr><td><code class="">--dialog-content-font-family</code></td><td>Content font family</td><td><code class="">14px</code></td></tr><tr><td><code class="">--dialog-content-line-height</code></td><td>Content line height</td><td><code class="">20px</code></td></tr><tr><td><code class="">--dialog-btn-border-radius</code></td><td>Bottom button border radius</td><td><code class="">8px</code></td></tr><tr><td><code class="">--dialog-btn-font-size</code></td><td>Bottom button font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--dialog-btn-height</code></td><td>Bottom button height</td><td><code class="">40px</code></td></tr></tbody></table>`,33),c=[e],i={},g="",u=t({__name:"doc.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,r)=>(l(),a("div",o,c))}});export{u as default,g as excerpt,i as frontmatter};
