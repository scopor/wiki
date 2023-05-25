import{_ as s,o as a,c as n,R as o}from"./chunks/framework.8e8e72cd.js";const h=JSON.parse('{"title":"Windows CPU 高","description":"Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。","frontmatter":{"title":"Windows CPU 高","head":[["meta",{"property":"og:title","content":"Windows CPU 高"}],["meta",{"name":"description","content":"Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。"}],["meta",{"name":"keywords","content":"svchost,"}],["meta",{"property":"og:description","content":"Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/kill%20svchost"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/kill%20svchost"}]]},"headers":[],"relativePath":"vientiane/kill svchost.md","filePath":"vientiane/kill svchost.md"}'),l={name:"vientiane/kill svchost.md"},e=o(`<h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;" loading="lazy">​</a></h2><p>Windows 系统卡顿，查看任务管理器发现进程 服务主机: Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大。</p><p>尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。</p><h2 id="查询-svchost-进程的详细信息" tabindex="-1">查询 svchost 进程的详细信息 <a class="header-anchor" href="#查询-svchost-进程的详细信息" aria-label="Permalink to &quot;查询 svchost 进程的详细信息&quot;" loading="lazy">​</a></h2><p>该服务是由 <strong>svchost.exe</strong> 进程统一拉起执行，而系统中有多个 服务 项在执行，需要通过进程的详细信息区分目标进程。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tasklist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/svc</span></span></code></pre></div><h2 id="杀死-messagemanagerservice-对应的-svchost-进程" tabindex="-1">杀死 MessageManagerService 对应的 svchost 进程 <a class="header-anchor" href="#杀死-messagemanagerservice-对应的-svchost-进程" aria-label="Permalink to &quot;杀死 MessageManagerService 对应的 svchost 进程&quot;" loading="lazy">​</a></h2><p>复制以下代码到 文本软件，保存为 <strong>.bat</strong> 格式文件，双击执行, 世界终于安静了。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">@echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span></span>
<span class="line"><span style="color:#FFCB6B;">setlocal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SERVICE_NAME=MessageManagerService</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">:loop</span></span>
<span class="line"><span style="color:#FFCB6B;">tasklist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/svc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/i</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">svchost.exe</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/i</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%SERVICE_NAME%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">nul</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">%errorlevel%</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">equ</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">taskkill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/im</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">svchost.exe</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/fi</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">services eq %SERVICE_NAME%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">nul</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Message</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">has</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">been</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">killed.</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/t</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/nobreak</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">nul</span></span>
<span class="line"><span style="color:#FFCB6B;">goto</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">loop</span></span></code></pre></div>`,9),p=[e];function t(c,r,C,i,y,D){return a(),n("div",null,p)}const F=s(l,[["render",t]]);export{h as __pageData,F as default};
