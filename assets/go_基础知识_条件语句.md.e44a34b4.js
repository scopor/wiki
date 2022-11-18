import{_ as n,c as a,d as l,e as o,o as e,r as p}from"./app.2c06813d.js";const h=JSON.parse('{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u6761\u4EF6\u8BED\u53E5","description":"Go \u6761\u4EF6\u8BED\u53E5\uFF0C\u5C31\u662F\u6211\u4EEC\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u5E38\u89C1\u7684 if \u548C else\uFF0C\u6709\u5355\u5206\u652F\uFF0C\u53CC\u5206\u652F\uFF0C\u591A\u5206\u652F\u548C\u9AD8\u7EA7\u7684\u5199\u6CD5","frontmatter":{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u6761\u4EF6\u8BED\u53E5","head":[["meta",{"property":"og:title","content":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u6761\u4EF6\u8BED\u53E5"}],["meta",{"name":"description","content":"Go \u6761\u4EF6\u8BED\u53E5\uFF0C\u5C31\u662F\u6211\u4EEC\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u5E38\u89C1\u7684 if \u548C else\uFF0C\u6709\u5355\u5206\u652F\uFF0C\u53CC\u5206\u652F\uFF0C\u591A\u5206\u652F\u548C\u9AD8\u7EA7\u7684\u5199\u6CD5"}],["meta",{"name":"keywords","content":"Go,\u6761\u4EF6\u8BED\u53E5,if \u548C else"}],["meta",{"property":"og:description","content":"Go \u6761\u4EF6\u8BED\u53E5\uFF0C\u5C31\u662F\u6211\u4EEC\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u5E38\u89C1\u7684 if \u548C else\uFF0C\u6709\u5355\u5206\u652F\uFF0C\u53CC\u5206\u652F\uFF0C\u591A\u5206\u652F\u548C\u9AD8\u7EA7\u7684\u5199\u6CD5"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5"}]]},"headers":[{"level":2,"title":"\u6761\u4EF6\u8BED\u53E5","slug":"\u6761\u4EF6\u8BED\u53E5","link":"#\u6761\u4EF6\u8BED\u53E5","children":[]},{"level":2,"title":"\u5355\u5206\u652F","slug":"\u5355\u5206\u652F","link":"#\u5355\u5206\u652F","children":[]},{"level":2,"title":"\u53CC\u5206\u652F","slug":"\u53CC\u5206\u652F","link":"#\u53CC\u5206\u652F","children":[]},{"level":2,"title":"\u591A\u5206\u652F","slug":"\u591A\u5206\u652F","link":"#\u591A\u5206\u652F","children":[]},{"level":2,"title":"\u9AD8\u7EA7\u5199\u6CD5","slug":"\u9AD8\u7EA7\u5199\u6CD5","link":"#\u9AD8\u7EA7\u5199\u6CD5","children":[]},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879","link":"#\u6CE8\u610F\u4E8B\u9879","children":[]}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u6761\u4EF6\u8BED\u53E5.md","lastUpdated":1668742939000}'),t={name:"go/\u57FA\u7840\u77E5\u8BC6/\u6761\u4EF6\u8BED\u53E5.md"},c=o(`<h1 id="go-\u8BED\u8A00\u7B14\u8BB0-\u6761\u4EF6\u8BED\u53E5" tabindex="-1">Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u6761\u4EF6\u8BED\u53E5 <a class="header-anchor" href="#go-\u8BED\u8A00\u7B14\u8BB0-\u6761\u4EF6\u8BED\u53E5" aria-hidden="true" loading="lazy">#</a></h1><h2 id="\u6761\u4EF6\u8BED\u53E5" tabindex="-1">\u6761\u4EF6\u8BED\u53E5 <a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> \u8BED\u8A00\u4E2D\u7684\u6761\u4EF6\u8BED\u53E5\uFF0C\u5C31\u662F\u6211\u4EEC\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u5E38\u89C1\u7684 <code>if</code> \u548C <code>else</code>\u3002</p><h2 id="\u5355\u5206\u652F" tabindex="-1">\u5355\u5206\u652F <a class="header-anchor" href="#\u5355\u5206\u652F" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">95</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4F18\u79C0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53CC\u5206\u652F" tabindex="-1">\u53CC\u5206\u652F <a class="header-anchor" href="#\u53CC\u5206\u652F" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">85</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4F18\u79C0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7EE7\u7EED\u52AA\u529B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u591A\u5206\u652F" tabindex="-1">\u591A\u5206\u652F <a class="header-anchor" href="#\u591A\u5206\u652F" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">85</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4F18\u79C0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">75</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u826F\u597D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E00\u822C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5DEE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9AD8\u7EA7\u5199\u6CD5" tabindex="-1">\u9AD8\u7EA7\u5199\u6CD5 <a class="header-anchor" href="#\u9AD8\u7EA7\u5199\u6CD5" aria-hidden="true" loading="lazy">#</a></h2><p>statement \u662F\u53EF\u9009\u90E8\u5206\uFF0C\u5728 condition \u4E4B\u524D\u6267\u884C</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> statement</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> condition </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> \u8BED\u8A00\u4E2D\uFF0C\u5BF9\u4E8E\u6761\u4EF6\u8BED\u53E5\u7684\u95ED\u5408\u662F\u6709\u4E25\u683C\u8981\u6C42\u7684</p><ul><li>\u4E0D\u7BA1\u5206\u652F\u5185\u6709\u51E0\u6761\u8BED\u53E5\uFF0C\u90FD\u5FC5\u987B\u4EE5 <code>{}</code> \u95ED\u5408\uFF0C\u4E0D\u80FD\u7701\u7565</li><li><code>else</code> \u548C <code>else if</code> \u4E24\u8FB9\u7684 <code>{}</code> \u5FC5\u987B\u5728\u540C\u4E00\u884C</li></ul><hr>`,16);function r(D,F,i,y,A,C){const s=p("GoogleAdsense");return e(),a("div",null,[c,l(s)])}const g=n(t,[["render",r]]);export{h as __pageData,g as default};
