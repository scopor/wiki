import{_ as a,o as e,c as n,R as t}from"./chunks/framework.8e8e72cd.js";const _=JSON.parse('{"title":"Maven 多线程编译","description":"公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。","frontmatter":{"title":"Maven 多线程编译","head":[["meta",{"property":"og:title","content":"Maven 多线程编译"}],["meta",{"name":"description","content":"公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。"}],["meta",{"name":"keywords","content":"Maven,多线程编译"}],["meta",{"property":"og:description","content":"公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/Maven%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E8%AF%91"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/Maven%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E8%AF%91"}]]},"headers":[],"relativePath":"vientiane/Maven 多线程编译.md","filePath":"vientiane/Maven 多线程编译.md"}'),s={name:"vientiane/Maven 多线程编译.md"},o=t(`<h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;" loading="lazy">​</a></h2><p>公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-Dmaven.test.skip=true </span></span>
<span class="line"><span style="color:#A6ACCD;">-Dmaven.javadoc.skip=true </span></span>
<span class="line"><span style="color:#A6ACCD;">-Dcheckstyle.skip=true </span></span>
<span class="line"><span style="color:#A6ACCD;">-Dfindbugs.skip=true</span></span></code></pre></div><h2 id="多线程编译" tabindex="-1">多线程编译 <a class="header-anchor" href="#多线程编译" aria-label="Permalink to &quot;多线程编译&quot;" loading="lazy">​</a></h2><p>在翻阅 Maven 命令时，发现 Maven 3.0 以上的版本是支持多线程编译的，使用 -T 的命令可以指定多线程的数量。具体命令如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-T 1C -Dmaven.compile.fork=true</span></span></code></pre></div><p>1C 是指倍数核心数的线程数量，如果你的电脑是 4 核 8 线程，配置为 1C 就代表 8线程，如果是 4 核 4 线程，就代表 4 个线程，也可以直接指定线程数量, 如 -T <code>4</code>。 编译信息中可以看到以下信息，表示编译使用的线程数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[INFO] Using the MultiThreadedBuilder implementation with a thread count of 8</span></span></code></pre></div><h2 id="多线程下载" tabindex="-1">多线程下载 <a class="header-anchor" href="#多线程下载" aria-label="Permalink to &quot;多线程下载&quot;" loading="lazy">​</a></h2><p>另外，使用以下配置还可以开启多线程下载，默认配置为5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-Dmaven.artifact.threads=10</span></span></code></pre></div>`,11),l=[o];function i(p,c,r,d,h,m){return e(),n("div",null,l)}const v=a(s,[["render",i]]);export{_ as __pageData,v as default};
