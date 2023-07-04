import{_ as a,o as s,c as l,U as n}from"./chunks/framework.82cf92f3.js";const h=JSON.parse('{"title":"常用正则表达式收集","description":"","frontmatter":{},"headers":[],"relativePath":"vientiane/常用正则表达式.md","filePath":"vientiane/常用正则表达式.md"}'),e={name:"vientiane/常用正则表达式.md"},o=n('<h1 id="常用正则表达式收集" tabindex="-1">常用正则表达式收集 <a class="header-anchor" href="#常用正则表达式收集" aria-label="Permalink to &quot;常用正则表达式收集&quot;" loading="lazy">​</a></h1><h2 id="_1-匹配email地址" tabindex="-1">1. 匹配Email地址： <a class="header-anchor" href="#_1-匹配email地址" aria-label="Permalink to &quot;1. 匹配Email地址：&quot;" loading="lazy">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">[a-zA-Z0-9_-]+)+$/</span><span style="color:#89DDFF;">`</span></span></code></pre></div><h2 id="_2-匹配url" tabindex="-1">2. 匹配URL <a class="header-anchor" href="#_2-匹配url" aria-label="Permalink to &quot;2. 匹配URL&quot;" loading="lazy">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^(https?:</span><span style="color:#A6ACCD;">\\/\\/</span><span style="color:#C3E88D;">)?([</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">a-z</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">-]+)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">([a-z</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">]{2,6})([</span><span style="color:#A6ACCD;">\\/\\w</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">-]*)*</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">?$/</span><span style="color:#89DDFF;">`</span></span></code></pre></div><h2 id="_3-匹配ip地址" tabindex="-1">3. 匹配IP地址 <a class="header-anchor" href="#_3-匹配ip地址" aria-label="Permalink to &quot;3. 匹配IP地址&quot;" loading="lazy">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/</span><span style="color:#89DDFF;">`</span></span></code></pre></div><h2 id="_4-匹配html标签" tabindex="-1">4. 匹配HTML标签 <a class="header-anchor" href="#_4-匹配html标签" aria-label="Permalink to &quot;4. 匹配HTML标签&quot;" loading="lazy">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/&lt;[^&gt;]+&gt;/</span><span style="color:#89DDFF;">`</span></span></code></pre></div><h2 id="_5-匹配中国大陆手机号" tabindex="-1">5. 匹配中国大陆手机号 <a class="header-anchor" href="#_5-匹配中国大陆手机号" aria-label="Permalink to &quot;5. 匹配中国大陆手机号&quot;" loading="lazy">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^1[3-9]</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{9}$/</span><span style="color:#89DDFF;">`</span></span></code></pre></div><h2 id="_6-匹配身份证号" tabindex="-1">6. 匹配身份证号 <a class="header-anchor" href="#_6-匹配身份证号" aria-label="Permalink to &quot;6. 匹配身份证号&quot;" loading="lazy">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^[1-9]</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{5}(18|19|([23]</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">))</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{3}[0-9Xx]$/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">```</span><span style="color:#C3E88D;">---</span></span>\n<span class="line"><span style="color:#C3E88D;">&lt;GoogleAdsense/&gt;</span></span></code></pre></div>',13),t=[o];function p(c,r,i,d,y,C){return s(),l("div",null,t)}const _=a(e,[["render",p]]);export{h as __pageData,_ as default};
