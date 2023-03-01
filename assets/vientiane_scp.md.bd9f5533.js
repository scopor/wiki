import{_ as a,c as n,d as e,e as l,o,r as t}from"./app.f3c7cdc6.js";const m=JSON.parse('{"title":"scp 命令","description":"scp 命令是用于在不同计算机之间复制文件和目录的命令。","frontmatter":{"title":"scp 命令","head":[["meta",{"property":"og:title","content":"scp 命令"}],["meta",{"name":"description","content":"scp 命令是用于在不同计算机之间复制文件和目录的命令。"}],["meta",{"name":"keywords","content":"scp"}],["meta",{"property":"og:description","content":"scp 命令是用于在不同计算机之间复制文件和目录的命令。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/scp"}],["link",{"rel":"canonical","href":"https://sanoon.me/scp"}]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"从远程计算机复制文件到本地计算机","slug":"从远程计算机复制文件到本地计算机","link":"#从远程计算机复制文件到本地计算机","children":[]},{"level":3,"title":"从本地计算机复制文件到远程计算机","slug":"从本地计算机复制文件到远程计算机","link":"#从本地计算机复制文件到远程计算机","children":[]},{"level":3,"title":"从远程计算机复制目录及其子目录到本地计算机","slug":"从远程计算机复制目录及其子目录到本地计算机","link":"#从远程计算机复制目录及其子目录到本地计算机","children":[]},{"level":3,"title":"从本地计算机复制目录及其子目录到远程计算机","slug":"从本地计算机复制目录及其子目录到远程计算机","link":"#从本地计算机复制目录及其子目录到远程计算机","children":[]},{"level":3,"title":"在两台远程计算机之间复制文件","slug":"在两台远程计算机之间复制文件","link":"#在两台远程计算机之间复制文件","children":[]}]}],"relativePath":"vientiane/scp.md"}'),p={name:"vientiane/scp.md"},c=l(`<h1 id="scp" tabindex="-1">scp <a class="header-anchor" href="#scp" aria-hidden="true" loading="lazy">#</a></h1><p><strong>scp</strong> 命令是用于在不同计算机之间复制文件和目录的命令。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true" loading="lazy">#</a></h2><p><strong>scp</strong> 命令的基本语法如下：其中，<strong>source</strong> 指要复制的文件或目录，<strong>destination</strong> 指复制到的目标位置。可以在本地计算机和远程计算机之间进行复制，也可以在两台远程计算机之间进行复制。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">destination</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true" loading="lazy">#</a></h2><p>以下是 <strong>scp</strong> 命令中可用的选项：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">-r：复制目录及其子目录。</span></span>
<span class="line"><span style="color:#FFCB6B;">-p：保留文件的原始权限和时间戳。</span></span>
<span class="line"><span style="color:#FFCB6B;">-q：静默模式，不显示复制的进度信息。</span></span>
<span class="line"><span style="color:#FFCB6B;">-C：启用压缩传输。</span></span>
<span class="line"><span style="color:#FFCB6B;">-i：指定用于身份验证的密钥文件。</span></span>
<span class="line"><span style="color:#FFCB6B;">-P：指定远程主机上的端口号。</span></span>
<span class="line"><span style="color:#FFCB6B;">-l：限制带宽使用率，以</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">KB/s</span><span style="color:#A6ACCD;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">为单位。</span></span>
<span class="line"><span style="color:#FFCB6B;">-v：显示详细的进度信息。</span></span>
<span class="line"></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true" loading="lazy">#</a></h2><p>以下是一些常用的 <strong>scp</strong> 命令示例</p><h3 id="从远程计算机复制文件到本地计算机" tabindex="-1">从远程计算机复制文件到本地计算机 <a class="header-anchor" href="#从远程计算机复制文件到本地计算机" aria-hidden="true" loading="lazy">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username@remote:/path/to/remote/file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/local/location</span></span>
<span class="line"></span></code></pre></div><h3 id="从本地计算机复制文件到远程计算机" tabindex="-1">从本地计算机复制文件到远程计算机 <a class="header-anchor" href="#从本地计算机复制文件到远程计算机" aria-hidden="true" loading="lazy">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/local/file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username@remote:/path/to/remote/location</span></span>
<span class="line"></span></code></pre></div><h3 id="从远程计算机复制目录及其子目录到本地计算机" tabindex="-1">从远程计算机复制目录及其子目录到本地计算机 <a class="header-anchor" href="#从远程计算机复制目录及其子目录到本地计算机" aria-hidden="true" loading="lazy">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username@remote:/path/to/remote/directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/local/location</span></span>
<span class="line"></span></code></pre></div><h3 id="从本地计算机复制目录及其子目录到远程计算机" tabindex="-1">从本地计算机复制目录及其子目录到远程计算机 <a class="header-anchor" href="#从本地计算机复制目录及其子目录到远程计算机" aria-hidden="true" loading="lazy">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/to/local/location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username2@remote2:/path/to/remote/location</span></span>
<span class="line"></span></code></pre></div><h3 id="在两台远程计算机之间复制文件" tabindex="-1">在两台远程计算机之间复制文件 <a class="header-anchor" href="#在两台远程计算机之间复制文件" aria-hidden="true" loading="lazy">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username1@remote1:/path/to/remote/file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username2@remote2:/path/to/remote/location</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>scp</strong> 命令传输的文件和目录权限可能会被修改，取决于目标计算机上的 <strong>umask</strong> 设置。<br> 如果目标文件已存在，则 <strong>scp</strong> 命令将覆盖该文件而不提示。<br> 如果目标文件夹不存在，<strong>scp</strong> 命令将尝试创建该文件夹，但它不会自动创建目标目录的层次结构。<br> 在使用 <strong>scp</strong> 命令时，需要确保网络连接是安全的，以避免敏感信息泄露。建议使用 <strong>SSH</strong> 连接。</p></div><hr>`,22);function r(i,d,h,C,y,g){const s=t("GoogleAdsense");return o(),n("div",null,[c,e(s)])}const D=a(p,[["render",r]]);export{m as __pageData,D as default};
