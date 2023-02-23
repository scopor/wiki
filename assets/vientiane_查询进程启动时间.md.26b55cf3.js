import{_ as a,c as n,d as l,e as o,o as e,r as p}from"./app.538dd111.js";const h=JSON.parse('{"title":"查询进程启动时间","description":"查询进程启动时间。","frontmatter":{"title":"查询进程启动时间","head":[["meta",{"property":"og:title","content":"查询进程启动时间"}],["meta",{"name":"description","content":"查询进程启动时间。"}],["meta",{"name":"keywords","content":"查询进程启动时间"}],["meta",{"property":"og:description","content":"查询进程启动时间。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4"}]]},"headers":[{"level":2,"title":"根据进程号查询","slug":"根据进程号查询","link":"#根据进程号查询","children":[]},{"level":2,"title":"根据关键字查询","slug":"根据关键字查询","link":"#根据关键字查询","children":[]},{"level":2,"title":"格式化启动时间","slug":"格式化启动时间","link":"#格式化启动时间","children":[]}],"relativePath":"vientiane/查询进程启动时间.md"}'),t={name:"vientiane/查询进程启动时间.md"},r=o(`<h1 id="查询进程启动时间" tabindex="-1">查询进程启动时间 <a class="header-anchor" href="#查询进程启动时间" aria-hidden="true" loading="lazy">#</a></h1><p>在 <strong>Linux</strong> 操作系统中，可以使用 <strong>ps</strong> 命令来查询进程的信息。 要查询进程的最后一次启动时间，可以使用 <code>ps -eo pid,lstart</code> 命令。</p><h2 id="根据进程号查询" tabindex="-1">根据进程号查询 <a class="header-anchor" href="#根据进程号查询" aria-hidden="true" loading="lazy">#</a></h2><p>例如，假设要查询进程 <strong>ID</strong> 为 <strong>12345</strong> 的进程的最后一次启动时间，可以使用以下命令：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-eo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pid,lstart</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12345</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="根据关键字查询" tabindex="-1">根据关键字查询 <a class="header-anchor" href="#根据关键字查询" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">关键字</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lstart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">STARTED</span></span>
<span class="line"></span></code></pre></div><h2 id="格式化启动时间" tabindex="-1">格式化启动时间 <a class="header-anchor" href="#格式化启动时间" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#FFCB6B;">ps</span><span style="color:#C3E88D;"> -ef </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> 关键字 </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> -v grep </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#C3E88D;"> ps -o lstart -p </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> -v STARTED</span><span style="color:#89DDFF;">\`&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">+%Y-%m-%d %H:%M:%S</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><hr>`,10);function c(C,y,D,i,A,F){const s=p("GoogleAdsense");return e(),n("div",null,[r,l(s)])}const E=a(t,[["render",c]]);export{h as __pageData,E as default};
