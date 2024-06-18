import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DVgqcZox.js";const g=JSON.parse('{"title":"Windows CPU 高","description":"Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。","frontmatter":{"title":"Windows CPU 高","head":[["meta",{"property":"og:title","content":"Windows CPU 高"}],["meta",{"name":"description","content":"Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。"}],["meta",{"name":"keywords","content":"svchost,"}],["meta",{"property":"og:description","content":"Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/kill%20svchost"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/kill%20svchost"}]]},"headers":[],"relativePath":"vientiane/kill svchost.md","filePath":"vientiane/kill svchost.md"}'),n={name:"vientiane/kill svchost.md"},t=e(`<h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;">​</a></h2><p>Windows 系统卡顿，查看任务管理器发现进程 服务主机: Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大。</p><p>尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。</p><h2 id="查询-svchost-进程的详细信息" tabindex="-1">查询 svchost 进程的详细信息 <a class="header-anchor" href="#查询-svchost-进程的详细信息" aria-label="Permalink to &quot;查询 svchost 进程的详细信息&quot;">​</a></h2><p>该服务是由 <strong>svchost.exe</strong> 进程统一拉起执行，而系统中有多个 服务 项在执行，需要通过进程的详细信息区分目标进程。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tasklist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /svc</span></span></code></pre></div><h2 id="杀死-messagemanagerservice-对应的-svchost-进程" tabindex="-1">杀死 MessageManagerService 对应的 svchost 进程 <a class="header-anchor" href="#杀死-messagemanagerservice-对应的-svchost-进程" aria-label="Permalink to &quot;杀死 MessageManagerService 对应的 svchost 进程&quot;">​</a></h2><p>复制以下代码到 文本软件，保存为 <strong>.bat</strong> 格式文件，双击执行, 世界终于安静了。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setlocal</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SERVICE_NAME=MessageManagerService</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:loop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tasklist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /svc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;svchost.exe&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%SERVICE_NAME%&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nul</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> %errorlevel%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> equ</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    taskkill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /im</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> svchost.exe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /fi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;services eq %SERVICE_NAME%&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nul</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Manager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> been</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> killed.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /nobreak</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nul</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">goto</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loop</span></span></code></pre></div>`,9),h=[t];function l(p,k,r,o,F,d){return a(),i("div",null,h)}const C=s(n,[["render",l]]);export{g as __pageData,C as default};
