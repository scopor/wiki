import{_ as d,D as s,c as i,I as a,a4 as r,o as n}from"./chunks/framework.D8LZUQkA.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vientiane/信号量.md","filePath":"vientiane/信号量.md"}'),l={name:"vientiane/信号量.md"},e=r(`<h2 id="_1-信号的概念" tabindex="-1">1. 信号的概念： <a class="header-anchor" href="#_1-信号的概念" aria-label="Permalink to &quot;1. 信号的概念：&quot;">​</a></h2><p>信号是用于进程间通信的一种机制，它是一种软件中断，用来通知进程发生了某个事件。当某个进程需要与另一个进程进行交互或者处理某些特殊情况时，可以发送一个信号给目标进程。</p><p>常见的信号类型包括：</p><ul><li>SIGHUP（挂起信号）</li><li>SIGINT（中断信号）</li><li>SIGQUIT（退出信号）</li><li>SIGILL（非法指令信号）</li><li>SIGABRT（异常终止信号）</li><li>SIGFPE（浮点异常信号）</li><li>SIGKILL（强制退出信号）</li><li>SIGSEGV（段错误信号）</li><li>SIGPIPE（管道破裂信号）</li><li>SIGTERM（终止信号）</li></ul><p>还有其他信号，共计约 64 种，每个信号都有一个唯一的编号和名称。</p><h2 id="_2-64种信号量及其详细解释" tabindex="-1">2. 64种信号量及其详细解释： <a class="header-anchor" href="#_2-64种信号量及其详细解释" aria-label="Permalink to &quot;2. 64种信号量及其详细解释：&quot;">​</a></h2><p>下面是64种信号量及其详细解释的Markdown表格：</p><table tabindex="0"><thead><tr><th>信号编号</th><th>信号名称</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>SIGHUP</td><td>挂起信号。通常由终端断开或退出导致。</td></tr><tr><td>2</td><td>SIGINT</td><td>中断信号。通常由用户在终端上按下Ctrl+C触发。</td></tr><tr><td>3</td><td>SIGQUIT</td><td>退出信号。通常由用户在终端上按下Ctrl+\\触发。</td></tr><tr><td>4</td><td>SIGILL</td><td>非法指令信号。当进程执行了一个非法指令时，操作系统会发送该信号给进程。</td></tr><tr><td>5</td><td>SIGTRAP</td><td>跟踪陷阱信号。当进程收到调试命令时，操作系统会发送该信号给进程。</td></tr><tr><td>6</td><td>SIGABRT</td><td>异常终止信号。由调用abort()函数产生，表示进程非正常终止。</td></tr><tr><td>7</td><td>SIGBUS</td><td>总线错误信号。当进程执行了一个内存访问错误时，操作系统会发送该信号给进程。</td></tr><tr><td>8</td><td>SIGFPE</td><td>浮点异常信号。当进程执行一个浮点运算错误时，会收到该信号。</td></tr><tr><td>9</td><td>SIGKILL</td><td>强制退出信号。无法被忽略、捕获或阻塞，用于立即终止进程。</td></tr><tr><td>10</td><td>SIGUSR1</td><td>用户自定义信号1。用于在进程间自定义通信。</td></tr><tr><td>11</td><td>SIGSEGV</td><td>段错误信号。当进程访问了一个无效的内存地址或进行了无效的内存操作时，会收到该信号。</td></tr><tr><td>12</td><td>SIGUSR2</td><td>用户自定义信号2。用于在进程间自定义通信。</td></tr><tr><td>13</td><td>SIGPIPE</td><td>管道破裂信号。当进程向一个已关闭的管道进行写操作时，会收到该信号。</td></tr><tr><td>14</td><td>SIGALRM</td><td>闹钟信号。通常由调用alarm()函数设置的定时器超时触发。</td></tr><tr><td>15</td><td>SIGTERM</td><td>终止信号。通常用于请求进程正常终止。</td></tr><tr><td>16</td><td>SIGSTKFLT</td><td>协处理器堆栈错误信号。当协处理器执行了一个堆栈错误指令或检测到堆栈错误时，操作系统会发送该信号给进程。</td></tr><tr><td>17</td><td>SIGCHLD</td><td>子进程状态改变信号。当一个进程的子进程停止或退出时，父进程会收到该信号。</td></tr><tr><td>18</td><td>SIGCONT</td><td>继续执行信号。用于恢复之前被暂停的进程的执行。</td></tr><tr><td>19</td><td>SIGSTOP</td><td>停止执行信号。无法被忽略、捕获或阻塞，用于暂停进程的执行。</td></tr><tr><td>20</td><td>SIGTSTP</td><td>终端停止信号。通常由用户在终端上按下Ctrl+Z触发，用于暂停前台进程的执行。</td></tr><tr><td>21</td><td>SIGTTIN</td><td>后台进程读写终端的信号。当一个后台进程尝试读取终端时，会收到该信号。</td></tr><tr><td>22</td><td>SIGTTOU</td><td>后台进程读写终端的信号。当一个后台进程尝试写入终端时，会收到该信号。</td></tr><tr><td>23</td><td>SIGURG</td><td>紧急数据信号。表示接收到了带外数据。</td></tr><tr><td>24</td><td>SIGXCPU</td><td>CPU时间限制信号。当进程超过了预设的CPU时间限制时，会收到该信号。</td></tr><tr><td>25</td><td>SIGXFSZ</td><td>文件大小限制信号。当进程超过了预设的文件大小限制时，会收到该信号。</td></tr><tr><td>26</td><td>SIGVTALRM</td><td>虚拟定时器信号。通常由调用setitimer()函数设置的虚拟定时器超时触发。</td></tr><tr><td>27</td><td>SIGPROF</td><td>专用定时器信号。通常由调用setitimer()函数设置的专用定时器超时触发。</td></tr><tr><td>28</td><td>SIGWINCH</td><td>窗口大小改变信号。当终端窗口大小发生改变时，会收到该信号。</td></tr><tr><td>29</td><td>SIGIO</td><td>异步I/O信号。表示I/O操作可以进行。</td></tr><tr><td>30</td><td>SIGPWR</td><td>电源故障信号。当检测到系统电源故障时，会发送该信号。</td></tr><tr><td>31</td><td>SIGSYS</td><td>非法系统调用信号。当进程执行了一个非法的系统调用时，会收到该信号。</td></tr><tr><td>32</td><td>SIGBABY</td><td>进程变更信号。当一个进程成为另一个进程的子进程时，会收到该信号。</td></tr><tr><td>33</td><td>SIGEMT</td><td>EMT指令信号。当进程执行了一个EMT指令时，会收到该信号。</td></tr><tr><td>34</td><td>SIGSTKFLT</td><td>协处理器堆栈错误信号。当协处理器执行了一个堆栈错误指令或检测到堆栈错误时，操作系统会发送该信号给进程。</td></tr><tr><td>35</td><td>SIGIO</td><td>异步I/O信号。表示I/O操作可以进行。</td></tr><tr><td>36</td><td>SIGCLD</td><td>旧式的子进程状态改变信号。与SIGCHLD相同。</td></tr><tr><td>37</td><td>SIGPOLL</td><td>Pollable事件信号。与SIGIO相同。</td></tr><tr><td>38</td><td>SIGSTOP</td><td>停止执行信号。无法被忽略、捕获或阻塞，用于暂停进程的执行。</td></tr><tr><td>39</td><td>SIGTSTP</td><td>终端停止信号。通常由用户在终端上按下Ctrl+Z触发，用于暂停前台进程的执行。</td></tr><tr><td>40</td><td>SIGCONT</td><td>继续执行信号。用于恢复之前被暂停的进程的执行。</td></tr><tr><td>41</td><td>SIGCHLD</td><td>子进程状态改变信号。当一个进程的子进程停止或退出时，父进程会收到该信号。</td></tr><tr><td>42</td><td>SIGTTIN</td><td>后台进程读写终端的信号。当一个后台进程尝试读取终端时，会收到该信号。</td></tr><tr><td>43</td><td>SIGTTOU</td><td>后台进程读写终端的信号。当一个后台进程尝试写入终端时，会收到该信号。</td></tr><tr><td>44</td><td>SIGIO</td><td>异步I/O信号。表示I/O操作可以进行。</td></tr><tr><td>45</td><td>SIGXCPU</td><td>CPU时间限制信号。当进程超过了预设的CPU时间限制时，会收到该信号。</td></tr><tr><td>46</td><td>SIGXFSZ</td><td>文件大小限制信号。当进程超过了预设的文件大小限制时，会收到该信号。</td></tr><tr><td>47</td><td>SIGVTALRM</td><td>虚拟定时器信号。通常由调用setitimer()函数设置的虚拟定时器超时触发。</td></tr><tr><td>48</td><td>SIGPROF</td><td>专用定时器信号。通常由调用setitimer()函数设置的专用定时器超时触发。</td></tr><tr><td>49</td><td>SIGWINCH</td><td>窗口大小改变信号。当终端窗口大小发生改变时，会收到该信号。</td></tr><tr><td>50</td><td>SIGINFO</td><td>信息请求信号。Symbolic常为SIGPWR，与SIGPWR相同。</td></tr><tr><td>51</td><td>SIGUSR1</td><td>用户自定义信号1。用于在进程间自定义通信。</td></tr><tr><td>52</td><td>SIGUSR2</td><td>用户自定义信号2。用于在进程间自定义通信。</td></tr><tr><td>53</td><td>SIGTHR</td><td>Thread信号。用于线程的中断和终止。</td></tr><tr><td>54-59</td><td>保留</td><td></td></tr><tr><td>60</td><td>SIGLWP</td><td>Light-weight process信号。用于LWP线程的中断和终止。</td></tr><tr><td>61-63</td><td>保留</td><td></td></tr></tbody></table><h2 id="_3-信号的产生" tabindex="-1">3. 信号的产生： <a class="header-anchor" href="#_3-信号的产生" aria-label="Permalink to &quot;3. 信号的产生：&quot;">​</a></h2><p>信号可以由多种事件和操作产生。常见的方式包括：</p><ul><li>用户通过按键组合，如 Ctrl+C 发送 SIGINT 信号给前台进程。</li><li>用户通过终端按下 <code>Ctrl+\\</code> 发送 SIGQUIT 信号给前台进程。</li><li>操作系统将某个特定的信号发送给进程，例如 SIGHUP 表示终端断开连接，SIGALRM 表示闹钟定时器到期等。</li></ul><h2 id="_4-信号的注册和注销" tabindex="-1">4. 信号的注册和注销： <a class="header-anchor" href="#_4-信号的注册和注销" aria-label="Permalink to &quot;4. 信号的注册和注销：&quot;">​</a></h2><p>进程可以使用 signal 函数来注册信号处理程序，用于捕获并处理特定信号。示例代码如下所示：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;signal.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sig_handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> signum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 处理特定信号的逻辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Received signal: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, signum);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 注册信号处理程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    signal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SIGINT, sig_handler);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 执行其他操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 注销信号处理程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    signal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SIGINT, SIG_DFL);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上述示例中，通过调用 signal 函数来注册 SIGINT 信号的处理程序 sig_handler。当收到 SIGINT 信号时，会执行 sig_handler 函数中定义的逻辑。如果不再需要处理该信号，可以使用 signal 函数将处理程序设置为默认行为（SIG_DFL）。</p><h2 id="_5-信号的处理" tabindex="-1">5. 信号的处理： <a class="header-anchor" href="#_5-信号的处理" aria-label="Permalink to &quot;5. 信号的处理：&quot;">​</a></h2><p>进程收到一个信号时，可以按照以下方式进行处理：</p><ul><li>忽略信号：使用 signal 函数将信号处理程序设置为 SIG_IGN，表示忽略该信号。</li><li>捕获并处理信号：使用 signal 函数将信号处理程序设置为自定义的信号处理函数，用于捕获并处理特定信号。</li><li>执行默认行为：使用 signal 函数将信号处理程序设置为 SIG_DFL，表示执行信号的默认行为。</li></ul><p>需要注意的是，有些信号无法被忽略或捕获，如 SIGKILL 和 SIGSTOP。这些信号被用于强制退出进程和暂停进程的执行。</p><hr>`,20);function h(p,I,k,S,G,o){const t=s("GoogleAdsense");return n(),i("div",null,[e,a(t)])}const E=d(l,[["render",h]]);export{g as __pageData,E as default};
