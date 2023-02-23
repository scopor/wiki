import{_ as a,c as s,o as l,e as n}from"./app.538dd111.js";const D=JSON.parse('{"title":"常用正则表达式收集","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 匹配Email地址：","slug":"_1-匹配email地址","link":"#_1-匹配email地址","children":[]},{"level":2,"title":"2. 匹配URL","slug":"_2-匹配url","link":"#_2-匹配url","children":[]},{"level":2,"title":"3. 匹配IP地址","slug":"_3-匹配ip地址","link":"#_3-匹配ip地址","children":[]},{"level":2,"title":"4. 匹配HTML标签","slug":"_4-匹配html标签","link":"#_4-匹配html标签","children":[]},{"level":2,"title":"5. 匹配中国大陆手机号","slug":"_5-匹配中国大陆手机号","link":"#_5-匹配中国大陆手机号","children":[]},{"level":2,"title":"6. 匹配身份证号","slug":"_6-匹配身份证号","link":"#_6-匹配身份证号","children":[]}],"relativePath":"vientiane/常用正则表达式.md"}'),e={name:"vientiane/常用正则表达式.md"},p=n('<h1 id="常用正则表达式收集" tabindex="-1">常用正则表达式收集 <a class="header-anchor" href="#常用正则表达式收集" aria-hidden="true" loading="lazy">#</a></h1><h2 id="_1-匹配email地址" tabindex="-1">1. 匹配Email地址： <a class="header-anchor" href="#_1-匹配email地址" aria-hidden="true" loading="lazy">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">[a-zA-Z0-9_-]+)+$/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre></div><h2 id="_2-匹配url" tabindex="-1">2. 匹配URL <a class="header-anchor" href="#_2-匹配url" aria-hidden="true" loading="lazy">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^(https?:</span><span style="color:#A6ACCD;">\\/\\/</span><span style="color:#C3E88D;">)?([</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">a-z</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">-]+)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">([a-z</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">]{2,6})([</span><span style="color:#A6ACCD;">\\/\\w</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">-]*)*</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">?$/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre></div><h2 id="_3-匹配ip地址" tabindex="-1">3. 匹配IP地址 <a class="header-anchor" href="#_3-匹配ip地址" aria-hidden="true" loading="lazy">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre></div><h2 id="_4-匹配html标签" tabindex="-1">4. 匹配HTML标签 <a class="header-anchor" href="#_4-匹配html标签" aria-hidden="true" loading="lazy">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/&lt;[^&gt;]+&gt;/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre></div><h2 id="_5-匹配中国大陆手机号" tabindex="-1">5. 匹配中国大陆手机号 <a class="header-anchor" href="#_5-匹配中国大陆手机号" aria-hidden="true" loading="lazy">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^1[3-9]</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{9}$/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre></div><h2 id="_6-匹配身份证号" tabindex="-1">6. 匹配身份证号 <a class="header-anchor" href="#_6-匹配身份证号" aria-hidden="true" loading="lazy">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/^[1-9]</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{5}(18|19|([23]</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">))</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">{3}[0-9Xx]$/</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">```</span><span style="color:#C3E88D;">---</span></span>\n<span class="line"><span style="color:#C3E88D;">&lt;GoogleAdsense/&gt;</span></span>\n<span class="line"></span></code></pre></div>',13),t=[p];function o(c,i,r,d,h,y){return l(),s("div",null,t)}const _=a(e,[["render",o]]);export{D as __pageData,_ as default};
