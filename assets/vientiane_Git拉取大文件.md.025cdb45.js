import{_ as s,D as e,o as t,c as l,G as o,R as n}from"./chunks/framework.fed62f4c.js";const _=JSON.parse('{"title":"Git 拉取大文件","description":"","frontmatter":{},"headers":[],"relativePath":"vientiane/Git拉取大文件.md","filePath":"vientiane/Git拉取大文件.md"}'),p={name:"vientiane/Git拉取大文件.md"},i=n('<h1 id="git-拉取大文件" tabindex="-1">Git 拉取大文件 <a class="header-anchor" href="#git-拉取大文件" aria-label="Permalink to &quot;Git 拉取大文件&quot;" loading="lazy">​</a></h1><h2 id="报错信息" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息" aria-label="Permalink to &quot;报错信息&quot;" loading="lazy">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">external filter &#39;git-lfs filter-process&#39; failed</span></span></code></pre></div><p>这个错误通常是由于在使用 Git Large File Storage（LFS）时出现问题引起的。Git LFS 是一个用于存储大文件的扩展，它将大文件存储在远程服务器上，而不是将其直接纳入到 Git 存储库中。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;" loading="lazy">​</a></h2><p>安装 Git LFS 并跳过默认的 &quot;smudge&quot; 操作，这意味着下载到本地的指针文件不会被还原为实际文件，而只保留指针文件。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lfs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--skip-smudge</span></span></code></pre></div><p>这个选项通常在以下情况下使用：</p><ul><li><p>加快操作速度：跳过 &quot;smudge&quot; 操作可以减少 Git LFS 执行的时间，加快 <code>git checkout</code> 或 <code>git pull</code> 等操作的速度。这对于项目中包含大量大文件的情况下特别有效。</p></li><li><p>节省存储空间：指针文件相对于实际大文件要小得多，因此跳过 &quot;smudge&quot; 操作可以节省存储空间。如果你只需要查看文件的元数据或者不需要实际文件内容，可以选择跳过 &quot;smudge&quot; 操作来避免占用过多的存储空间。</p></li></ul><p>然后删除项目重新 clone 即可。</p><h2 id="拉取大文件" tabindex="-1">拉取大文件 <a class="header-anchor" href="#拉取大文件" aria-label="Permalink to &quot;拉取大文件&quot;" loading="lazy">​</a></h2><p>如果想将指针还原成大文件，那么可以执行以下命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git lfs pull</span></span></code></pre></div><p>可能会遇到如下报错</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">batch response: Post &quot;xxx&quot;: x509: certificate signed by unknown authority</span></span></code></pre></div><p>关闭 https 校验即可</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.sslVerify</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span></code></pre></div><hr>',18);function c(r,d,h,u,g,C){const a=e("GoogleAdsense");return t(),l("div",null,[i,o(a)])}const m=s(p,[["render",c]]);export{_ as __pageData,m as default};
