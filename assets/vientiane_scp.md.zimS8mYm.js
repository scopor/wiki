import{_ as a,D as i,c as e,I as t,a4 as n,o as l}from"./chunks/framework.DVgqcZox.js";const m=JSON.parse('{"title":"scp 命令","description":"scp 命令是用于在不同计算机之间复制文件和目录的命令。","frontmatter":{"title":"scp 命令","head":[["meta",{"property":"og:title","content":"scp 命令"}],["meta",{"name":"description","content":"scp 命令是用于在不同计算机之间复制文件和目录的命令。"}],["meta",{"name":"keywords","content":"scp"}],["meta",{"property":"og:description","content":"scp 命令是用于在不同计算机之间复制文件和目录的命令。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/scp"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/scp"}]]},"headers":[],"relativePath":"vientiane/scp.md","filePath":"vientiane/scp.md"}'),p={name:"vientiane/scp.md"},o=n(`<h1 id="scp" tabindex="-1">scp <a class="header-anchor" href="#scp" aria-label="Permalink to &quot;scp&quot;">​</a></h1><p><strong>scp</strong> 命令是用于在不同计算机之间复制文件和目录的命令。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><p><strong>scp</strong> 命令的基本语法如下：其中，<strong>source</strong> 指要复制的文件或目录，<strong>destination</strong> 指复制到的目标位置。可以在本地计算机和远程计算机之间进行复制，也可以在两台远程计算机之间进行复制。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] [source] [destination]</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><p>以下是 <strong>scp</strong> 命令中可用的选项：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-r：复制目录及其子目录。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-p：保留文件的原始权限和时间戳。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-q：静默模式，不显示复制的进度信息。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-C：启用压缩传输。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-i：指定用于身份验证的密钥文件。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-P：指定远程主机上的端口号。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-l：限制带宽使用率，以</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">KB/s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 为单位。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-v：显示详细的进度信息。</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>以下是一些常用的 <strong>scp</strong> 命令示例</p><h3 id="从远程计算机复制文件到本地计算机" tabindex="-1">从远程计算机复制文件到本地计算机 <a class="header-anchor" href="#从远程计算机复制文件到本地计算机" aria-label="Permalink to &quot;从远程计算机复制文件到本地计算机&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username@remote:/path/to/remote/file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/local/location</span></span></code></pre></div><h3 id="从本地计算机复制文件到远程计算机" tabindex="-1">从本地计算机复制文件到远程计算机 <a class="header-anchor" href="#从本地计算机复制文件到远程计算机" aria-label="Permalink to &quot;从本地计算机复制文件到远程计算机&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/local/file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username@remote:/path/to/remote/location</span></span></code></pre></div><h3 id="从远程计算机复制目录及其子目录到本地计算机" tabindex="-1">从远程计算机复制目录及其子目录到本地计算机 <a class="header-anchor" href="#从远程计算机复制目录及其子目录到本地计算机" aria-label="Permalink to &quot;从远程计算机复制目录及其子目录到本地计算机&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username@remote:/path/to/remote/directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/local/location</span></span></code></pre></div><h3 id="从本地计算机复制目录及其子目录到远程计算机" tabindex="-1">从本地计算机复制目录及其子目录到远程计算机 <a class="header-anchor" href="#从本地计算机复制目录及其子目录到远程计算机" aria-label="Permalink to &quot;从本地计算机复制目录及其子目录到远程计算机&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/local/location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username2@remote2:/path/to/remote/location</span></span></code></pre></div><h3 id="在两台远程计算机之间复制文件" tabindex="-1">在两台远程计算机之间复制文件 <a class="header-anchor" href="#在两台远程计算机之间复制文件" aria-label="Permalink to &quot;在两台远程计算机之间复制文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username1@remote1:/path/to/remote/file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username2@remote2:/path/to/remote/location</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>scp</strong> 命令传输的文件和目录权限可能会被修改，取决于目标计算机上的 <strong>umask</strong> 设置。<br> 如果目标文件已存在，则 <strong>scp</strong> 命令将覆盖该文件而不提示。<br> 如果目标文件夹不存在，<strong>scp</strong> 命令将尝试创建该文件夹，但它不会自动创建目标目录的层次结构。<br> 在使用 <strong>scp</strong> 命令时，需要确保网络连接是安全的，以避免敏感信息泄露。建议使用 <strong>SSH</strong> 连接。</p></div><hr>`,22);function h(r,c,d,k,g,u){const s=i("GoogleAdsense");return l(),e("div",null,[o,t(s)])}const b=a(p,[["render",h]]);export{m as __pageData,b as default};
