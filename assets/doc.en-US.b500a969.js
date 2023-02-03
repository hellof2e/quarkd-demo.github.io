import{d as a,c as n,a as t,o as l}from"./vue.b773f4ce.js";const p={class:"markdown-body"},c=t(`<h1>ActionSheet</h1><h3>Intro</h3><p>The pop-up modal panel at the bottom contains multiple options related to the current situation.</p><h3>Install</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/action-sheet&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> actionSheet = ActionSheet({
        <span class="hljs-attr">actions</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 1&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 2&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 3&quot;</span> },
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
      });
    },
  },
};
</code></pre><h3>Show Title</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/action-sheet&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;This is title message&quot;</span>,
        <span class="hljs-attr">actions</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 1&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 2&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 3&quot;</span> },
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
      });
    },
  },
};
</code></pre><h3>Show Cancel Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/action-sheet&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;This is title message&quot;</span>,
        <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&quot;Cancel&quot;</span>,
        <span class="hljs-attr">actions</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 1&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 2&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 3&quot;</span> },
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
      });
    },
  },
};
</code></pre><h3>Custom Title Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/action-sheet&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;This is title message&quot;</span>,
        <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
        <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">actions</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 1&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 2&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 3&quot;</span> },
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
      });
    },
  },
};
</code></pre><h3>Custom Options Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/action-sheet&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;This is title message&quot;</span>,
        <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
        <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">actions</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 1&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;#999&quot;</span>, <span class="hljs-attr">fontSize</span>: <span class="hljs-number">20</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 2&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 3&quot;</span> },
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
      });
    },
  },
};
</code></pre><h3>Custom Cancel Button Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showActionSheet()&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> ActionSheet <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/action-sheet&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showActionSheet</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> pop = ActionSheet({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;This is title message&quot;</span>,
        <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&quot;Cancel&quot;</span>,
        <span class="hljs-attr">cancelTextColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
        <span class="hljs-attr">cancelTextFontSize</span>: <span class="hljs-number">20</span>,
        <span class="hljs-attr">actions</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 1&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 2&quot;</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;Option 3&quot;</span> },
        ],
        <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
        <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
      });
    },
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>actions</td><td>Options</td><td><code class="">Action []</code></td><td><code class="">require</code></td></tr><tr><td>cancelText</td><td>Text of cancel button</td><td><code class="">string </code></td><td></td></tr><tr><td>titleColor</td><td>Title color</td><td><code class="">string </code></td><td><code class="">#969799</code></td></tr><tr><td>titleFontSize</td><td>Title font size</td><td><code class="">number </code></td><td><code class="">14</code></td></tr><tr><td>cancelTextColor</td><td>Text color of cancel button</td><td><code class="">string </code></td><td><code class="">#646566</code></td></tr><tr><td>cancelTextFontSize</td><td>Font size of cancel button</td><td><code class="">number</code></td><td><code class="">16</code></td></tr><tr><td>zIndex</td><td>actionsheet z-index</td><td><code class="">number </code></td><td><code class="">999</code></td></tr><tr><td>select</td><td>Selected callback</td><td><code class="">(index: number, action: Action) =&gt; void</code></td><td></td></tr><tr><td>cancel</td><td>Cancel button click callback</td><td><code class="">() =&gt; void </code></td><td></td></tr><tr><td>close</td><td>Mask click callback</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>Data Structure of Action</h3><pre><code class="language-js">type Action = {
  <span class="hljs-attr">name</span>: string,
  color?: string,
  fontSize?: number,
};

type ActionParams = {
  title?: string,
  <span class="hljs-attr">actions</span>: Action[],
  cancelText?: string,
  titleColor?: string,
  titleFontSize?: number,
  cancelTextColor?: string,
  cancelTextFontSize?: number,
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index: number, action: Action</span>) =&gt;</span> <span class="hljs-keyword">void</span>,
  cancel?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  close?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  zIndex?: number,
};
</code></pre>`,28),e=[c],d={},j="",u=a({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),n("div",p,e))}});export{u as default,j as excerpt,d as frontmatter};
