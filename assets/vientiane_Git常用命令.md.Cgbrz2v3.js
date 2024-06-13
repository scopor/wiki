import{_ as i,D as a,c as e,I as t,a4 as n,o as l}from"./chunks/framework.D8LZUQkA.js";const m=JSON.parse('{"title":"Git 常用命令","description":"Git 常用命令, commit, merge, branch, rebase, HEAD","frontmatter":{"title":"Git 常用命令","head":[["meta",{"property":"og:title","content":"Git 常用命令, commit, merge, branch, rebase, HEAD"}],["meta",{"name":"description","content":"Git 常用命令, commit, merge, branch, rebase, HEAD"}],["meta",{"name":"keywords","content":"Git 常用命令, commit, merge, branch, rebase, HEAD"}],["meta",{"property":"og:description","content":"Git 常用命令, commit, merge, branch, rebase, HEAD"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"}]]},"headers":[],"relativePath":"vientiane/Git常用命令.md","filePath":"vientiane/Git常用命令.md"}'),h={name:"vientiane/Git常用命令.md"},p=n(`<h1 id="git-常用命令" tabindex="-1">Git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-label="Permalink to &quot;Git 常用命令&quot;">​</a></h1><h2 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h2><p><strong>git commit</strong>, 将当前分支的修改和父节点做比对，将差异打包进行提交</p><h2 id="branch" tabindex="-1">branch <a class="header-anchor" href="#branch" aria-label="Permalink to &quot;branch&quot;">​</a></h2><p>善用分支，早用，多用，创建分支并不会造成存储浪费或内存开销。</p><ul><li>创建分支</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newBranchName</span></span></code></pre></div><ul><li>切换分支</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newBranchName</span></span></code></pre></div><ul><li>创建并切换分支</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newBranchName</span></span></code></pre></div><h2 id="merge" tabindex="-1">merge <a class="header-anchor" href="#merge" aria-label="Permalink to &quot;merge&quot;">​</a></h2><p>有时候我们新创建了一个分支，并在上面开发了某个新的需求，开发结束后我们将其合并回主线分支。</p><ul><li>bugFix 分支修改， 合并到 main 分支</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到 main 分支，执行以下命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bugFix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># main 分支合入到 bugFix 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bugFix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><h2 id="rebase" tabindex="-1">rebase <a class="header-anchor" href="#rebase" aria-label="Permalink to &quot;rebase&quot;">​</a></h2><p><strong>rebase</strong> 是取出一系列提交记录，复制它们。使用 <strong>rebase</strong> 可以创造更线性的提交历史，代码库的提交历史变得异常清晰。</p><p>假设当前我们处于 bugFix 分支, 我们将该分支上的修改移到 main 分支，使得两个分支的功能看起来是顺序开发（实际上是并行开发）</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行 rebase, 此时 bugFix 的父节点变成了 main，且切换换回了 main 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 我们再将 main 分支 rebase 到 bugFix 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bugFix</span></span></code></pre></div><h2 id="head" tabindex="-1">HEAD <a class="header-anchor" href="#head" aria-label="Permalink to &quot;HEAD&quot;">​</a></h2><p>HEAD 是对当前检出记录的符号引用，总是指向当前分支上最近一次提交记录。</p><h2 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log&quot;">​</a></h2><p>移动 <strong>head</strong> 是通过提交记录的哈希值来操作的，而查看哈希值则需要用到 <strong>git log</strong> 命令。哈希值基于 <strong>SHA-1</strong> 生成，长度 40 位，<strong>git</strong> 为我们提供了便捷的操作，只关注前几位即可。</p><h2 id="相对引用" tabindex="-1">相对引用 <strong>^</strong> <a class="header-anchor" href="#相对引用" aria-label="Permalink to &quot;相对引用 **^**&quot;">​</a></h2><p>在引用名称后面使用 <strong>^</strong> 可以寻找指定提交记录的父提交，比如 git checkout main^ 代表寻找 main 的父节点, 可以连续使用多个 ^ ，如 git checkout main^^</p><h2 id="多步操作符" tabindex="-1">多步操作符 <strong>～</strong> <a class="header-anchor" href="#多步操作符" aria-label="Permalink to &quot;多步操作符 **～**&quot;">​</a></h2><p>如果要在提交记录树上移动多步时，使用 <strong>～</strong> 操作符号可以快速达成，起后面可以跟数字，代表移动几次，如果不加数字，效果等同 <strong>^</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  将 main 分支强制指向 HEAD 的第 3 级父提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~3</span></span></code></pre></div><h2 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;reset&quot;">​</a></h2><p>本地修改回退，通过把分支记录回退几个提交记录来实现撤销改动。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销本次提交，回退到上一次提交的位置，且本地也不知道撤销之前的提交记录了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span></code></pre></div><h2 id="revert" tabindex="-1">revert <a class="header-anchor" href="#revert" aria-label="Permalink to &quot;revert&quot;">​</a></h2><p>远程提交回退，会产生一个与本次提交回退的新的 commit 记录，待推送到远程后，代表撤销本次提交，其他远程小伙伴也可以看到此次撤销。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span></span></code></pre></div><h2 id="cherry-pick" tabindex="-1">cherry-pick <a class="header-anchor" href="#cherry-pick" aria-label="Permalink to &quot;cherry-pick&quot;">​</a></h2><p><strong>cherry-pick</strong> 可以将一些提交复制到当前所在的位置(HEAD)下面。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cherry-pick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">号</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="交互式-rebase" tabindex="-1">交互式 rebase <a class="header-anchor" href="#交互式-rebase" aria-label="Permalink to &quot;交互式 rebase&quot;">​</a></h2><p>当你清楚你想要的提交记录的时候，使用 <strong>cherry-pick</strong> 再好不过，如果不清楚呢？ 就需要用到交互式的 <strong>rebase</strong>。 交互式 <strong>rebase</strong> 指的是使用带参数 <strong>--interactive</strong> 的 <strong>rebase</strong> 命令, 简写为 <strong>-i</strong>，执行该命令会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将最后提交的 4 条记录打开，重新调整</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~4</span></span></code></pre></div><hr>`,41);function r(o,k,c,d,g,F){const s=a("GoogleAdsense");return l(),e("div",null,[p,t(s)])}const u=i(h,[["render",r]]);export{m as __pageData,u as default};
