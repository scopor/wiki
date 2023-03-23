import{_ as a,c as n,C as o,Q as e,o as t,D as l}from"./chunks/framework.123b243a.js";const h=JSON.parse('{"title":"查找最新修改的文件","description":"有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。","frontmatter":{"title":"查找最新修改的文件","head":[["meta",{"property":"og:title","content":"查找最新修改的文件"}],["meta",{"name":"description","content":"有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。"}],["meta",{"name":"keywords","content":"Linux, find"}],["meta",{"property":"og:description","content":"有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/%E6%9F%A5%E6%89%BE%E6%9C%80%E6%96%B0%E4%BF%AE%E6%94%B9%E7%9A%84%E6%96%87%E4%BB%B6"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/%E6%9F%A5%E6%89%BE%E6%9C%80%E6%96%B0%E4%BF%AE%E6%94%B9%E7%9A%84%E6%96%87%E4%BB%B6"}]]},"headers":[],"relativePath":"vientiane/查找最新修改的文件.md"}'),p={name:"vientiane/查找最新修改的文件.md"},r=e(`<h2 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;" loading="lazy">​</a></h2><p>有时候环境上因为其他人修改了配置导致服务启动异常，可以确定的时候在某个时间点之后才出现的异常，那就需要找出修改的文件列表。</p><h2 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;" loading="lazy">​</a></h2><p>我们都知道在 <strong>Linux</strong> 上，查找文件使用 <strong>find</strong> 命令。要找出在某个指定时间之后修改的文件列表可以以下使用命令</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-newermt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>如果要查找某个时间点之前修改的文件列表，可以加上 <strong>-not</strong> 参数</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-newermt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>如果是在 <strong>Windows</strong> 系统上，可以在 <strong>powershell</strong> 中执行以下命令查询最新修改的文件列表</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Get-ChildItem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C:\\path\\to\\directory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Recurse</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Where-Object</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> $_</span><span style="color:#C3E88D;">.LastWriteTime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ge</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-03-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span>
<span class="line"></span></code></pre></div><hr>`,10);function c(C,i,y,D,A,d){const s=l("GoogleAdsense");return t(),n("div",null,[r,o(s)])}const _=a(p,[["render",c]]);export{h as __pageData,_ as default};
