import{_ as i,D as a,c as n,I as e,a4 as l,o as t}from"./chunks/framework.D8LZUQkA.js";const u=JSON.parse('{"title":"流程控制语句","description":"分支结构：if、switch; 循环语句：for、while、do...while.","frontmatter":{"title":"流程控制语句","head":[["meta",{"property":"og:title","content":"流程控制语句"}],["meta",{"name":"description","content":"分支结构：if、switch; 循环语句：for、while、do...while."}],["meta",{"name":"keywords","content":"if, switch, for, while, do...while."}],["meta",{"property":"og:description","content":"分支结构：if、switch; 循环语句：for、while、do...while."}]]},"headers":[],"relativePath":"c/流程控制语句.md","filePath":"c/流程控制语句.md"}'),h={name:"c/流程控制语句.md"},p=l(`<h1 id="流程控制语句" tabindex="-1">流程控制语句 <a class="header-anchor" href="#流程控制语句" aria-label="Permalink to &quot;流程控制语句&quot;">​</a></h1><p>C语言提供了三种基本的流程控制语句：顺序结构、分支结构和循环结构。顺序结构是指程序按照代码的书写顺序依次执行，分支结构和循环结构可以使程序根据不同的条件进行选择或者重复执行某段代码。</p><h2 id="_1-分支结构" tabindex="-1">1 分支结构 <a class="header-anchor" href="#_1-分支结构" aria-label="Permalink to &quot;1 分支结构&quot;">​</a></h2><p>主要有if语句、switch语句两种形式。</p><h3 id="_1-1-if-语句" tabindex="-1">1.1 if 语句 <a class="header-anchor" href="#_1-1-if-语句" aria-label="Permalink to &quot;1.1 if 语句&quot;">​</a></h3><p>if 语句用于判断一个条件是否成立，如果成立就执行相应的代码块。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(条件) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果条件成立，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在if语句中，条件可以是任何表达式，只要这个表达式的值为真（非0），就会执行后面的代码块。如果条件为假（0），则跳过整个if块。</p><p>除了单独使用之外，还可以在if后面加上else关键字来表示如果条件不成立时要执行的代码块：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(条件) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果条件成立，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果条件不成立，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>当然还有一些连续判断，需要用到 else if</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(条件1) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果条件1成立，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(条件2) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如果条件2成立，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 上面2个都不成立，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_1-2-switch-语句" tabindex="-1">1.2 switch 语句 <a class="header-anchor" href="#_1-2-switch-语句" aria-label="Permalink to &quot;1.2 switch 语句&quot;">​</a></h3><p>switch 语句也用于判断一个表达式是否等于某个值，但是它与 if 语句不同之处在于可以根据不同的值来选择多个分支中的一个进行执行。switch 通常用于处理多路分支情况。在 switch 语句中，先判断表达式是否等于 case 后面的值，如果相等就会执行对应的代码块。如果没有任何一个 case 匹配成功，则会执行 default 后面的代码块（如果有）。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(表达式) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 值1:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 如果表达式等于值1，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 值2:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 如果表达式等于值2，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 如果表达式不等于任何一个值，则执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2-循环结构" tabindex="-1">2 循环结构 <a class="header-anchor" href="#_2-循环结构" aria-label="Permalink to &quot;2 循环结构&quot;">​</a></h2><p>循环结构用于重复执行某段代码，主要有 for、while 和 do-while 三种形式。</p><h3 id="_2-1-for-循环" tabindex="-1">2.1 for 循环 <a class="header-anchor" href="#_2-1-for-循环" aria-label="Permalink to &quot;2.1 for 循环&quot;">​</a></h3><p>for 循环是 C 语言中最常用的循环语句之一，它可以让程序按照指定条件来重复执行某段代码。在 for 循环中，初始化用来设置计数器或者其他需要被初始化的变量；条件用来控制循环何时结束；步进用来更新计数器或者其他需要被更新的变量。每次循环开始前都会先进行一次初始化操作，在每次循环结束后都会进行一次步进操作，并检查条件是否满足以决定是否继续循环。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(初始化; 条件; 步进) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在条件为真时，重复执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-2-while-循环" tabindex="-1">2.2 while 循环 <a class="header-anchor" href="#_2-2-while-循环" aria-label="Permalink to &quot;2.2 while 循环&quot;">​</a></h3><p>while 循环用于在满足指定条件的情况下重复执行某段代码。在while循环中，只要条件为真就会一直重复执行循环体中的代码。如果条件一开始就为假，则循环体内的代码不会被执行。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(条件) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在条件为真时，重复执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-3-do-while-循环" tabindex="-1">2.3 do-while 循环 <a class="header-anchor" href="#_2-3-do-while-循环" aria-label="Permalink to &quot;2.3 do-while 循环&quot;">​</a></h3><p>do-while 循环与 while 循环非常相似，但是在do-while循环中，无论条件是否成立，都会至少执行一次循环体中的代码。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 先执行一遍这里的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(条件);</span></span></code></pre></div><hr>`,27);function k(d,c,r,o,E,g){const s=a("GoogleAdsense");return t(),n("div",null,[p,e(s)])}const b=i(h,[["render",k]]);export{u as __pageData,b as default};
