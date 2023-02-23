import{_ as n,c as a,d as e,e as l,o,r as p}from"./app.6b8ce717.js";const f=JSON.parse('{"title":"Go 语言笔记：defer","description":"defer 是 Go 新增的关键字，表示延迟调用，在 defer 之后可以紧跟表达式或者函数。defer 后面的语句会在当前函数执行完毕后被执行。","frontmatter":{"title":"Go 语言笔记：defer","head":[["meta",{"property":"og:title","content":"Go 语言笔记：defer"}],["meta",{"name":"description","content":"defer 是 Go 新增的关键字，表示延迟调用，在 defer 之后可以紧跟表达式或者函数。defer 后面的语句会在当前函数执行完毕后被执行。"}],["meta",{"name":"keywords","content":"Go,defer"}],["meta",{"property":"og:description","content":"defer 是 Go 新增的关键字，表示延迟调用，在 defer 之后可以紧跟表达式或者函数。defer 后面的语句会在当前函数执行完毕后被执行。"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/defer"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/defer"}]]},"headers":[{"level":2,"title":"defer 定义","slug":"defer-定义","link":"#defer-定义","children":[]},{"level":2,"title":"defer 栈","slug":"defer-栈","link":"#defer-栈","children":[]},{"level":2,"title":"defer 和 return 执行顺序","slug":"defer-和-return-执行顺序","link":"#defer-和-return-执行顺序","children":[]}],"relativePath":"go/基础知识/defer.md"}'),t={name:"go/基础知识/defer.md"},r=l(`<h1 id="go-语言笔记-defer" tabindex="-1">Go 语言笔记：defer <a class="header-anchor" href="#go-语言笔记-defer" aria-hidden="true" loading="lazy">#</a></h1><h2 id="defer-定义" tabindex="-1">defer 定义 <a class="header-anchor" href="#defer-定义" aria-hidden="true" loading="lazy">#</a></h2><p><code>defer</code> 是 <code>Go</code> 新增的关键字，表示延迟调用，在 <code>defer</code> 之后可以紧跟表达式或者函数。<code>defer</code> 后面的语句会在当前函数执行完毕后被执行。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">defer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ftm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 打印结果</span></span>
<span class="line"><span style="color:#A6ACCD;">main</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">defer</span></span>
<span class="line"></span></code></pre></div><h2 id="defer-栈" tabindex="-1">defer 栈 <a class="header-anchor" href="#defer-栈" aria-hidden="true" loading="lazy">#</a></h2><p>如果某个函数中存在有多个 <code>defer</code>，他们之间会以入栈的方式后进先出的顺序来执行。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// func3 最先执行，其次是 func2，最后执行 func1</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func1</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func2</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func3</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="defer-和-return-执行顺序" tabindex="-1">defer 和 return 执行顺序 <a class="header-anchor" href="#defer-和-return-执行顺序" aria-hidden="true" loading="lazy">#</a></h2><p>先说结论 ：<code>return</code> 先于 <code>defer</code> 执行。<code>defer</code> 的执行时机是在 <code>return</code> 执行完成之后才开始执行</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deferCall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnCall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnCall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">return called.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deferCall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">defer called.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">call</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 打印结果</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> called</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">defer</span><span style="color:#A6ACCD;"> called</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre></div><hr>`,11);function c(D,F,y,i,d,A){const s=p("GoogleAdsense");return o(),a("div",null,[r,e(s)])}const u=n(t,[["render",c]]);export{f as __pageData,u as default};
