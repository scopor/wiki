import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.a3a37d79.js";const u=JSON.parse('{"title":"Go 语言笔记：包和文件","description":"Go，包和文件，导包的方式，匿名、别名、全量导入，init 函数","frontmatter":{"title":"Go 语言笔记：包和文件","head":[["meta",{"property":"og:title","content":"Go 语言笔记：包和文件"}],["meta",{"name":"description","content":"Go，包和文件，导包的方式，匿名、别名、全量导入，init 函数"}],["meta",{"name":"keywords","content":"Go，包和文件，导包的方式，匿名、别名、全量导入，init 函数"}],["meta",{"property":"og:description","content":"Go，包和文件，导包的方式，匿名、别名、全量导入，init 函数"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%8C%85%E5%92%8C%E6%96%87%E4%BB%B6"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%8C%85%E5%92%8C%E6%96%87%E4%BB%B6"}]]},"headers":[{"level":2,"title":"导包的方式","slug":"导包的方式","link":"#导包的方式","children":[]},{"level":2,"title":"匿名、别名、全量导入","slug":"匿名、别名、全量导入","link":"#匿名、别名、全量导入","children":[]},{"level":2,"title":"init 函数执行流程","slug":"init-函数执行流程","link":"#init-函数执行流程","children":[]}],"relativePath":"go/基础知识/包和文件.md"}'),t={name:"go/基础知识/包和文件.md"},c=p(`<h1 id="go-语言笔记-包和文件" tabindex="-1">Go 语言笔记：包和文件 <a class="header-anchor" href="#go-语言笔记-包和文件" aria-hidden="true" loading="lazy">#</a></h1><h2 id="导包的方式" tabindex="-1">导包的方式 <a class="header-anchor" href="#导包的方式" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>单个包的导入</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>多个包的导入</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>包导入之后必须使用, 否则编译器会提示: Unused import，如果必须导入，可以使用匿名导入的方式</p></blockquote><h2 id="匿名、别名、全量导入" tabindex="-1">匿名、别名、全量导入 <a class="header-anchor" href="#匿名、别名、全量导入" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    _ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">image/png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 匿名导入</span></span>
<span class="line"><span style="color:#A6ACCD;">    . </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">math</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// 全量导入</span></span>
<span class="line"><span style="color:#A6ACCD;">    str </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 别名导入</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 使用别名调用其方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 全量导入后，直接像调用本文件的函数一样调用其函数即可</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Abs</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>匿名导包，主要是为了解决代码中没有显式调用该包的函数但执行又必须需要时，编译器提示Unused import 的问题，如图片格式转换, 使用命令 <code>cat demo.png | go run convert.go &gt; demo.jpeg</code> 执行转换， <code>convert.go</code> 文件内容如下</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">image</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">image/jpeg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	img</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> kind</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Decode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stdin</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fprintf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stderr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">err: %v</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fprintf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stderr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input format: %v</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> kind</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	_ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> jpeg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Encode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stdout</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">jpeg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Quality</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">95</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="init-函数执行流程" tabindex="-1"><strong>init</strong> 函数执行流程 <a class="header-anchor" href="#init-函数执行流程" aria-hidden="true" loading="lazy">#</a></h2><p>有项目路径如下：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">lemon</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── lib1</span></span>
<span class="line"><span style="color:#A6ACCD;">    │   └── lib1</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── lib2</span></span>
<span class="line"><span style="color:#A6ACCD;">    │   └── lib2</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── main</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;font-style:italic;">go</span></span>
<span class="line"></span></code></pre></div><blockquote><p>lib1 包中 文件 lib2.go 内容为：</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lib1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这里函数大写开头表示可以被外部包引入后调用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 小写开头只能在本包中调用</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I&#39;m in lib1.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>lib2 包中 文件 lib2.go 内容为：</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lib2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I&#39;m in lib2.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>main.go 内容如下：</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lemon/lib1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lemon/lib2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	lib2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	lib1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>执行 main 函数，结果如下：</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m in lib1.</span></span>
<span class="line"><span style="color:#C3E88D;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">m in lib2</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Hi</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre></div><blockquote><p>可以看到 <strong>init</strong> 函数执行的时间是按照被 <strong>main</strong> 包导入的顺序执行的。</p></blockquote><hr>`,24);function r(D,F,y,i,C,A){const s=e("GoogleAdsense");return o(),a("div",null,[c,l(s)])}const g=n(t,[["render",r]]);export{u as __pageData,g as default};
