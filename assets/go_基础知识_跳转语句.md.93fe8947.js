import{_ as n,c as a,d as l,e as o,o as p,r as e}from"./app.dde4153b.js";const m=JSON.parse('{"title":"Go 语言笔记：跳转语句","description":"Go 跳转语句,使用 goto 关键字，后面跟一个标签，该标签代码一个代码段的执行起点","frontmatter":{"title":"Go 语言笔记：跳转语句","head":[["meta",{"property":"og:title","content":"Go 语言笔记：跳转语句"}],["meta",{"name":"description","content":"Go 跳转语句,使用 goto 关键字，后面跟一个标签，该标签代码一个代码段的执行起点"}],["meta",{"name":"keywords","content":"Go,跳转语句,goto关键字"}],["meta",{"property":"og:description","content":"Go 跳转语句,使用 goto 关键字，后面跟一个标签，该标签代码一个代码段的执行起点"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5"}]]},"headers":[{"level":2,"title":"跳转语句","slug":"跳转语句","link":"#跳转语句","children":[]},{"level":2,"title":"条件限制","slug":"条件限制","link":"#条件限制","children":[]}],"relativePath":"go/基础知识/跳转语句.md"}'),t={name:"go/基础知识/跳转语句.md"},c=o(`<h1 id="go-语言笔记-跳转语句" tabindex="-1">Go 语言笔记：跳转语句 <a class="header-anchor" href="#go-语言笔记-跳转语句" aria-hidden="true" loading="lazy">#</a></h1><h2 id="跳转语句" tabindex="-1">跳转语句 <a class="header-anchor" href="#跳转语句" aria-hidden="true" loading="lazy">#</a></h2><p><code>goto</code> 语句是 <code>Go</code> 语言中的跳转语句，后面紧跟一个标签，该标签代表一个代码段的执行起点。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">goto</span><span style="color:#A6ACCD;"> label</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">label code</span></span>
<span class="line"></span></code></pre></div><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winter is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">goto</span><span style="color:#A6ACCD;"> label</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winter is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  label</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Summer is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 打印结果</span></span>
<span class="line"><span style="color:#A6ACCD;">Winter is coming</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Summer is coming</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre></div><h2 id="条件限制" tabindex="-1">条件限制 <a class="header-anchor" href="#条件限制" aria-hidden="true" loading="lazy">#</a></h2><p><code>goto</code> 语句和标签之间不能存在变量的定义，否则会编译报错</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winter is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">goto</span><span style="color:#A6ACCD;"> label</span></span>
<span class="line"><span style="color:#A6ACCD;">  num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  label</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Summer is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 报错信息</span></span>
<span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">main</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">goto</span><span style="color:#A6ACCD;"> label jumps over declaration of num at </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">main</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">6</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>goto</code> 语句可以配合其他条件实现类似 <code>break</code>、<code>continue</code> 等效果。</p></div><hr>`,10);function r(D,F,i,y,A,C){const s=e("GoogleAdsense");return p(),a("div",null,[c,l(s)])}const g=n(t,[["render",r]]);export{m as __pageData,g as default};
