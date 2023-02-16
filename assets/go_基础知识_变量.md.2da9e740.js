import{_ as a,c as n,d as l,e as o,o as e,r as p}from"./app.64610248.js";const h=JSON.parse('{"title":"Go 语言笔记：变量","description":"Go 语言中变量是某个存储单元的名称，存储单元存储特定类型的值，变量声明、初始化、使用及类型推断","frontmatter":{"title":"Go 语言笔记：变量","head":[["meta",{"property":"og:title","content":"Go 语言笔记：变量"}],["meta",{"name":"description","content":"Go 语言中变量是某个存储单元的名称，存储单元存储特定类型的值，变量声明、初始化、使用及类型推断"}],["meta",{"name":"keywords","content":"Go,变量"}],["meta",{"property":"og:description","content":"Go 语言中变量是某个存储单元的名称，存储单元存储特定类型的值，变量声明、初始化、使用及类型推断"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%8F%98%E9%87%8F"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%8F%98%E9%87%8F"}]]},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"变量的声明","slug":"变量的声明","link":"#变量的声明","children":[]},{"level":2,"title":"声明变量并初始化","slug":"声明变量并初始化","link":"#声明变量并初始化","children":[]},{"level":2,"title":"类型推断","slug":"类型推断","link":"#类型推断","children":[]},{"level":2,"title":"声明多个变量","slug":"声明多个变量","link":"#声明多个变量","children":[]},{"level":2,"title":"简短声明","slug":"简短声明","link":"#简短声明","children":[]},{"level":2,"title":"强类型","slug":"强类型","link":"#强类型","children":[]},{"level":2,"title":"未使用的变量","slug":"未使用的变量","link":"#未使用的变量","children":[]},{"level":2,"title":"在 init 函数中声明变量","slug":"在-init-函数中声明变量","link":"#在-init-函数中声明变量","children":[]}],"relativePath":"go/基础知识/变量.md"}'),t={name:"go/基础知识/变量.md"},c=o(`<h1 id="go-语言笔记-变量" tabindex="-1">Go 语言笔记：变量 <a class="header-anchor" href="#go-语言笔记-变量" aria-hidden="true" loading="lazy">#</a></h1><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>变量是某个存储单元的名称，存储单元存储特定类型的值</p></blockquote><h2 id="变量的声明" tabindex="-1">变量的声明 <a class="header-anchor" href="#变量的声明" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>通常我们使用 <code>var name type</code> 来声明单个变量</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> name </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre></div><h2 id="声明变量并初始化" tabindex="-1">声明变量并初始化 <a class="header-anchor" href="#声明变量并初始化" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>变量可以在声明的时候进行初始化操作，使用格式 <code>var name type = initValue</code></p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"></span></code></pre></div><h2 id="类型推断" tabindex="-1">类型推断 <a class="header-anchor" href="#类型推断" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>变量声明也可以直接省略掉 <code>type</code> 关键字，直接初始化，这因为 <code>Go</code> 语言具有类型推断的能力，因此我们使用 <code>var name = initValue</code> 来声明变量。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"></span></code></pre></div><h2 id="声明多个变量" tabindex="-1">声明多个变量 <a class="header-anchor" href="#声明多个变量" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>在项目中，经常会声明多个变量，那么如何声明呢，如果是同一种类型的变量，我们可以使用如下几种格式</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 同一种类型单行声明多个变量</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> name1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name2 </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initValue1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> initValue2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 不同类型多行声明多个变量，此类写法多用于声明包级别的变量</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initValue1</span></span>
<span class="line"><span style="color:#A6ACCD;">  name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initValue2</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="简短声明" tabindex="-1">简短声明 <a class="header-anchor" href="#简短声明" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>除了以上声明方式外，<code>Go</code> 语言还支持一种简短声明，使用 <code>:=</code> 操作符，简短声明要求所有变量都初始化，此类写法主要用于函数体内声明局部变量</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nage</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>并且，变量中至少有一个尚未声明过，如果两个变量都已经初始化过了，会抛出异常</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Teacher</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// no new variables ont left sid of :=</span></span>
<span class="line"></span></code></pre></div><h2 id="强类型" tabindex="-1">强类型 <a class="header-anchor" href="#强类型" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Go</code> 语言是强类型语言，变量的类型不能更改</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 编译错误 Cannot use &#39;&quot;lemon&quot;&#39; (type string) as type int </span></span>
<span class="line"></span></code></pre></div><h2 id="未使用的变量" tabindex="-1">未使用的变量 <a class="header-anchor" href="#未使用的变量" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Go</code> 语言不允许声明了变量而不使用它</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">io</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">net/http</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 显示编译错误 Unused variable &#39;age&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">  http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HandleFunc</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">w http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ResponseWriter</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    io</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">w</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi, Lemon.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">  http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ListenAndServe</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:8080</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>运行时显示错误</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">age declared but not used</span></span>
<span class="line"></span></code></pre></div><h2 id="在-init-函数中声明变量" tabindex="-1">在 <code>init</code> 函数中声明变量 <a class="header-anchor" href="#在-init-函数中声明变量" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>init</code> 函数是非常特殊的函数，不能被人为调用，它是在每个包初始化时自动执行，优先级高于 <code>main</code> 函数，主要用于启动时执行初始化任务或者数据修复等场景。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><hr>`,32);function r(i,D,y,F,C,d){const s=p("GoogleAdsense");return e(),n("div",null,[c,l(s)])}const u=a(t,[["render",r]]);export{h as __pageData,u as default};
