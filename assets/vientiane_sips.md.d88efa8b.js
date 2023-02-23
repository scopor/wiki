import{_ as e,c as s,d as n,e as t,o as i,r as l}from"./app.6b8ce717.js";const _=JSON.parse('{"title":"Mac sips 命令","description":"sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等","frontmatter":{"title":"Mac sips 命令","head":[["meta",{"property":"og:title","content":"MacOS 原生支持裁剪、缩小、翻转图片，查看图片源数据等"}],["meta",{"name":"description","content":"sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等"}],["meta",{"name":"keywords","content":"scp"}],["meta",{"property":"og:description","content":"sips 命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看Meta信息等"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/vientiane/sips"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/vientiane/sips"}]]},"headers":[{"level":2,"title":"按长宽比例缩小","slug":"按长宽比例缩小","link":"#按长宽比例缩小","children":[]},{"level":2,"title":"翻转（默认顺时针）","slug":"翻转-默认顺时针","link":"#翻转-默认顺时针","children":[]},{"level":2,"title":"修改后缀格式","slug":"修改后缀格式","link":"#修改后缀格式","children":[]},{"level":2,"title":"查看元数据","slug":"查看元数据","link":"#查看元数据","children":[]}],"relativePath":"vientiane/sips.md"}'),p={name:"vientiane/sips.md"},o=t(`<h1 id="sips-简介" tabindex="-1">Sips 简介 <a class="header-anchor" href="#sips-简介" aria-hidden="true" loading="lazy">#</a></h1><p>sips命令是 Mac 自带的一款图片处理的命令行工具，可以根据需要对图片进行裁剪，修改尺寸，翻转以及查看 Meta 信息等</p><h2 id="按长宽比例缩小" tabindex="-1">按长宽比例缩小 <a class="header-anchor" href="#按长宽比例缩小" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sips -z length width *.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="翻转-默认顺时针" tabindex="-1">翻转（默认顺时针） <a class="header-anchor" href="#翻转-默认顺时针" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sips -r 90 *.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="修改后缀格式" tabindex="-1">修改后缀格式 <a class="header-anchor" href="#修改后缀格式" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sips -s format png xxx.jpg --out xxx.png</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="查看元数据" tabindex="-1">查看元数据 <a class="header-anchor" href="#查看元数据" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sips -g format *.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其中元数据值和支持修改的图片格式可参见 man sips 信息。</p><hr>`,12);function c(r,d,h,g,m,u){const a=l("GoogleAdsense");return i(),s("div",null,[o,n(a)])}const y=e(p,[["render",c]]);export{_ as __pageData,y as default};
