import{_ as s,c as i,o as t,a4 as a}from"./chunks/framework.D_7_7Osg.js";const g=JSON.parse('{"title":"查找最新修改的文件","description":"有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。","frontmatter":{"title":"查找最新修改的文件","head":[["meta",{"property":"og:title","content":"查找最新修改的文件"}],["meta",{"name":"description","content":"有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。"}],["meta",{"name":"keywords","content":"Linux, find"}],["meta",{"property":"og:description","content":"有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/%E6%9F%A5%E6%89%BE%E6%9C%80%E6%96%B0%E4%BF%AE%E6%94%B9%E7%9A%84%E6%96%87%E4%BB%B6"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/%E6%9F%A5%E6%89%BE%E6%9C%80%E6%96%B0%E4%BF%AE%E6%94%B9%E7%9A%84%E6%96%87%E4%BB%B6"}]]},"headers":[],"relativePath":"vientiane/查找最新修改的文件.md","filePath":"vientiane/查找最新修改的文件.md"}'),e={name:"vientiane/查找最新修改的文件.md"},n=a('<h2 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h2><p>有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。</p><h2 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h2><p>我们都知道在 <strong>Linux</strong> 上，查找文件使用 <strong>find</strong> 命令。要找出在某个指定时间之后修改的文件列表可以以下使用命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/directory</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -newermt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2023-01-01 00:00:00&quot;</span></span></code></pre></div><p>如果要查找某个时间点之前修改的文件列表，可以加上 <strong>-not</strong> 参数</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/directory</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -newermt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2023-01-01 00:00:00&quot;</span></span></code></pre></div><p>如果是在 <strong>Windows</strong> 系统上，可以在 <strong>powershell</strong> 中执行以下命令查询最新修改的文件列表</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Get-ChildItem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C:\\path\\to\\directory&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Recurse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Where-Object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.LastWriteTime</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2022-03-01 00:00:00&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span></span></code></pre></div>',9),h=[n];function l(p,o,r,k,d,c){return t(),i("div",null,h)}const C=s(e,[["render",l]]);export{g as __pageData,C as default};
