import{_ as n,D as s,o as e,c as o,G as l,R as t}from"./chunks/framework.fed62f4c.js";const C=JSON.parse('{"title":"C 语言开发环境搭建","description":"C 语言开发环境搭建.","frontmatter":{"title":"C 语言开发环境搭建","head":[["meta",{"property":"og:title","content":"C 语言开发环境搭建"}],["meta",{"name":"description","content":"C 语言开发环境搭建."}],["meta",{"name":"keywords","content":"C, CLion，MinGW"}],["meta",{"property":"og:description","content":"C 语言开发环境搭建."}]]},"headers":[],"relativePath":"c/index.md","filePath":"c/index.md"}'),p={name:"c/index.md"},c=t(`<h2 id="_1-安装-clion" tabindex="-1">1 安装 CLion <a class="header-anchor" href="#_1-安装-clion" aria-label="Permalink to &quot;1 安装 CLion&quot;" loading="lazy">​</a></h2><p>下载最新版 CLion，默认安装即可。</p><h2 id="_2-创建工程" tabindex="-1">2 创建工程 <a class="header-anchor" href="#_2-创建工程" aria-label="Permalink to &quot;2 创建工程&quot;" loading="lazy">​</a></h2><p>创建时选择可执行程序，创建完工程后默认弹出 MinGW 配置，我们不用再额外下载，因为最新版本的 CLion 自带 MinGW。</p><h2 id="_3-hello-world" tabindex="-1">3 Hello world <a class="header-anchor" href="#_3-hello-world" aria-label="Permalink to &quot;3 Hello world&quot;" loading="lazy">​</a></h2><p>创建好工程后，自动回生成 main.c 文件，已经写好了 Hello world 代码。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_4-结构说明" tabindex="-1">4 结构说明 <a class="header-anchor" href="#_4-结构说明" aria-label="Permalink to &quot;4 结构说明&quot;" loading="lazy">​</a></h2><p>引入标准头文件，为了后续使用函数 <code>printf()</code>。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>程序主入口是 <code>main</code> 函数，<code>return 0</code> 是 CLion 自动生成携带的，其实可以不要这行代码。</p><h2 id="_5-运行" tabindex="-1">5 运行 <a class="header-anchor" href="#_5-运行" aria-label="Permalink to &quot;5 运行&quot;" loading="lazy">​</a></h2><p>点击执行按钮，生成 exe 程序，控制台打印 <code>Hello, World!</code> 。</p><hr>`,14);function r(i,d,y,h,D,F){const a=s("GoogleAdsense");return e(),o("div",null,[c,l(a)])}const m=n(p,[["render",r]]);export{C as __pageData,m as default};
