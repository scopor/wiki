import{_ as s,c as e,C as n,Q as t,o,D as l}from"./chunks/framework.123b243a.js";const _=JSON.parse('{"title":"Mac sips 命令","description":"sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等","frontmatter":{"title":"Mac sips 命令","head":[["meta",{"property":"og:title","content":"MacOS 原生支持裁剪、缩小、翻转图片，查看图片源数据等"}],["meta",{"name":"description","content":"sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等"}],["meta",{"name":"keywords","content":"sips"}],["meta",{"property":"og:description","content":"sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/sips"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/sips"}]]},"headers":[],"relativePath":"vientiane/sips.md"}'),p={name:"vientiane/sips.md"},i=t(`<h1 id="sips-简介" tabindex="-1">Sips 简介 <a class="header-anchor" href="#sips-简介" aria-label="Permalink to &quot;Sips 简介&quot;" loading="lazy">​</a></h1><p>sips命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看 Meta 信息等</p><h2 id="按长宽比例缩小" tabindex="-1">按长宽比例缩小 <a class="header-anchor" href="#按长宽比例缩小" aria-label="Permalink to &quot;按长宽比例缩小&quot;" loading="lazy">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sips -z length width *.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="翻转-默认顺时针" tabindex="-1">翻转（默认顺时针） <a class="header-anchor" href="#翻转-默认顺时针" aria-label="Permalink to &quot;翻转（默认顺时针）&quot;" loading="lazy">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sips -r 90 *.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="修改后缀格式" tabindex="-1">修改后缀格式 <a class="header-anchor" href="#修改后缀格式" aria-label="Permalink to &quot;修改后缀格式&quot;" loading="lazy">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sips -s format png xxx.jpg --out xxx.png</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="查看元数据" tabindex="-1">查看元数据 <a class="header-anchor" href="#查看元数据" aria-label="Permalink to &quot;查看元数据&quot;" loading="lazy">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sips -g format *.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其中元数据值和支持修改的图片格式可参见 man sips 信息。</p><hr>`,12);function c(r,d,h,g,m,u){const a=l("GoogleAdsense");return o(),e("div",null,[i,n(a)])}const y=s(p,[["render",c]]);export{_ as __pageData,y as default};