import{_ as n,c as a,d as l,e as o,o as p,r as e}from"./app.5814749a.js";const f=JSON.parse('{"title":"Go 语言笔记：循环语句","description":"Go,循环语句,for 循环,for range语句，break 和 continue","frontmatter":{"title":"Go 语言笔记：循环语句","head":[["meta",{"property":"og:title","content":"Go 语言笔记：循环语句"}],["meta",{"name":"description","content":"Go,循环语句,for 循环,for range语句，break 和 continue"}],["meta",{"name":"keywords","content":"Go,循环语句,for 循环,for range语句，break 和 continue"}],["meta",{"property":"og:description","content":"Go,循环语句,for 循环,for range语句，break 和 continue"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5"}]]},"headers":[{"level":2,"title":"循环语句","slug":"循环语句","link":"#循环语句","children":[]},{"level":2,"title":"for 语句写法","slug":"for-语句写法","link":"#for-语句写法","children":[]},{"level":2,"title":"break 语句","slug":"break-语句","link":"#break-语句","children":[]},{"level":2,"title":"continue 语句","slug":"continue-语句","link":"#continue-语句","children":[]}],"relativePath":"go/基础知识/循环语句.md"}'),t={name:"go/基础知识/循环语句.md"},c=o(`<h1 id="go-语言笔记-循环语句" tabindex="-1">Go 语言笔记：循环语句 <a class="header-anchor" href="#go-语言笔记-循环语句" aria-hidden="true" loading="lazy">#</a></h1><h2 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-hidden="true" loading="lazy">#</a></h2><p>循环语句可以重复执行一段代码，在 <code>Java</code> 中，循环语句有 <code>while</code> 、<code>do while</code>、<code>for</code> 语句，但在 <code>Go</code> 语言中，只有 <code>for</code> 一种循环语句。</p><h2 id="for-语句写法" tabindex="-1"><code>for</code> 语句写法 <a class="header-anchor" href="#for-语句写法" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// for + 表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for + 三个表达式, 表达式初始化变量, 表达式2如果未true则循环继续，否则推出, 表达式3为循环后变量的变化</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">:=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for range</span></span>
<span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">霸王别姬</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index %d, movie %s </span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for 无限循环</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="break-语句" tabindex="-1"><code>break</code> 语句 <a class="header-anchor" href="#break-语句" aria-hidden="true" loading="lazy">#</a></h2><p><code>break</code> 语句用于终止循环的执行</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  num</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 打印结果</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"></span></code></pre></div><h2 id="continue-语句" tabindex="-1"><code>continue</code> 语句 <a class="header-anchor" href="#continue-语句" aria-hidden="true" loading="lazy">#</a></h2><p><code>continue</code> 语句用于跳出当前循环，在该continue之后的语句将不会被执行，但是会继续下一次循环。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">continue</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 打印结果</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">7</span></span>
<span class="line"><span style="color:#F78C6C;">9</span></span>
<span class="line"></span></code></pre></div><hr>`,12);function r(D,y,i,F,C,A){const s=e("GoogleAdsense");return p(),a("div",null,[c,l(s)])}const u=n(t,[["render",r]]);export{f as __pageData,u as default};
