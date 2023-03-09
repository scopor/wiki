import{_ as n,c as a,d as l,e as o,o as p,r as e}from"./app.5814749a.js";const F=JSON.parse('{"title":"Linux crontab 命令","description":"crontab 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。","frontmatter":{"title":"Linux crontab 命令","head":[["meta",{"property":"og:title","content":"Linux crontab 命令"}],["meta",{"name":"description","content":"crontab 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。"}],["meta",{"name":"keywords","content":"scp"}],["meta",{"property":"og:description","content":"crontab 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/crontab"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/crontab"}]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"系统任务调度","slug":"系统任务调度","link":"#系统任务调度","children":[]},{"level":2,"title":"用户任务调度","slug":"用户任务调度","link":"#用户任务调度","children":[]},{"level":2,"title":"cron 表达式符号","slug":"cron-表达式符号","link":"#cron-表达式符号","children":[]},{"level":2,"title":"crond 服务","slug":"crond-服务","link":"#crond-服务","children":[]}],"relativePath":"vientiane/crontab.md"}'),t={name:"vientiane/crontab.md"},c=o(`<h1 id="crontab" tabindex="-1">crontab <a class="header-anchor" href="#crontab" aria-hidden="true" loading="lazy">#</a></h1><p><strong>crontab</strong> 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-u</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"><span style="color:#FFCB6B;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-u</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-l </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p><strong>file</strong> 指的是待执行任务的 <strong>crontab</strong> 文件。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-e:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">编辑该用户的任务表格,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">如果表格不存在,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">则创建一个新的</span></span>
<span class="line"><span style="color:#FFCB6B;">-l:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">列出该用户的所有任务</span></span>
<span class="line"><span style="color:#FFCB6B;">-r:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除该用户的任务表格</span></span>
<span class="line"><span style="color:#FFCB6B;">-u&lt;用户名称&gt;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定要编辑,列出,删除的用户的</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">表格</span></span>
<span class="line"></span></code></pre></div><h2 id="系统任务调度" tabindex="-1">系统任务调度 <a class="header-anchor" href="#系统任务调度" aria-hidden="true" loading="lazy">#</a></h2><p>系统任务调度的配置文件：<strong>/etc/crontab</strong>, 文件内容解读如下</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 指定要使用的 shell</span></span>
<span class="line"><span style="color:#A6ACCD;">SHELL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定系统执行命令的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/sbin:/bin:/usr/sbin:/usr/bin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定将执行信息发送电子邮件给用户，值为空表示不发送</span></span>
<span class="line"><span style="color:#A6ACCD;">MAILTO</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cron 表达式说明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># .---------------- 分钟: 0 - 59</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># |  .------------- 小时: 0 - 23</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># |  |  .---------- 天数: 1 - 31</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># |  |  |  .------- 月份: 1 - 12 或者 jan,feb,mar,apr ...</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># |  |  |  |  .---- 星期: 0 - 7 (Sunday=0 or 7) 或者 sun,mon,tue,wed,thu,fri,sat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># |  |  |  |  |</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># *  *  *  *  * 用户名 待执行的命令</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">/</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> root command </span></span>
<span class="line"></span></code></pre></div><h2 id="用户任务调度" tabindex="-1">用户任务调度 <a class="header-anchor" href="#用户任务调度" aria-hidden="true" loading="lazy">#</a></h2><p>用户任务调度配置文件: <strong>/var/spool/cron/</strong> 目录下，文件名和用户名一致，表达是格式同系统任务调度，只是少了用户。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">/etc/cron.deny</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">该文件中所列用户不允许使用</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">命令</span></span>
<span class="line"><span style="color:#FFCB6B;">/etc/cron.allow</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">该文件中所列用户允许使用</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">命令</span></span>
<span class="line"><span style="color:#FFCB6B;">/var/spool/cron/</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">所有用户</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件存放的目录,以用户名命名</span></span>
<span class="line"></span></code></pre></div><h2 id="cron-表达式符号" tabindex="-1">cron 表达式符号 <a class="header-anchor" href="#cron-表达式符号" aria-hidden="true" loading="lazy">#</a></h2><p>星号<code>[*]</code>: 代表所有可能的值, 例如month字段如果是星号, 则表示在满足其它字段的制约条件后每月都执行该命令操作</p><p>逗号<code>[,]</code>: 可以用逗号隔开的值指定一个列表范围, 例如: 1,3,5,7,9</p><p>中杠<code>[-]</code>: 可以用整数之间的中杠表示一个整数范围, 例如: 2-6 表示 2,3,4,5,6</p><p>正斜线<code>[/]</code>: 可以用正斜线指定时间的间隔频率, 例如: 0-23/5 表示每 5 小时执行一次, 同时正斜线可以和星号一起使用, 例如: <code>*/10</code>, 如果用在 minute 字段, 表示每十分钟执行一次</p><h2 id="crond-服务" tabindex="-1">crond 服务 <a class="header-anchor" href="#crond-服务" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crond</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 关闭服务    </span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crond</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启服务  </span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crond</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重新载入配置</span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crond</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看服务状态</span></span>
<span class="line"><span style="color:#FFCB6B;">/sbin/service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crond</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开机自启动</span></span>
<span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-level</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crond</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"></span></code></pre></div><hr>`,21);function r(i,y,C,D,d,A){const s=e("GoogleAdsense");return p(),a("div",null,[c,l(s)])}const b=n(t,[["render",r]]);export{F as __pageData,b as default};
