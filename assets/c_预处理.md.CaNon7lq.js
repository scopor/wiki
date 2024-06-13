import{_ as s,D as a,c as n,I as e,a4 as t,o as l}from"./chunks/framework.D8LZUQkA.js";const u=JSON.parse('{"title":"预处理","description":"预处理是在程序真正开始编译之前进行的一些操作。通过使用预处理指令，我们可以定义宏、包含头文件、进行条件编译等等。这样做不仅能够减少代码量，还能提高程序的灵活性和可读性。","frontmatter":{"title":"预处理","head":[["meta",{"property":"og:title","content":"预处理"}],["meta",{"name":"description","content":"预处理是在程序真正开始编译之前进行的一些操作。通过使用预处理指令，我们可以定义宏、包含头文件、进行条件编译等等。这样做不仅能够减少代码量，还能提高程序的灵活性和可读性。"}],["meta",{"name":"keywords","content":"预处理指令，#define，#include，条件编译，系统库"}],["meta",{"property":"og:description","content":"预处理是在程序真正开始编译之前进行的一些操作。通过使用预处理指令，我们可以定义宏、包含头文件、进行条件编译等等。这样做不仅能够减少代码量，还能提高程序的灵活性和可读性。"}]]},"headers":[],"relativePath":"c/预处理.md","filePath":"c/预处理.md"}'),h={name:"c/预处理.md"},p=t(`<h1 id="预处理" tabindex="-1">预处理 <a class="header-anchor" href="#预处理" aria-label="Permalink to &quot;预处理&quot;">​</a></h1><p>在 C 语言中，预处理器是一个能够在编译之前对代码进行一定程度上的替换和操作的程序。它可以根据我们提供的指令来修改源代码，添加或删除特定的代码块等等。这样做不仅可以减少重复性工作量，还可以使代码更加灵活。</p><h2 id="预处理指令" tabindex="-1">预处理指令 <a class="header-anchor" href="#预处理指令" aria-label="Permalink to &quot;预处理指令&quot;">​</a></h2><p>预处理器指令以 &quot;#&quot; 开头，并且必须出现在任何函数体、循环体、条件结构或其他非预处理器指令声明之外。下面列出了常用的预处理器指令：</p><ul><li>#define：定义一个宏；</li><li>#include：包含一个头文件；</li><li>#ifdef、#ifndef、#else 和 #endif：条件编译；</li><li>#error：输出错误信息并停止编译过程；</li><li>#pragma：向编译器传递特殊的命令和信息。</li></ul><h2 id="define" tabindex="-1">#define <a class="header-anchor" href="#define" aria-label="Permalink to &quot;#define&quot;">​</a></h2><p>使用 #define 关键字，我们可以定义一个宏，从而将某个标记替换为另一个值或表达式。例如：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PI</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14159</span></span></code></pre></div><p>这里我们定义了一个名为 PI 的宏，并将其值设为 3.14159。在程序中使用时，直接写 PI 即可代表 3.14159。</p><p>同时，也可以定义带参数的宏：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CUBE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ((x)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x))</span></span></code></pre></div><p>这里我们定义了一个名为 CUBE 的宏，它接受一个参数x，并将其立方后返回。在程序中使用时，写 CUBE(2) 即可得到 8。</p><h2 id="include" tabindex="-1">#include <a class="header-anchor" href="#include" aria-label="Permalink to &quot;#include&quot;">​</a></h2><p>使用 #include 指令可以将头文件包含到当前源代码文件中。例如：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span></code></pre></div><p>这里我们将标准输入输出库的头文件 stdio.h 包含进来，以便在程序中使用 printf 和 scanf 等函数。</p><p>同时，也可以自己编写头文件并使用。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file: myheader.h</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MESSAGE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, world!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file: main.c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;myheader.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, MESSAGE);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样，在 main.c 中就可以使用 myheader.h 中定义的宏 MESSAGE 了。</p><h2 id="条件编译" tabindex="-1">条件编译 <a class="header-anchor" href="#条件编译" aria-label="Permalink to &quot;条件编译&quot;">​</a></h2><p>条件编译指令能够根据一些条件来决定是否编译某段代码。常用的条件编译指令有 #ifdef、#ifndef、#else 和 #endif、#if 和 #elif。例如：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VERSION</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VERSION</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, VERSION);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#else</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;No version information available.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>如果 VERSION 已经被定义，则打印 &quot;This is version x.&quot;; 否则打印 &quot;No version information available.&quot;。</p><h2 id="系统库" tabindex="-1">系统库 <a class="header-anchor" href="#系统库" aria-label="Permalink to &quot;系统库&quot;">​</a></h2><p>系统库是指 C 语言标准库和其他一些操作系统提供的库函数，它们提供了一系列常用的函数和数据类型，方便我们进行编程。</p><p>C语言标准库包括以下头文件：</p><ul><li>&lt;stdio.h&gt;：提供输入输出函数，如 printf、scanf 等；</li><li>&lt;stdlib.h&gt;：提供动态内存分配函数，如 malloc、free 等；</li><li>&lt;string.h&gt;：提供字符串处理函数，如 strcpy、strcat 等；</li><li>&lt;math.h&gt;：提供数学函数，如 sin、cos 等；</li><li>&lt;time.h&gt;：提供时间函数，如 time、localtime 等；</li><li>&lt;ctype.h&gt;：提供字符处理函数，如 isalpha、isdigit 等。</li></ul><p>另外，不同的操作系统也会提供自己的系统库函数，比如 Windows 系统提供的库函数有 Windows API 函数，Linux 系统提供的库函数有 GNU 库函数等。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>预处理是在程序真正开始编译之前进行的一些操作。通过使用预处理指令，我们可以定义宏、包含头文件、进行条件编译等等。这样做不仅能够减少代码量，还能提高程序的灵活性和可读性。</p><hr>`,31);function k(d,r,o,c,g,F){const i=a("GoogleAdsense");return l(),n("div",null,[p,e(i)])}const y=s(h,[["render",k]]);export{u as __pageData,y as default};
