import{_ as e,c as a,o as t,a4 as n}from"./chunks/framework.D8LZUQkA.js";const m=JSON.parse('{"title":"Maven 多线程编译","description":"公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。","frontmatter":{"title":"Maven 多线程编译","head":[["meta",{"property":"og:title","content":"Maven 多线程编译"}],["meta",{"name":"description","content":"公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。"}],["meta",{"name":"keywords","content":"Maven,多线程编译"}],["meta",{"property":"og:description","content":"公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/Maven%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E8%AF%91"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/Maven%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E8%AF%91"}]]},"headers":[],"relativePath":"vientiane/Maven 多线程编译.md","filePath":"vientiane/Maven 多线程编译.md"}'),s={name:"vientiane/Maven 多线程编译.md"},i=n(`<h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;">​</a></h2><p>公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-Dmaven.test.skip=true </span></span>
<span class="line"><span>-Dmaven.javadoc.skip=true </span></span>
<span class="line"><span>-Dcheckstyle.skip=true </span></span>
<span class="line"><span>-Dfindbugs.skip=true</span></span></code></pre></div><h2 id="多线程编译" tabindex="-1">多线程编译 <a class="header-anchor" href="#多线程编译" aria-label="Permalink to &quot;多线程编译&quot;">​</a></h2><p>在翻阅 Maven 命令时，发现 Maven 3.0 以上的版本是支持多线程编译的，使用 -T 的命令可以指定多线程的数量。具体命令如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-T 1C -Dmaven.compile.fork=true</span></span></code></pre></div><p>1C 是指倍数核心数的线程数量，如果你的电脑是 4 核 8 线程，配置为 1C 就代表 8线程，如果是 4 核 4 线程，就代表 4 个线程，也可以直接指定线程数量, 如 -T <code>4</code>。 编译信息中可以看到以下信息，表示编译使用的线程数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[INFO] Using the MultiThreadedBuilder implementation with a thread count of 8</span></span></code></pre></div><h2 id="多线程下载" tabindex="-1">多线程下载 <a class="header-anchor" href="#多线程下载" aria-label="Permalink to &quot;多线程下载&quot;">​</a></h2><p>另外，使用以下配置还可以开启多线程下载，默认配置为5</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-Dmaven.artifact.threads=10</span></span></code></pre></div>`,11),p=[i];function o(c,l,d,r,h,v){return t(),a("div",null,p)}const _=e(s,[["render",o]]);export{m as __pageData,_ as default};
