import{_ as a,D as n,o as l,c as p,G as o,R as e}from"./chunks/framework.fed62f4c.js";const m=JSON.parse('{"title":"编译","description":"","frontmatter":{},"headers":[],"relativePath":"c/编译.md","filePath":"c/编译.md"}'),t={name:"c/编译.md"},c=e(`<h1 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;" loading="lazy">​</a></h1><p>C 语言是一种编译型语言，程序需要经过编译器的处理生成可执行文件后才能被计算机运行。C 语言的编译过程可以分为四个阶段：预处理、编译、汇编和链接。</p><ul><li>预处理: 在预处理阶段，编译器会对源代码进行处理，包括去掉注释、展开宏定义等。预处理器的主要工作就是将所有以#开头的指令都进行替换。例如 #define 定义一个宏时，预处理器就会将这个宏展开到所有使用它的地方。</li><li>编译：在编译阶段，编译器会将预处理后的源代码转换成汇编代码，也就是将高级语言转换成低级语言。在这个过程中，编译器会进行语法检查、语义分析等操作，并将转换后的代码保存为目标文件。目标文件是一种二进制格式的文件，其中包含了可重定位的机器代码和符号表信息。</li><li>汇编：在汇编阶段，汇编器将目标文件转换成机器码，这个过程主要是将汇编代码翻译成机器码指令，生成二进制目标文件。汇编器的输出是一组字节序列，这些字节序列代表了程序的指令和数据。</li><li>链接: 在链接阶段，链接器将多个目标文件和库文件合并成一个可执行文件。在这个过程中，链接器会根据符号表信息对目标文件进行地址重定向，并将所有符号引用都解析为实际的地址。链接器的输出是一个可执行程序，其中包含了所有需要的代码和数据。</li></ul><h2 id="编译示例" tabindex="-1">编译示例 <a class="header-anchor" href="#编译示例" aria-label="Permalink to &quot;编译示例&quot;" loading="lazy">​</a></h2><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="环境变量配置" tabindex="-1">环境变量配置 <a class="header-anchor" href="#环境变量配置" aria-label="Permalink to &quot;环境变量配置&quot;" loading="lazy">​</a></h2><p>windows 将 mingw 的 bin 目录配置到环境变量 path 中，我当前用的是 CLion 自带的 mingw，路径是: <code>D:\\Program Files\\JetBrains\\CLion 2023.1.2\\bin\\mingw\\bin</code></p><p>将 CLion 的 Terminal 配置为 PowerShell， 配置 settings -&gt; terminal -&gt; shell path 为 PowerShell，配置完毕后重启 CLion, 在 PowerShell 中执行 gcc --help, 如果不生效需要重启电脑。</p><h2 id="gcc-编译过程" tabindex="-1">gcc 编译过程 <a class="header-anchor" href="#gcc-编译过程" aria-label="Permalink to &quot;gcc 编译过程&quot;" loading="lazy">​</a></h2><p>在 CLion 中打开 Terminal, 执行以下命令进行文件的预处理</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">E main.c </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main.i</span></span></code></pre></div><p>此时会生成一个 mian.i 的文件，打开查看里面的内容会发现，我们的代码在经过预处理之后，#include &lt;stdio.h&gt;中的内容都替换过来了。最下面的位置就是我们的代码了：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#82AAFF;">__attribute__</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__dllimport__</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__attribute__</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">__cdecl__</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_wscanf_l</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">wchar_t</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">_Format</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">_locale_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">_Locale</span><span style="color:#89DDFF;">,...);</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#F78C6C;">1559</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:/Program Files/JetBrains/CLion 2023.1.2/bin/mingw/x86_64-w64-mingw32/include/stdio.h</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.c</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>预处理之后，我们将可以将其编译为汇编程序了</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">S main.i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main.s</span></span></code></pre></div><p>这里的 -S 就是预处理之后的文件，我们可以直接将其编译成汇编代码</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.file	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.c</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	.text</span></span>
<span class="line"><span style="color:#A6ACCD;">	.def	printf</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.scl	</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.type	</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.endef</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_proc	printf</span></span>
<span class="line"><span style="color:#A6ACCD;">printf:</span></span>
<span class="line"><span style="color:#A6ACCD;">	pushq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_pushreg	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	pushq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbx</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_pushreg	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbx</span></span>
<span class="line"><span style="color:#A6ACCD;">	subq	$</span><span style="color:#F78C6C;">56</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rsp</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_stackalloc	</span><span style="color:#F78C6C;">56</span></span>
<span class="line"><span style="color:#A6ACCD;">	leaq	</span><span style="color:#F78C6C;">48</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rsp</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_setframe	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">48</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_endprologue</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rcx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rdx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">r8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">48</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">r9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">56</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	leaq	</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rax</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rax</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbx</span></span>
<span class="line"><span style="color:#A6ACCD;">	movl	$</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">ecx</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#82AAFF;">__imp___acrt_iob_func</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rip</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rax</span></span>
<span class="line"><span style="color:#A6ACCD;">	call	</span><span style="color:#89DDFF;">*%</span><span style="color:#A6ACCD;">rax</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">r8</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rdx</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rax</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rcx</span></span>
<span class="line"><span style="color:#A6ACCD;">	call	__mingw_vfprintf</span></span>
<span class="line"><span style="color:#A6ACCD;">	movl	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">eax</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	movl	</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">eax</span></span>
<span class="line"><span style="color:#A6ACCD;">	addq	$</span><span style="color:#F78C6C;">56</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rsp</span></span>
<span class="line"><span style="color:#A6ACCD;">	popq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbx</span></span>
<span class="line"><span style="color:#A6ACCD;">	popq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	ret</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_endproc</span></span>
<span class="line"><span style="color:#A6ACCD;">	.def	__main</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.scl	</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.type	</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.endef</span></span>
<span class="line"><span style="color:#A6ACCD;">	.section .rdata</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dr</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">.LC0:</span></span>
<span class="line"><span style="color:#A6ACCD;">	.ascii </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello world!</span><span style="color:#A6ACCD;">\\0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	.text</span></span>
<span class="line"><span style="color:#A6ACCD;">	.globl	main</span></span>
<span class="line"><span style="color:#A6ACCD;">	.def	main</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.scl	</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.type	</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.endef</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_proc	main</span></span>
<span class="line"><span style="color:#A6ACCD;">main:</span></span>
<span class="line"><span style="color:#A6ACCD;">	pushq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_pushreg	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rsp</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_setframe	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">	subq	$</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rsp</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_stackalloc	</span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_endprologue</span></span>
<span class="line"><span style="color:#A6ACCD;">	call	__main</span></span>
<span class="line"><span style="color:#A6ACCD;">	leaq	.</span><span style="color:#82AAFF;">LC0</span><span style="color:#89DDFF;">(%</span><span style="color:#A6ACCD;">rip</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rax</span></span>
<span class="line"><span style="color:#A6ACCD;">	movq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rax</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rcx</span></span>
<span class="line"><span style="color:#A6ACCD;">	call	printf</span></span>
<span class="line"><span style="color:#A6ACCD;">	movl	$</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">eax</span></span>
<span class="line"><span style="color:#A6ACCD;">	addq	$</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rsp</span></span>
<span class="line"><span style="color:#A6ACCD;">	popq	</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">rbp</span></span>
<span class="line"><span style="color:#A6ACCD;">	ret</span></span>
<span class="line"><span style="color:#A6ACCD;">	.seh_endproc</span></span>
<span class="line"><span style="color:#A6ACCD;">	.ident	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GCC: (GNU) 11.2.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	.def	__mingw_vfprintf</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.scl	</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.type	</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	.endef</span></span></code></pre></div><p>有了汇编指令，我们就可以将汇编代码编译成二进制文件</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">c main.s </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main.o</span></span></code></pre></div><p>但是生成的 main.o 文件无法直接运行它，我们还需要将他变成变成 windows 可以执行的程序</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc main.o </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main</span></span></code></pre></div><p>这里直接将刚生成的目标文件会编译成可执行文件 main.exe，此时可以正常运行了</p><p>整个编译过程如下：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">PS D:\\develop\\learn\\cpt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">E main.c </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main.i</span></span>
<span class="line"><span style="color:#A6ACCD;">PS D:\\develop\\learn\\cpt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">S main.i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main.s</span></span>
<span class="line"><span style="color:#A6ACCD;">PS D:\\develop\\learn\\cpt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">c main.s </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main.o</span></span>
<span class="line"><span style="color:#A6ACCD;">PS D:\\develop\\learn\\cpt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> gcc main.o </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main</span></span>
<span class="line"><span style="color:#A6ACCD;">PS D:\\develop\\learn\\cpt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> .\\main.exe</span></span>
<span class="line"><span style="color:#A6ACCD;">Hello world</span><span style="color:#89DDFF;">!</span></span></code></pre></div><p>以上步骤就是手动编译一个 C 语言程序。当然如果我们要更快速一点地完成编译，可以直接将源文件进行编译：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc main.c </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main</span></span></code></pre></div><p>以上是单个文件的编译，如果是多个文件呢？编译时需要带上多个文件的路径，如下：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gcc test.c main.c </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o main</span></span></code></pre></div><p>一两个文件还可以这么编译，文件量大了之后，我们就需要借助更好的编译构建工具。</p><h2 id="make-和-cmake-构建" tabindex="-1">Make 和 CMake 构建 <a class="header-anchor" href="#make-和-cmake-构建" aria-label="Permalink to &quot;Make 和 CMake 构建&quot;" loading="lazy">​</a></h2><p>为了方便构建和管理工程，通常采用Make或CMake工具进行编译构建。Make是一个非常流行的构建工具，而CMake则是一个更加高级的构建系统生成工具。</p><h3 id="make" tabindex="-1">Make <a class="header-anchor" href="#make" aria-label="Permalink to &quot;Make&quot;" loading="lazy">​</a></h3><p>Make 是一种自动化构建工具，通过读取 Makefile 文件中的依赖关系，自动地执行编译、链接等操作，从而生成可执行程序。Makefile 文件中定义了目标、依赖和指令等内容。其中目标是指要构建的可执行文件或库文件，依赖是指目标文件所依赖的源文件或其他目标文件，指令是指运行编译和链接命令的具体步骤。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">hello: main.o func.o</span></span>
<span class="line"><span style="color:#A6ACCD;">    gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o hello main.o func.o</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">main.o: main.c</span></span>
<span class="line"><span style="color:#A6ACCD;">    gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">c main.c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func.o: func.c</span></span>
<span class="line"><span style="color:#A6ACCD;">    gcc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">c func.c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">clean:</span></span>
<span class="line"><span style="color:#A6ACCD;">    rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">rf </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.o hello</span></span></code></pre></div><p>上述 Makefile 中定义了三个目标：hello、main.o 和 func.o。其中 hello 是最终要生成的可执行程序，在该目标下有一个依赖列表：main.o 和 func.o。表示在生成 hello 之前需要先编译 main.c 和 func.c 两个源代码文件，并将它们分别链接成相应的 .o 目标文件。</p><p>当运行 make 命令时，默认会以当前目录下名为 Makefile 或者 makefile 的文件为 Makefile 文件。如果 Makefile 文件名不是这两者之一，也可以通过 -f 参数指定文件路径。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">上述命令将会根据 Makefile 文件自动生成目标可执行程序 hello。如果想要重新编译，可以使用 clean 目标清除所有生成的 .o 和可执行程序：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`c</span></span>
<span class="line"><span style="color:#A6ACCD;">make clean</span></span></code></pre></div><h3 id="cmake" tabindex="-1">CMake <a class="header-anchor" href="#cmake" aria-label="Permalink to &quot;CMake&quot;" loading="lazy">​</a></h3><p>CMake 是一个跨平台的构建工具，类似于 Make 工具。它不直接构建代码，而是生成相应的构建脚本（如 Unix 下的 Makefile 或 Windows 下的 Visual Studio 项目），再由这些构建脚本来完成实际的编译过程。</p><p>CMake 配置文件通常被称为 CMakeLists.txt，与 Makefile 的语法有所不同。以下是一份简单的 CMakeLists.txt 文件示例：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cmake</span></span>
<span class="line"><span style="color:#82AAFF;">cmake_minimum_required</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">VERSION </span><span style="color:#F78C6C;">3.10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">project</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">hello</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">add_executable</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">hello main.c func.c</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>在该配置文件中，使用 project() 函数定义了项目名称，并通过 add_executable() 函数添加源代码文件来创建可执行程序。</p><p>与 Make 不同，CMake 支持多种编译系统和多种操作系统，并且可以使用图形化界面进行配置和管理。例如，在 Linux 系统下生成 Unix 的 Makefile 脚本可以使用以下命令：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cmake .</span></span></code></pre></div><p>如果要生成 Visual Studio 项目，则需要在 Windows 系统下运行以下命令：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cmake </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">G </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Visual Studio 15 2017</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> .</span></span></code></pre></div><p>在生成 Makefile 或 Visual Studio 项目文件后，即可使用相应的编译工具来进行实际的编译过程。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;" loading="lazy">​</a></h2><p>Make 和 CMake 都是常用的构建工具，它们能够自动化地编译程序，避免了手动重新编译的烦恼。两者语法有所不同，但都支持生成多种平台和操作系统下的构建脚本，并且可以通过命令行或图形化界面进行管理和配置。CMake 相比于 Make 具有更好的跨平台性和可移植性，在复杂项目中使用更加便捷。</p><hr>`,50);function r(C,D,y,A,F,i){const s=n("GoogleAdsense");return l(),p("div",null,[c,o(s)])}const h=a(t,[["render",r]]);export{m as __pageData,h as default};
