import{_ as a,c as n,d as o,e as l,o as p,r as e}from"./app.5814749a.js";const m=JSON.parse('{"title":"Go 语言笔记：常量","description":"Go常量，表示固定值，常量值在编译时确定，声明多个常量时，如果后面的常量未进行初始化，那么其值默认为其上一个常量的值","frontmatter":{"title":"Go 语言笔记：常量","head":[["meta",{"property":"og:title","content":"Go 语言笔记：常量"}],["meta",{"name":"description","content":"Go常量，表示固定值，常量值在编译时确定，声明多个常量时，如果后面的常量未进行初始化，那么其值默认为其上一个常量的值"}],["meta",{"name":"keywords","content":"Go,常量,iota"}],["meta",{"property":"og:description","content":"Go常量，表示固定值，常量值在编译时确定，声明多个常量时，如果后面的常量未进行初始化，那么其值默认为其上一个常量的值"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%B8%B8%E9%87%8F"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%B8%B8%E9%87%8F"}]]},"headers":[{"level":2,"title":"常量","slug":"常量","link":"#常量","children":[]},{"level":2,"title":"iota","slug":"iota","link":"#iota","children":[]},{"level":2,"title":"常量值在编译时确定","slug":"常量值在编译时确定","link":"#常量值在编译时确定","children":[]}],"relativePath":"go/基础知识/常量.md"}'),t={name:"go/基础知识/常量.md"},c=l(`<h1 id="go-语言笔记-常量" tabindex="-1">Go 语言笔记：常量 <a class="header-anchor" href="#go-语言笔记-常量" aria-hidden="true" loading="lazy">#</a></h1><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>常量，表示固定值，比如 <code>π</code> ，常量定义之后不能修改，定义格式如下</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 定义单个常量</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.1415</span></span>
<span class="line"><span style="color:#A6ACCD;">pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 编译错误 Cannot assign to age，常量不允许重新赋值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义多个常量</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  notFound </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span></span>
<span class="line"><span style="color:#A6ACCD;">  ok </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#A6ACCD;">  config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app.properties</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>声明多个常量时，如果后面的常量未进行初始化，那么其值默认为其上一个常量的值</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// m2, m3 的值同样为 18</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">  m2</span></span>
<span class="line"><span style="color:#A6ACCD;">  m3</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="iota" tabindex="-1">iota <a class="header-anchor" href="#iota" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>iota</code> 是 <code>Go</code> 语言的一个常量计数器，只能在常量的表达式中使用，<code>iota</code> 在 <code>const</code> 关键字出现时重置为 0，常量每新增一行，<code>iota</code> 自动 <code>+1</code>，即使这一行没有使用到 <code>iota</code>，即 <code>iota</code> 是逐行 <code>+1</code>， 不会因为同一行中多次使用 <code>iota</code> 而导致下一行的值变为 <code>+n</code></p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// m0=&quot;lemon&quot;, m1 = 1, m2 = 20, m3 = 3, m4 = 4</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  m0 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#A6ACCD;">  m2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">  m3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#A6ACCD;">  m4</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>当一行存在多个 <code>iota</code> 时，其值都一样</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// m1 = 1, m2 = 2, m3 = 2, m4 = 3</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  m1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">  m3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="常量值在编译时确定" tabindex="-1">常量值在编译时确定 <a class="header-anchor" href="#常量值在编译时确定" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>常量的值必须是在编译时就确定的，而函数的调用是在运行时，如果将函数返回值赋给常量，那么你会得到一个编译错误，但内置函数（不需要导入包）不受此影响</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// age 初始化错误：Const initializer &#39;math.Sqrt(4)&#39; is not a constant</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sqrt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// len 为内置函数，不需要导入包，因此 length初始值 = 5</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><hr>`,15);function r(i,D,y,C,F,A){const s=e("GoogleAdsense");return p(),n("div",null,[c,o(s)])}const g=a(t,[["render",r]]);export{m as __pageData,g as default};
