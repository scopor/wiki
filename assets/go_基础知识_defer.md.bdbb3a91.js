import{_ as n,c as a,d as e,e as l,o as p,r as o}from"./app.2c06813d.js";const f=JSON.parse('{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1Adefer","description":"defer \u662F Go \u65B0\u589E\u7684\u5173\u952E\u5B57\uFF0C\u8868\u793A\u5EF6\u8FDF\u8C03\u7528\uFF0C\u5728 defer \u4E4B\u540E\u53EF\u4EE5\u7D27\u8DDF\u8868\u8FBE\u5F0F\u6216\u8005\u51FD\u6570\u3002defer \u540E\u9762\u7684\u8BED\u53E5\u4F1A\u5728\u5F53\u524D\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u88AB\u6267\u884C\u3002","frontmatter":{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1Adefer","head":[["meta",{"property":"og:title","content":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1Adefer"}],["meta",{"name":"description","content":"defer \u662F Go \u65B0\u589E\u7684\u5173\u952E\u5B57\uFF0C\u8868\u793A\u5EF6\u8FDF\u8C03\u7528\uFF0C\u5728 defer \u4E4B\u540E\u53EF\u4EE5\u7D27\u8DDF\u8868\u8FBE\u5F0F\u6216\u8005\u51FD\u6570\u3002defer \u540E\u9762\u7684\u8BED\u53E5\u4F1A\u5728\u5F53\u524D\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u88AB\u6267\u884C\u3002"}],["meta",{"name":"keywords","content":"Go,defer"}],["meta",{"property":"og:description","content":"defer \u662F Go \u65B0\u589E\u7684\u5173\u952E\u5B57\uFF0C\u8868\u793A\u5EF6\u8FDF\u8C03\u7528\uFF0C\u5728 defer \u4E4B\u540E\u53EF\u4EE5\u7D27\u8DDF\u8868\u8FBE\u5F0F\u6216\u8005\u51FD\u6570\u3002defer \u540E\u9762\u7684\u8BED\u53E5\u4F1A\u5728\u5F53\u524D\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u88AB\u6267\u884C\u3002"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/defer"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/defer"}]]},"headers":[{"level":2,"title":"defer \u5B9A\u4E49","slug":"defer-\u5B9A\u4E49","link":"#defer-\u5B9A\u4E49","children":[]},{"level":2,"title":"defer \u6808","slug":"defer-\u6808","link":"#defer-\u6808","children":[]},{"level":2,"title":"defer \u548C return \u6267\u884C\u987A\u5E8F","slug":"defer-\u548C-return-\u6267\u884C\u987A\u5E8F","link":"#defer-\u548C-return-\u6267\u884C\u987A\u5E8F","children":[]}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/defer.md","lastUpdated":1668784306000}'),r={name:"go/\u57FA\u7840\u77E5\u8BC6/defer.md"},c=l(`<h1 id="go-\u8BED\u8A00\u7B14\u8BB0-defer" tabindex="-1">Go \u8BED\u8A00\u7B14\u8BB0\uFF1Adefer <a class="header-anchor" href="#go-\u8BED\u8A00\u7B14\u8BB0-defer" aria-hidden="true" loading="lazy">#</a></h1><h2 id="defer-\u5B9A\u4E49" tabindex="-1">defer \u5B9A\u4E49 <a class="header-anchor" href="#defer-\u5B9A\u4E49" aria-hidden="true" loading="lazy">#</a></h2><p><code>defer</code> \u662F <code>Go</code> \u65B0\u589E\u7684\u5173\u952E\u5B57\uFF0C\u8868\u793A\u5EF6\u8FDF\u8C03\u7528\uFF0C\u5728 <code>defer</code> \u4E4B\u540E\u53EF\u4EE5\u7D27\u8DDF\u8868\u8FBE\u5F0F\u6216\u8005\u51FD\u6570\u3002<code>defer</code> \u540E\u9762\u7684\u8BED\u53E5\u4F1A\u5728\u5F53\u524D\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u88AB\u6267\u884C\u3002</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">defer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ftm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">main</span></span>
<span class="line"><span style="color:#89DDFF;">defer</span></span>
<span class="line"></span></code></pre></div><h2 id="defer-\u6808" tabindex="-1">defer \u6808 <a class="header-anchor" href="#defer-\u6808" aria-hidden="true" loading="lazy">#</a></h2><p>\u5982\u679C\u67D0\u4E2A\u51FD\u6570\u4E2D\u5B58\u5728\u6709\u591A\u4E2A <code>defer</code>\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u4F1A\u4EE5\u5165\u6808\u7684\u65B9\u5F0F\u540E\u8FDB\u5148\u51FA\u7684\u987A\u5E8F\u6765\u6267\u884C\u3002</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// func3 \u6700\u5148\u6267\u884C\uFF0C\u5176\u6B21\u662F func2\uFF0C\u6700\u540E\u6267\u884C func1</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func1</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func2</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func3</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="defer-\u548C-return-\u6267\u884C\u987A\u5E8F" tabindex="-1">defer \u548C return \u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#defer-\u548C-return-\u6267\u884C\u987A\u5E8F" aria-hidden="true" loading="lazy">#</a></h2><p>\u5148\u8BF4\u7ED3\u8BBA \uFF1A<code>return</code> \u5148\u4E8E <code>defer</code> \u6267\u884C\u3002<code>defer</code> \u7684\u6267\u884C\u65F6\u673A\u662F\u5728 <code>return</code> \u6267\u884C\u5B8C\u6210\u4E4B\u540E\u624D\u5F00\u59CB\u6267\u884C</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deferCall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnCall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnCall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">return called.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deferCall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">defer called.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> called</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> called</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre></div><hr>`,11);function t(D,F,y,d,A,i){const s=o("GoogleAdsense");return p(),a("div",null,[c,e(s)])}const u=n(r,[["render",t]]);export{f as __pageData,u as default};
