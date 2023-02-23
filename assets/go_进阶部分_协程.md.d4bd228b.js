import{_ as n,c as a,d as o,e as l,o as e,r as p}from"./app.9dbb27da.js";const g=JSON.parse('{"title":"Go 语言笔记：协程","description":"Go协程,协程是用户态线程，创建和切换都在用户代码中完成，无需进入操作系统内核，开销远远小于系统线程的创建很切换","frontmatter":{"title":"Go 语言笔记：协程","head":[["meta",{"property":"og:title","content":"Go 语言笔记:协程"}],["meta",{"name":"description","content":"Go协程,协程是用户态线程，创建和切换都在用户代码中完成，无需进入操作系统内核，开销远远小于系统线程的创建很切换"}],["meta",{"name":"keywords","content":"Go,协程,协程的状态"}],["meta",{"property":"og:description","content":"Go协程,协程是用户态线程，创建和切换都在用户代码中完成，无需进入操作系统内核，开销远远小于系统线程的创建很切换"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E8%BF%9B%E9%98%B6%E9%83%A8%E5%88%86/%E5%8D%8F%E7%A8%8B"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E8%BF%9B%E9%98%B6%E9%83%A8%E5%88%86/%E5%8D%8F%E7%A8%8B"}]]},"headers":[{"level":2,"title":"Go 协程","slug":"go-协程","link":"#go-协程","children":[]},{"level":2,"title":"协程的状态","slug":"协程的状态","link":"#协程的状态","children":[]},{"level":2,"title":"协程的使用","slug":"协程的使用","link":"#协程的使用","children":[]}],"relativePath":"go/进阶部分/协程.md"}'),t={name:"go/进阶部分/协程.md"},r=l(`<h1 id="go-语言笔记-协程" tabindex="-1">Go 语言笔记：协程 <a class="header-anchor" href="#go-语言笔记-协程" aria-hidden="true" loading="lazy">#</a></h1><h2 id="go-协程" tabindex="-1">Go 协程 <a class="header-anchor" href="#go-协程" aria-hidden="true" loading="lazy">#</a></h2><p>协程是 <strong>Go</strong> 语言实现的用户态线程，和线程的区别在于</p><ul><li>线程创建和切换需要进入操作系统内核，进入内核必然会导致性能开销较大；协程是用户态线程，创建和切换都在用户代码中完成，无需进入操作系统内核，开销远远小于系统线程的创建很切换</li><li>线程在操作系统内核中创建时默认会分配一个较大的栈内存，绝大多数情况下，系统线程用不了这么多的内存，且栈内存空间分配后不能再有变化，可能会导致特殊场景下的栈内存溢出；协程默认栈大小只有2K，不够用时，协程的栈会自动扩大，也可以在过大的时候自动收缩，不会造成内存空间的浪费</li></ul><p>协程是通过协作而不是抢占来进行切换，一个进程内部可以运行多个线程，每个线程又可以运行多个协程。线程负责对协程进行调度，同一个线程内部最多只有一个协程正在运行。</p><h2 id="协程的状态" tabindex="-1">协程的状态 <a class="header-anchor" href="#协程的状态" aria-hidden="true" loading="lazy">#</a></h2><p>协程有以下三个态：就绪态、运行态、休眠态。</p><ul><li>就绪态：具备运行能力，还没有得到运行机会</li><li>运行态：正在运行</li><li>休眠态：不具备运行能力，等待某些条件的触发</li></ul><h2 id="协程的使用" tabindex="-1">协程的使用 <a class="header-anchor" href="#协程的使用" aria-hidden="true" loading="lazy">#</a></h2><p><strong>Go</strong> 语言创建协程很简单，只需要使用 <strong>go</strong> 关键字，就可以让一个方法协程化。下面示例中的 <strong>main</strong> 函数运行在一个特殊的协程上，称之为主协程，<strong>Add</strong> 方法使用 <strong>go</strong> 关键字启动了子协程，子协程和主协程并发执行，而 <strong>for</strong> 循环中的子协程也是并发执行。在调用 <strong>go</strong> 协程后往往不会等待任何返回值，直接忽略进而执行代码的下一行。如果主协程终止了，程序运行也就终止了，其他协程也不会继续运行，因此上述示例中我们在主协程中添加了休眠，可以去掉该行或者调整休眠参数来观察运行结果。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    z </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">z</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">:=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 此处为了展示打印效果，让主协程休眠 10 秒，业务代码不要这么操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Microsecond</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>如果我们想要等待所有的 <strong>go</strong> 协程执行完之后再退出，我们如何知道协程是否执行完毕退出了呢? 这就要用到 <strong>Go</strong> 语言的通信模型了：消息机制(channel)</p><hr>`,13);function c(i,D,y,F,A,C){const s=p("GoogleAdsense");return e(),a("div",null,[r,o(s)])}const h=n(t,[["render",c]]);export{g as __pageData,h as default};
