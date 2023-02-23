import{_ as n,c as e,d as a,e as l,o as t,r as o}from"./app.9dbb27da.js";const D=JSON.parse('{"title":"Shell 脚本异常退出命令","description":"shell 脚本异常退出机制是指，当 shell 脚本在执行过程中发生错误时，脚本会自动退出，以避免出现更多的错误。","frontmatter":{"title":"Shell 脚本异常退出命令","head":[["meta",{"property":"og:title","content":"Shell 脚本异常退出命令"}],["meta",{"name":"description","content":"shell 脚本异常退出机制是指，当 shell 脚本在执行过程中发生错误时，脚本会自动退出，以避免出现更多的错误。"}],["meta",{"name":"keywords","content":"set -e, set -u, set -o pipefail, trap"}],["meta",{"property":"og:description","content":"shell 脚本异常退出机制是指，当 shell 脚本在执行过程中发生错误时，脚本会自动退出，以避免出现更多的错误。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/Shell%E8%84%9A%E6%9C%AC%E5%BC%82%E5%B8%B8%E9%80%80%E5%87%BA%E5%91%BD%E4%BB%A4"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/Shell%E8%84%9A%E6%9C%AC%E5%BC%82%E5%B8%B8%E9%80%80%E5%87%BA%E5%91%BD%E4%BB%A4"}]]},"headers":[{"level":2,"title":"set -e","slug":"set-e","link":"#set-e","children":[]},{"level":2,"title":"set -u","slug":"set-u","link":"#set-u","children":[]},{"level":2,"title":"set -o pipefail","slug":"set-o-pipefail","link":"#set-o-pipefail","children":[]},{"level":2,"title":"trap","slug":"trap","link":"#trap","children":[]},{"level":2,"title":"shell 脚本中常用的信号","slug":"shell-脚本中常用的信号","link":"#shell-脚本中常用的信号","children":[]}],"relativePath":"vientiane/Shell脚本异常退出命令.md"}'),p={name:"vientiane/Shell脚本异常退出命令.md"},r=l(`<h1 id="shell-脚本中常用的异常退出命令" tabindex="-1"><strong>Shell</strong> 脚本中常用的异常退出命令 <a class="header-anchor" href="#shell-脚本中常用的异常退出命令" aria-hidden="true" loading="lazy">#</a></h1><p><strong>shell</strong> 脚本异常退出机制是指: 当 <strong>shell</strong> 脚本在执行过程中发生错误时，脚本会自动退出，以避免出现更多的错误。脚本异常退出机制的实现方式有多种，其中最常用的是使用 <strong>set -e</strong>，<strong>set -u</strong>，<strong>set -o pipefail</strong>，<strong>trap</strong> 等命令。</p><h2 id="set-e" tabindex="-1"><strong>set -e</strong> <a class="header-anchor" href="#set-e" aria-hidden="true" loading="lazy">#</a></h2><p>当某条命令执行失败时，立即退出脚本，不再执行下面的命令。</p><p>示例：<strong>rm -rf /tmp/test</strong> 命令会执行失败，因为 <strong>/tmp/test</strong> 不存在，此时脚本会立即退出，不会执行 <strong>echo &quot;Test is done&quot;</strong>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/test</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="set-u" tabindex="-1"><strong>set -u</strong> <a class="header-anchor" href="#set-u" aria-hidden="true" loading="lazy">#</a></h2><p>当使用未定义的变量时，立即退出脚本，不再执行下面的命令。</p><p>示例：<strong>echo $undefined_variable</strong> 命令会执行失败，因为 <strong>$undefined_variable</strong> 变量未定义，此时脚本会立即退出，不会执行 <strong>echo &quot;Test is done&quot;</strong>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $undefined_variable</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="set-o-pipefail" tabindex="-1"><strong>set -o pipefail</strong> <a class="header-anchor" href="#set-o-pipefail" aria-hidden="true" loading="lazy">#</a></h2><p>当管道中的任何一条命令执行失败时，立即退出脚本，不再执行下面的命令。</p><p>示例：<strong>ls /tmp/test | grep test</strong> 命令会执行失败，因为 <strong>/tmp/test</strong> 不存在，此时脚本会立即退出，不会执行 <strong>echo &quot;Test is done&quot;</strong>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pipefail</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="trap" tabindex="-1"><strong>trap</strong> <a class="header-anchor" href="#trap" aria-hidden="true" loading="lazy">#</a></h2><p>当接收到指定的信号时，立即执行指定的命令。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>trap</strong> 可以接收 <strong>SIGHUP</strong>、<strong>SIGINT</strong>、<strong>SIGQUIT</strong>、<strong>SIGTERM</strong> 等信号。 <strong>trap</strong> 不能接收 <strong>SIGKILL</strong> 信号，因为 <strong>SIGKILL</strong> 信号不能被捕获和忽略。</p></div><p>示例：当接收到 <strong>SIGHUP</strong> 信号时，会立即执行 <strong>echo &#39;Received signal SIGHUP&#39;</strong> 命令，然后继续执行 <strong>echo &quot;Test is done&quot;</strong>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">trap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo &#39;Received signal SIGHUP&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SIGHUP</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-SIGHUP</span><span style="color:#A6ACCD;"> $$</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="shell-脚本中常用的信号" tabindex="-1"><strong>shell</strong> 脚本中常用的信号 <a class="header-anchor" href="#shell-脚本中常用的信号" aria-hidden="true" loading="lazy">#</a></h2><ul><li>SIGHUP（1）：挂起信号，当用户终端连接挂断时，该信号会发送给进程。</li><li>SIGINT（2）：中断信号，当用户按下 <strong>Ctrl+C</strong> 时，该信号会发送给进程。</li><li>SIGQUIT（3）：退出信号，当用户按下 <strong><code>Ctrl+\\</code></strong> 时，该信号会发送给进程。</li><li>SIGKILL（9）：杀死信号，该信号不能被捕获和忽略，用于强制终止进程。</li><li>SIGTERM（15）：终止信号，该信号可以被捕获和忽略，用于正常终止进程。</li></ul><hr>`,22);function c(i,h,g,d,y,C){const s=o("GoogleAdsense");return t(),e("div",null,[r,a(s)])}const F=n(p,[["render",c]]);export{D as __pageData,F as default};
