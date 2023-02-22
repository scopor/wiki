import{_ as a,c as n,d as l,e as o,o as e,r as p}from"./app.c5158678.js";const h=JSON.parse('{"title":"Go 语言笔记：条件语句","description":"Go 条件语句，就是我们在其他语言中常见的 if 和 else，有单分支，双分支，多分支和高级的写法","frontmatter":{"title":"Go 语言笔记：条件语句","head":[["meta",{"property":"og:title","content":"Go 语言笔记：条件语句"}],["meta",{"name":"description","content":"Go 条件语句，就是我们在其他语言中常见的 if 和 else，有单分支，双分支，多分支和高级的写法"}],["meta",{"name":"keywords","content":"Go,条件语句,if 和 else"}],["meta",{"property":"og:description","content":"Go 条件语句，就是我们在其他语言中常见的 if 和 else，有单分支，双分支，多分支和高级的写法"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5"}]]},"headers":[{"level":2,"title":"条件语句","slug":"条件语句","link":"#条件语句","children":[]},{"level":2,"title":"单分支","slug":"单分支","link":"#单分支","children":[]},{"level":2,"title":"双分支","slug":"双分支","link":"#双分支","children":[]},{"level":2,"title":"多分支","slug":"多分支","link":"#多分支","children":[]},{"level":2,"title":"高级写法","slug":"高级写法","link":"#高级写法","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"relativePath":"go/基础知识/条件语句.md"}'),t={name:"go/基础知识/条件语句.md"},c=o(`<h1 id="go-语言笔记-条件语句" tabindex="-1">Go 语言笔记：条件语句 <a class="header-anchor" href="#go-语言笔记-条件语句" aria-hidden="true" loading="lazy">#</a></h1><h2 id="条件语句" tabindex="-1">条件语句 <a class="header-anchor" href="#条件语句" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> 语言中的条件语句，就是我们在其他语言中常见的 <code>if</code> 和 <code>else</code>。</p><h2 id="单分支" tabindex="-1">单分支 <a class="header-anchor" href="#单分支" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">95</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">优秀</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="双分支" tabindex="-1">双分支 <a class="header-anchor" href="#双分支" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">85</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">优秀</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">继续努力</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="多分支" tabindex="-1">多分支 <a class="header-anchor" href="#多分支" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">score </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">85</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">优秀</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">75</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">良好</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">一般</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">差</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="高级写法" tabindex="-1">高级写法 <a class="header-anchor" href="#高级写法" aria-hidden="true" loading="lazy">#</a></h2><p>statement 是可选部分，在 condition 之前执行</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> statement</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> condition </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> 语言中，对于条件语句的闭合是有严格要求的</p><ul><li>不管分支内有几条语句，都必须以 <code>{}</code> 闭合，不能省略</li><li><code>else</code> 和 <code>else if</code> 两边的 <code>{}</code> 必须在同一行</li></ul><hr>`,16);function r(D,i,F,y,A,C){const s=p("GoogleAdsense");return e(),n("div",null,[c,l(s)])}const g=a(t,[["render",r]]);export{h as __pageData,g as default};
