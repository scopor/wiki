import{_ as e,D as n,o as t,c as o,G as s,R as r}from"./chunks/framework.fed62f4c.js";const y=JSON.parse('{"title":"jar 本地仓库存在, maven 编译失败","description":"jar 本地仓库存在, maven 编译失败","frontmatter":{"title":"jar 本地仓库存在, maven 编译失败","head":[["meta",{"property":"og:title","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"name":"description","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"name":"keywords","content":"Could not find artifact, jar, maven"}],["meta",{"property":"og:description","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/jar-exist"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/jar-exist"}]]},"headers":[],"relativePath":"vientiane/jar-exist.md","filePath":"vientiane/jar-exist.md"}'),l={name:"vientiane/jar-exist.md"},i=r('<h1 id="本地仓库有-jar-包-maven-编译依然报错" tabindex="-1">本地仓库有 <strong>jar</strong> 包 <strong>maven</strong> 编译依然报错 <a class="header-anchor" href="#本地仓库有-jar-包-maven-编译依然报错" aria-label="Permalink to &quot;本地仓库有 **jar** 包 **maven** 编译依然报错&quot;" loading="lazy">​</a></h1><h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Could</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artifact</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">org.osgi.core:pom:7.0.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">centralrepo</span></span></code></pre></div><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;" loading="lazy">​</a></h2><p>找到问题 jar 包所在目录, 删除除 <strong>.jar</strong> 和 <strong>.pom</strong> 结尾之外的所有文件，重新编译即可。</p><hr>',6);function c(p,d,m,h,_,C){const a=n("GoogleAdsense");return t(),o("div",null,[i,s(a)])}const v=e(l,[["render",c]]);export{y as __pageData,v as default};
