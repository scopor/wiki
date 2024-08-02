import{_ as a,c as e,o as t,a5 as i}from"./chunks/framework.4sasYC7X.js";const g=JSON.parse('{"title":"jar 本地仓库存在, maven 编译失败","description":"jar 本地仓库存在, maven 编译失败","frontmatter":{"title":"jar 本地仓库存在, maven 编译失败","head":[["meta",{"property":"og:title","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"name":"description","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"name":"keywords","content":"Could not find artifact, jar, maven"}],["meta",{"property":"og:description","content":"jar 本地仓库存在, maven 编译失败"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/jar-exist"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/jar-exist"}]]},"headers":[],"relativePath":"vientiane/jar-exist.md","filePath":"vientiane/jar-exist.md"}'),n={name:"vientiane/jar-exist.md"},s=i('<h1 id="本地仓库有-jar-包-maven-编译依然报错" tabindex="-1">本地仓库有 <strong>jar</strong> 包 <strong>maven</strong> 编译依然报错 <a class="header-anchor" href="#本地仓库有-jar-包-maven-编译依然报错" aria-label="Permalink to &quot;本地仓库有 **jar** 包 **maven** 编译依然报错&quot;">​</a></h1><h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Could</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifact</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> org.osgi.core:pom:7.0.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centralrepo</span></span></code></pre></div><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>找到问题 jar 包所在目录, 删除除 <strong>.jar</strong> 和 <strong>.pom</strong> 结尾之外的所有文件，重新编译即可。</p>',5),r=[s];function o(l,h,p,c,d,m){return t(),e("div",null,r)}const _=a(n,[["render",o]]);export{g as __pageData,_ as default};
