import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.D_7_7Osg.js";const g=JSON.parse('{"title":"NVM 管理 NODE 版本","description":"当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本.","frontmatter":{"title":"NVM 管理 NODE 版本","head":[["meta",{"property":"og:title","content":"NVM 管理 NODE 版本"}],["meta",{"name":"description","content":"当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本."}],["meta",{"name":"keywords","content":"nvm, node"}],["meta",{"property":"og:description","content":"当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本."}]]},"headers":[],"relativePath":"vientiane/nvm.md","filePath":"vientiane/nvm.md"}'),t={name:"vientiane/nvm.md"},e=n(`<p>当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本。</p><h2 id="_1、安装-nvm" tabindex="-1">1、安装 NVM <a class="header-anchor" href="#_1、安装-nvm" aria-label="Permalink to &quot;1、安装 NVM&quot;">​</a></h2><p>当前 NVM 最新版本为 <a href="https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe" target="_blank" rel="noreferrer">1.1.11</a>，也可以选择<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">其他版本</a></p><p>下载好之后一路双击，中间存在一步是选择 nodejs 存储目录，切记不要选择路径中带有空格的路径即可。</p><p>安装之后，在 NVM 安装路径下，可以找到 settings.txt 文件，这里面就是当前 NVM 的配置信息。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">root:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">evelop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">vm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">evelop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">odejs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arch:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://xxx.xxx.com:port</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">originalpath:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">originalversion:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node_mirror:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm_mirror:</span></span></code></pre></div><p>此时也可以查看环境变量信息，能看到新增了两个环境变量 NVM_HOME 和 NVM_SYMLINK 配置。</p><h2 id="_2、配置代理" tabindex="-1">2、配置代理 <a class="header-anchor" href="#_2、配置代理" aria-label="Permalink to &quot;2、配置代理&quot;">​</a></h2><p>有些公司的网络环境需要配置代理才能连接上 NODE 的官网，配置代理可以编辑上面的 settings.txt 文件，也可以直接在命令行窗口中执行以下命令进行配置。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 代理url地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 取消代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span></span></code></pre></div><h2 id="_3、安装-node" tabindex="-1">3、安装 NODE <a class="header-anchor" href="#_3、安装-node" aria-label="Permalink to &quot;3、安装 NODE&quot;">​</a></h2><p>NVM 安装 NODE 前，可以执行以下命令查看当前可以用的 NODE 版本，其中 LTS 是最新的稳定版本。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看最新可用版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span></span></code></pre></div><p>选择一个版本进行安装，比如安装 18.16.0 版本，使用以下命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v18.16.0</span></span></code></pre></div><h2 id="_4、node-版本切换" tabindex="-1">4、NODE 版本切换 <a class="header-anchor" href="#_4、node-版本切换" aria-label="Permalink to &quot;4、NODE 版本切换&quot;">​</a></h2><p>当你的环境中存在多个 NODE 版本时，可以使用以下命令来进行切换当前 Node 版本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 首次使用需要打开 NVM 管理版本的功能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前有哪些版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换版本，如切换到 18.16.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18.16.0</span></span></code></pre></div><h2 id="_5、卸载-node" tabindex="-1">5、卸载 NODE <a class="header-anchor" href="#_5、卸载-node" aria-label="Permalink to &quot;5、卸载 NODE&quot;">​</a></h2><p>当不需要其中某个 NODE 版本时，可以使用以下命令来进行卸载</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18.16.0</span></span></code></pre></div><h2 id="_6、npm-代理" tabindex="-1">6、NPM 代理 <a class="header-anchor" href="#_6、npm-代理" aria-label="Permalink to &quot;6、NPM 代理&quot;">​</a></h2><p>NPM 配置代理</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://域名:port</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> strict-ssl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><h2 id="_7、yarn-代理" tabindex="-1">7、Yarn 代理 <a class="header-anchor" href="#_7、yarn-代理" aria-label="Permalink to &quot;7、Yarn 代理&quot;">​</a></h2><p>Yarn 复用 NPM 代理</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> strict-ssl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div>`,27),h=[e];function p(l,k,r,d,o,F){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};