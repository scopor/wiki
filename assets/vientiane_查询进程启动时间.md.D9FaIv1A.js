import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.DhMiq51s.js";const c=JSON.parse('{"title":"查询进程启动时间","description":"查询进程启动时间。","frontmatter":{"title":"查询进程启动时间","head":[["meta",{"property":"og:title","content":"查询进程启动时间"}],["meta",{"name":"description","content":"查询进程启动时间。"}],["meta",{"name":"keywords","content":"查询进程启动时间"}],["meta",{"property":"og:description","content":"查询进程启动时间。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/%E6%9F%A5%E8%AF%A2%E8%BF%9B%E7%A8%8B%E5%90%AF%E5%8A%A8%E6%97%B6%E9%97%B4"}]]},"headers":[],"relativePath":"vientiane/查询进程启动时间.md","filePath":"vientiane/查询进程启动时间.md"}'),h={name:"vientiane/查询进程启动时间.md"},e=t('<h1 id="查询进程启动时间" tabindex="-1">查询进程启动时间 <a class="header-anchor" href="#查询进程启动时间" aria-label="Permalink to &quot;查询进程启动时间&quot;">​</a></h1><p>在 <strong>Linux</strong> 操作系统中，可以使用 <strong>ps</strong> 命令来查询进程的信息。 要查询进程的最后一次启动时间，可以使用 <code>ps -eo pid,lstart</code> 命令。</p><h2 id="根据进程号查询" tabindex="-1">根据进程号查询 <a class="header-anchor" href="#根据进程号查询" aria-label="Permalink to &quot;根据进程号查询&quot;">​</a></h2><p>例如，假设要查询进程 <strong>ID</strong> 为 <strong>12345</strong> 的进程的最后一次启动时间，可以使用以下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -eo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pid,lstart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12345</span></span></code></pre></div><h2 id="根据关键字查询" tabindex="-1">根据关键字查询 <a class="header-anchor" href="#根据关键字查询" aria-label="Permalink to &quot;根据关键字查询&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关键字</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $2}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lstart</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> STARTED</span></span></code></pre></div><h2 id="格式化启动时间" tabindex="-1">格式化启动时间 <a class="header-anchor" href="#格式化启动时间" aria-label="Permalink to &quot;格式化启动时间&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关键字 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grep </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $2}&#39; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lstart </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> STARTED`&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;+%Y-%m-%d %H:%M:%S&quot;</span></span></code></pre></div>',9),n=[e];function p(l,k,r,F,d,o){return a(),i("div",null,n)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};
