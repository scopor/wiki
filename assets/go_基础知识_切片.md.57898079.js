import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.7fe87adc.js";const u=JSON.parse('{"title":"Go 语言笔记：切片","description":"Go 切片和数组一样都是序列，但切片是变长的，因此切片声明时一般写作：[]Type ，切片是对数组的引用，也就是说切片会将数组作为其底层的数据结构，可以时数组由某个索引开始到另一个索引终止对一段连续片段","frontmatter":{"title":"Go 语言笔记：切片","head":[["meta",{"property":"og:title","content":"Go 语言笔记：切片"}],["meta",{"name":"description","content":"Go 切片和数组一样都是序列，但切片是变长的，因此切片声明时一般写作：[]Type ，切片是对数组的引用，也就是说切片会将数组作为其底层的数据结构，可以时数组由某个索引开始到另一个索引终止对一段连续片段"}],["meta",{"name":"keywords","content":"Go,切片,切片的创建、修改、追加、获取，切片的长度和容量，多维切片"}],["meta",{"property":"og:description","content":"Go 切片和数组一样都是序列，但切片是变长的，因此切片声明时一般写作：[]Type ，切片是对数组的引用，也就是说切片会将数组作为其底层的数据结构，可以时数组由某个索引开始到另一个索引终止对一段连续片段"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%88%87%E7%89%87"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%88%87%E7%89%87"}]]},"headers":[{"level":2,"title":"切片的概念","slug":"切片的概念","link":"#切片的概念","children":[]},{"level":2,"title":"切片的创建","slug":"切片的创建","link":"#切片的创建","children":[]},{"level":2,"title":"切片的长度和容量","slug":"切片的长度和容量","link":"#切片的长度和容量","children":[]},{"level":2,"title":"切片的修改","slug":"切片的修改","link":"#切片的修改","children":[]},{"level":2,"title":"切片追加元素","slug":"切片追加元素","link":"#切片追加元素","children":[]},{"level":2,"title":"获取切片元素","slug":"获取切片元素","link":"#获取切片元素","children":[]},{"level":2,"title":"多维切片","slug":"多维切片","link":"#多维切片","children":[]}],"relativePath":"go/基础知识/切片.md"}'),t={name:"go/基础知识/切片.md"},c=p(`<h1 id="go-语言笔记-切片" tabindex="-1">Go 语言笔记：切片 <a class="header-anchor" href="#go-语言笔记-切片" aria-hidden="true" loading="lazy">#</a></h1><h2 id="切片的概念" tabindex="-1">切片的概念 <a class="header-anchor" href="#切片的概念" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>切片和数组一样都是序列，但切片是变长的，因此切片声明时一般写作 <code>[]Type</code> ，切片是对数组的引用，也就是说切片会将数组作为其底层的数据结构，可以时数组由某个索引开始到另一个索引终止对一段连续片段。</p></blockquote><h2 id="切片的创建" tabindex="-1">切片的创建 <a class="header-anchor" href="#切片的创建" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>使用 <code>[]Type</code> 创建切片</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 声明整形类型的切片</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 声明空切片</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 初始化一个非空切片</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 截取数组获得切片</span></span>
<span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [20 30]</span></span>
<span class="line"></span></code></pre></div><p>使用语法 <code>arr[start:end]</code> 是创建一个从数组 <code>arr</code> 索引 <code>start</code> 开始到 <code>end - 1</code> 结束的切片，左开右闭。除此之外，我们也可以使用 <code>make</code> 函数创建 一个切片，格式为 <code>make([]type, size, cap)</code></p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个长度为2，容量为3的整形切片</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="切片的长度和容量" tabindex="-1">切片的长度和容量 <a class="header-anchor" href="#切片的长度和容量" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>切片的组成部分为：指针、长度和容量，指针指向切片第一个元素对应的底层数组元素的地址，长度对应切片中元素的个数，容量是从切片的开始位置到底层数据的结束位置，且长度不能超容量。我们可以使用内置的 <code>len</code> 和 <code>cap</code> 函数分别获取切片的长度和容量。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span></code></pre></div><p>切片和数组不同，切片是引用类型，因此其默认值为 <code>nil</code></p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><p>但一个切片中的元素为空时，应该判断其长度是否为 0 作为一个空切片的判断依据。切片之间不能直接比较，必须对切片中的每个元素进行比较来判断两个切片是否相等，标准库中针对字节类型的切片（[]byte）是否相等提供了 <code>bytes.Equal</code> 函数。</p><h2 id="切片的修改" tabindex="-1">切片的修改 <a class="header-anchor" href="#切片的修改" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>切片本身不拥有任何数据，它只是底层数组的一种表示方式，对切片的任何修改都会反应到底层数据中。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// [10 20 30 40]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// [20 30]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 修改切片</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// [10 50 30 40]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// [50 30]</span></span>
<span class="line"></span></code></pre></div><h2 id="切片追加元素" tabindex="-1">切片追加元素 <a class="header-anchor" href="#切片追加元素" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>使用 <code>append</code> 函数可以将新的元素追加到切片上，当新的元素加入到切片之后，会创建一个新的数组，现有数组的元素被复制到这个新的数组中，并返回这个新数组的新切片引用，如果追加后长度超过旧切片的长度时，新切片的容量会变成旧切片容量的两倍。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 追加一个元素 3</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 追加两个元素 4 5</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 追加一个切片 ... 表示解包不能省略</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">}...)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在第一个位置插入一个元素 0</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">...)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 16</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// [0 1 2 3 4 5 6 7 9]</span></span>
<span class="line"></span></code></pre></div><h2 id="获取切片元素" tabindex="-1">获取切片元素 <a class="header-anchor" href="#获取切片元素" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>和数组一样，我们也可以使用 <code>for range</code> 循环来获取切片 的索引和索引对应的值</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> idnex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nums[%d] = %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="多维切片" tabindex="-1">多维切片 <a class="header-anchor" href="#多维切片" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[][]</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span></code></pre></div><hr>`,26);function r(D,y,F,C,A,i){const s=e("GoogleAdsense");return o(),a("div",null,[c,l(s)])}const m=n(t,[["render",r]]);export{u as __pageData,m as default};
