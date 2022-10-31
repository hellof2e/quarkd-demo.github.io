import{c as s,o as a,a as e}from"./vue.8a08a651.js";const n={class:"markdown-body"},l=e(`<h1>Noticebar</h1><h3>Intro</h3><p>Used to display message notifications</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/noticebar&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Multiple lines</h3><p>Set <code>multiple</code> prop on the Noticebar to control the maximum number of lines which text can show.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;multipleText&quot;</span> <span class="hljs-attr">:multiple</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Set style</h3><p>The font color is controlled by <code>color</code> prop, and the background color is controlled by <code>bgcolor</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">bgcolor</span>=<span class="hljs-string">&quot;#ddd&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Scrollable</h3><p>To make the text scrollable, embed <code>quark-marquee</code> component in the Noticebar.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/marquee&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-marquee</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;multipleText&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-marquee</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Hide Icon</h3><p>To hide right or left icon, add <code>righthide</code> or <code>lefthide</code> on the Noticebar.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;hide right icon&quot;</span> <span class="hljs-attr">righthide</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;hide left icon&quot;</span> <span class="hljs-attr">lefthide</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Custom ends</h3><p>To custom left or right content, set <code>slot=&quot;left&quot;</code> or <code>slot=&quot;right&quot;</code> on the specific component.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;The way of the university is to be bright and virtuous.&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Left content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>Right content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h3>Right event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Try to click right icon&quot;</span> @<span class="hljs-attr">rightclick</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-noticebar</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text</td><td><code>string</code></td><td></td></tr><tr><td>multiple</td><td>Maximum number of lines text can show</td><td><code>string</code></td><td><code>1</code></td></tr><tr><td>lefthide</td><td>Whether to hide left icon</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>righthide</td><td>Whether to hide right icon</td><td><code>boolean </code></td><td><code>false</code></td></tr><tr><td>keyword</td><td>keyword highlight</td><td><code>string</code></td><td></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>left</td><td>Custom left content</td></tr><tr><td>text</td><td>Custom text</td></tr><tr><td>right</td><td>Custom right content</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>rightclick</td><td>Right click event</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--noticebar-left-color</code></td><td>Left icon color</td><td><code>inherit</code></td></tr><tr><td><code>--noticebar-right-color</code></td><td>Right icon color</td><td><code>inherit</code></td></tr></tbody></table>`,35),o=[l],i={__name:"doc.en-US",setup(c,{expose:t}){return t({frontmatter:{}}),(r,h)=>(a(),s("div",n,o))}};export{i as default};
