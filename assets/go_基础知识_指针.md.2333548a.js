import{_ as a,D as n,o as l,c as p,G as o,R as e}from"./chunks/framework.fed62f4c.js";const d=JSON.parse('{"title":"Go 语言笔记：指针","description":"Go 指针，指向的是一个变量或者常量的内存地址，指针通过在指定类型前面加 * 符号来定义指针，指针如果只做了声明，没有任何变量为其赋值，那么该指针视为 **空指针**，其值为 nil","frontmatter":{"title":"Go 语言笔记：指针","head":[["meta",{"property":"og:title","content":"Go 语言笔记：指针"}],["meta",{"name":"description","content":"Go 指针，指向的是一个变量或者常量的内存地址，指针通过在指定类型前面加 * 符号来定义指针，指针如果只做了声明，没有任何变量为其赋值，那么该指针视为 **空指针**，其值为 nil"}],["meta",{"name":"keywords","content":"Go,指针,指针声明及使用，指针的作用，二级指针"}],["meta",{"property":"og:description","content":"Go 指针，指向的是一个变量或者常量的内存地址，指针通过在指定类型前面加 * 符号来定义指针，指针如果只做了声明，没有任何变量为其赋值，那么该指针视为 **空指针**，其值为 nil"}],["meta",{"property":"og:url","content":"https://sooloe.com/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%8C%87%E9%92%88"}],["link",{"rel":"canonical","href":"https://sooloe.com/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E6%8C%87%E9%92%88"}]]},"headers":[],"relativePath":"go/基础知识/指针.md","filePath":"go/基础知识/指针.md"}'),t={name:"go/基础知识/指针.md"},c=e(`<h1 id="go-语言笔记-指针" tabindex="-1">Go 语言笔记：指针 <a class="header-anchor" href="#go-语言笔记-指针" aria-label="Permalink to &quot;Go 语言笔记：指针&quot;" loading="lazy">​</a></h1><h2 id="指针" tabindex="-1">指针 <a class="header-anchor" href="#指针" aria-label="Permalink to &quot;指针&quot;" loading="lazy">​</a></h2><blockquote><p>指针，指向的是一个变量或者常量的内存地址</p></blockquote><h2 id="指针声明及使用" tabindex="-1">指针声明及使用 <a class="header-anchor" href="#指针声明及使用" aria-label="Permalink to &quot;指针声明及使用&quot;" loading="lazy">​</a></h2><blockquote><p>指针通过在指定类型前面加 * 符号来定义指针，如下的 age 指针</p></blockquote><blockquote><p>指针如果只做了声明，没有任何变量为其赋值，那么该指针视为 <strong>空指针</strong>，其值为 <code>&lt;nil&gt;</code>，如下面的 ptr</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ptr </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">float32</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a           </span><span style="color:#676E95;font-style:italic;">// 使用 &amp; 符号获得变量 a 的内存地址，并赋值给指针 age </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// a 的 内存地址 0xc000018090</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// &lt;nil&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">// 使用 * 符号来改变指针的对应的内存地址中的值为 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// a 的值变更为 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// a 的 内存地址依然为 0xc000018090，没有变更</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="二级指针" tabindex="-1">二级指针 <a class="header-anchor" href="#二级指针" aria-label="Permalink to &quot;二级指针&quot;" loading="lazy">​</a></h2><blockquote><p>Go 语言支持定义一个指向指针的指针，也就是二级指针，如下：</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a       </span><span style="color:#676E95;font-style:italic;">// 一级指针，指向变量 a 的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 内存地址 0xc000018090</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 内存地址 0xc000018090</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">b       </span><span style="color:#676E95;font-style:italic;">// 二级指针，指向指针 b 的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 内存地址 0xc00000e030</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 内存地址 0xc00000e030</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="指针的作用" tabindex="-1">指针的作用 <a class="header-anchor" href="#指针的作用" aria-label="Permalink to &quot;指针的作用&quot;" loading="lazy">​</a></h2><blockquote><p>通过指针改变指针指向的内存地址中的值，比如交换两个变量的值，就可以用过指针来改变内存地址的值来操作</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  b </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">swap</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">swap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> temp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">c    </span><span style="color:#676E95;font-style:italic;">// 将 c 指针对应的内存地址中的值赋值给临时变量 temp</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">d          </span><span style="color:#676E95;font-style:italic;">// 将 d 指针对应的内存地址的值赋值给指针 c 内存地址中的值</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> temp        </span><span style="color:#676E95;font-style:italic;">// 将临时变量 temp 的值赋值给指针 d 对应的内存地址中的值</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><hr>`,14);function r(D,y,A,F,C,i){const s=n("GoogleAdsense");return l(),p("div",null,[c,o(s)])}const g=a(t,[["render",r]]);export{d as __pageData,g as default};
