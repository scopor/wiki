import{_ as a,D as n,o as l,c as e,G as o,O as p}from"./chunks/framework.95b9d657.js";const E=JSON.parse('{"title":"NVM 管理 NODE 版本","description":"当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本.","frontmatter":{"title":"NVM 管理 NODE 版本","head":[["meta",{"property":"og:title","content":"NVM 管理 NODE 版本"}],["meta",{"name":"description","content":"当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本."}],["meta",{"name":"keywords","content":"nvm, node"}],["meta",{"property":"og:description","content":"当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本."}]]},"headers":[],"relativePath":"vientiane/nvm.md","filePath":"vientiane/nvm.md"}'),t={name:"vientiane/nvm.md"},c=p(`<p>当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本。</p><h2 id="_1、安装-nvm" tabindex="-1">1、安装 NVM <a class="header-anchor" href="#_1、安装-nvm" aria-label="Permalink to &quot;1、安装 NVM&quot;" loading="lazy">​</a></h2><p>当前 NVM 最新版本为 <a href="https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe" loading="lazy" target="_blank" rel="noreferrer">1.1.11</a>，也可以选择<a href="https://github.com/coreybutler/nvm-windows/releases" loading="lazy" target="_blank" rel="noreferrer">其他版本</a></p><p>下载好之后一路双击，中间存在一步是选择 nodejs 存储目录，切记不要选择路径中带有空格的路径即可。</p><p>安装之后，在 NVM 安装路径下，可以找到 settings.txt 文件，这里面就是当前 NVM 的配置信息。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">root:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">D:</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">evelop</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">odejs</span></span>
<span class="line"><span style="color:#FFCB6B;">arch:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span></span>
<span class="line"><span style="color:#FFCB6B;">proxy:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://xxx.xxx.com:port</span></span>
<span class="line"><span style="color:#FFCB6B;">originalpath:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">originalversion:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">node_mirror:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">npm_mirror:</span></span></code></pre></div><p>此时也可以查看环境变量信息，能看到新增了两个环境变量 NVM_HOME 和 NVM_SYMLINK 配置。</p><h2 id="_2、配置代理" tabindex="-1">2、配置代理 <a class="header-anchor" href="#_2、配置代理" aria-label="Permalink to &quot;2、配置代理&quot;" loading="lazy">​</a></h2><p>有些公司的网络环境需要配置代理才能连接上 NODE 的官网，配置代理可以编辑上面的 settings.txt 文件，也可以直接在命令行窗口中执行以下命令进行配置。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置代理</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">代理url地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取消代理</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span></code></pre></div><h2 id="_3、安装-node" tabindex="-1">3、安装 NODE <a class="header-anchor" href="#_3、安装-node" aria-label="Permalink to &quot;3、安装 NODE&quot;" loading="lazy">​</a></h2><p>NVM 安装 NODE 前，可以执行以下命令查看当前可以用的 NODE 版本，其中 LTS 是最新的稳定版本。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看最新可用版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span></span></code></pre></div><p>选择一个版本进行安装，比如安装 18.16.0 版本，使用以下命令</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v18.16.0</span></span></code></pre></div><h2 id="_4、node-版本切换" tabindex="-1">4、NODE 版本切换 <a class="header-anchor" href="#_4、node-版本切换" aria-label="Permalink to &quot;4、NODE 版本切换&quot;" loading="lazy">​</a></h2><p>当你的环境中存在多个 NODE 版本时，可以使用以下命令来进行切换当前 Node 版本</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 首次使用需要打开 NVM 管理版本的功能</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前有哪些版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换版本，如切换到 18.16.0</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18.16</span><span style="color:#C3E88D;">.0</span></span></code></pre></div><h2 id="_5、卸载-node" tabindex="-1">5、卸载 NODE <a class="header-anchor" href="#_5、卸载-node" aria-label="Permalink to &quot;5、卸载 NODE&quot;" loading="lazy">​</a></h2><p>当不需要其中某个 NODE 版本时，可以使用以下命令来进行卸载</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18.16</span><span style="color:#C3E88D;">.0</span></span></code></pre></div><hr>`,22);function r(i,C,y,d,h,D){const s=n("GoogleAdsense");return l(),e("div",null,[c,o(s)])}const A=a(t,[["render",r]]);export{E as __pageData,A as default};