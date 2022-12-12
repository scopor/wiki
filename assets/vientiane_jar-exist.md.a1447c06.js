import{_ as a,c as n,d as t,e as r,o,r as s}from"./app.c8f2ed45.js";const j=JSON.parse('{"title":"jar 本地仓库存在, maven 编译失败","description":"jar 本地仓库存在, maven 编译失败","frontmatter":{"title":"jar 本地仓库存在, maven 编译失败","head":[["meta",{"property":"og:title","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"name":"description","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"name":"keywords","content":"Could not find artifact, jar, maven"}],["meta",{"property":"og:description","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/vientiane/jar-exist"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/vientiane/jar-exist"}]]},"headers":[{"level":2,"title":"现象","slug":"现象","link":"#现象","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"relativePath":"vientiane/jar-exist.md"}'),i={name:"vientiane/jar-exist.md"},l=r(`<h1 id="本地仓库有-jar-包-maven-编译依然报错" tabindex="-1">本地仓库有 <strong>jar</strong> 包 <strong>maven</strong> 编译依然报错 <a class="header-anchor" href="#本地仓库有-jar-包-maven-编译依然报错" aria-hidden="true" loading="lazy">#</a></h1><h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Could not find artifact org.osgi.core:pom:7.0.0 </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> centralrepo</span></span>
<span class="line"></span></code></pre></div><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-hidden="true" loading="lazy">#</a></h2><p>找到问题 jar 包所在目录, 删除除 <strong>.jar</strong> 和 <strong>.pom</strong> 结尾之外的所有文件，重新编译即可。</p><hr>`,6);function c(d,p,h,m,_,g){const e=s("GoogleAdsense");return o(),n("div",null,[l,t(e)])}const u=a(i,[["render",c]]);export{j as __pageData,u as default};
