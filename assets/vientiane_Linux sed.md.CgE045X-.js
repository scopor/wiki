import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DhMiq51s.js";const c=JSON.parse('{"title":"Linux sed","description":"Linux sed 命令，修改文件内容.","frontmatter":{"title":"Linux sed","head":[["meta",{"property":"og:title","content":"Linux sed 命令"}],["meta",{"name":"description","content":"Linux sed 命令，修改文件内容."}],["meta",{"name":"keywords","content":"Linux, sed"}],["meta",{"property":"og:description","content":"Linux sed 命令，修改文件内容."}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/Linux%20sed"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/Linux%20sed"}]]},"headers":[],"relativePath":"vientiane/Linux sed.md","filePath":"vientiane/Linux sed.md"}'),e={name:"vientiane/Linux sed.md"},l=n(`<h1 id="sed-命令是什么" tabindex="-1">sed 命令是什么 <a class="header-anchor" href="#sed-命令是什么" aria-label="Permalink to &quot;sed 命令是什么&quot;">​</a></h1><p><strong>sed</strong>, 即 <strong>Linux</strong> 上的流编辑器, 能够结合正则表达式进行文本处理。</p><h2 id="替换操作" tabindex="-1">替换操作 <a class="header-anchor" href="#替换操作" aria-label="Permalink to &quot;替换操作&quot;">​</a></h2><h3 id="替换操作-s-命令" tabindex="-1">替换操作: <strong>s</strong> 命令 <a class="header-anchor" href="#替换操作-s-命令" aria-label="Permalink to &quot;替换操作: **s** 命令&quot;">​</a></h3><p>替换每行第一个匹配的值，打印替换结果，不对文件做实际修改。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/oldValue/newValue/&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h3 id="n-选项-和-p-命令" tabindex="-1"><strong>-n</strong> 选项 和 <strong>p</strong> 命令 <a class="header-anchor" href="#n-选项-和-p-命令" aria-label="Permalink to &quot;**-n** 选项 和 **p** 命令&quot;">​</a></h3><p>替换每行第一个匹配的值，只打印被替换的行，不对文件做实际修改。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/oldValue/newValue/p&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h3 id="全面替换命令-g-命令" tabindex="-1">全面替换命令: <strong>g</strong> 命令 <a class="header-anchor" href="#全面替换命令-g-命令" aria-label="Permalink to &quot;全面替换命令: **g** 命令&quot;">​</a></h3><p>替换每行所有匹配的值，打印替换结果，不对文件做实际修改。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/oldValue/newValue/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h3 id="替换后保存-i-选项" tabindex="-1">替换后保存: <strong>i</strong> 选项 <a class="header-anchor" href="#替换后保存-i-选项" aria-label="Permalink to &quot;替换后保存: **i** 选项&quot;">​</a></h3><p>配合使用 <strong>-i</strong>、 <strong>s</strong>、 <strong>g</strong> ，替换每行所有匹配的值，不打印替换结果，对文件做实际修改。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/oldValue/newValue/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h3 id="从该行第n处匹配开始替换-ng" tabindex="-1">从该行第N处匹配开始替换：<strong>/Ng</strong> <a class="header-anchor" href="#从该行第n处匹配开始替换-ng" aria-label="Permalink to &quot;从该行第N处匹配开始替换：**/Ng**&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ababababab&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/ab/AB/3g&#39;</span></span></code></pre></div><h2 id="定界符" tabindex="-1">定界符: <strong>/</strong> <a class="header-anchor" href="#定界符" aria-label="Permalink to &quot;定界符: **/**&quot;">​</a></h2><p>以上命令均使用 <strong>/</strong> 作为定界符，也可以使用其他任意的定界符，比如 <strong>:</strong>、 **|**等</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;abababab&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s:ab:AB:g&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;abababab&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s|ab|AB|g&#39;</span></span></code></pre></div><p>但是当定界符出现在 <strong>被匹配、要替换成的内容</strong> 时需要进行转义</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ab:ab:ab:ab&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s:\\:ab:\\:AB:g&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ab|ab|ab|ab&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s|\\|ab|\\|AB|g&#39;</span></span></code></pre></div><h2 id="删除操作-d-命令" tabindex="-1">删除操作: <strong>d</strong> 命令 <a class="header-anchor" href="#删除操作-d-命令" aria-label="Permalink to &quot;删除操作: **d** 命令&quot;">​</a></h2><h3 id="删除空白行" tabindex="-1">删除空白行 <a class="header-anchor" href="#删除空白行" aria-label="Permalink to &quot;删除空白行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只打印，不修改文件，如要修改，加上 -i 选项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^$/d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/./p&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h3 id="删除文件的第-n-行" tabindex="-1">删除文件的第 N 行 <a class="header-anchor" href="#删除文件的第-n-行" aria-label="Permalink to &quot;删除文件的第 N 行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除第 2 行，打印结果，不删除文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除第 3 行到末尾的所有行，打印结果，不删除文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;3,$d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除最后一行，打印结果，不删除文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;$d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除所有开头是Hello的行，打印结果，不删除文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^Hello/d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除所有结尾是Hello的行，打印结果，不删除文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/Hello$/d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><p>以上操作如要修改文件内容，加上 -i 选项</p><h2 id="追加-a-命令" tabindex="-1">追加: <strong>a\\</strong> 命令 <a class="header-anchor" href="#追加-a-命令" aria-label="Permalink to &quot;追加: **a\\\\** 命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在以 Hello 开头的行后面添加 world</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^Hello/a\\world&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在第 N 行后插入 world，例如第 2 行后</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2a\\world&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><p>以上操作如要修改文件内容，加上 -i 选项</p><h2 id="插入-i-命令" tabindex="-1">插入: <strong>i\\</strong> 命令 <a class="header-anchor" href="#插入-i-命令" aria-label="Permalink to &quot;插入: **i\\\\** 命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在以 Hello 开头的行前面添加 world</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^Hello/i\\world&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在第 N 行前插入 world，例如第 2 行后</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2i\\world&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><p>以上操作如要修改文件内容，加上 -i 选项</p><h2 id="替换指定行-c-命令" tabindex="-1">替换指定行: <strong>c\\</strong> 命令 <a class="header-anchor" href="#替换指定行-c-命令" aria-label="Permalink to &quot;替换指定行: **c\\\\** 命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将以 Hello 开头的行替换成 world</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^Hello/c\\world&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定一个范围，作为一个整体被替换，如将前 3 行作为一个整体替换成 world</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1,3c\\word&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><p>那如果是想将前 3 行的每一行都替换成 world，name可以使用循环指令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1{:m;s/.*/world/;n;4!bm}&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>:m 是设置一个循环标签<br> s/.*/world/ 是用 world 字符替换匹配到的每行内容<br> n 是读取下一行<br> 4! 是读到第四行退出循环，终止操作,如果没有，则继续循环。<br> bm 是如果没有到第四行就跳转到 m 继续循环</p></div><p>以上操作如要修改文件内容，加上 -i 选项</p><h2 id="多点编辑-e-选项" tabindex="-1">多点编辑: <strong>e</strong> 选项 <a class="header-anchor" href="#多点编辑-e-选项" aria-label="Permalink to &quot;多点编辑: **e** 选项&quot;">​</a></h2><p><strong>-e</strong> 选项允许在同一行里执行多条命令，且命令的执行顺序对结果是有影响的，排在后面的命令是针对前面命令的执行结果做的操作。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除前 2 行后，对每一行的 Hello 替换成 Hi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1,2d&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/Hello/Hi/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><p>以上操作如要修改文件内容，加上 -i 选项</p><h2 id="从文件读取-r-命令" tabindex="-1">从文件读取: <strong>r</strong> 命令 <a class="header-anchor" href="#从文件读取-r-命令" aria-label="Permalink to &quot;从文件读取: **r** 命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从 otherFile 读取内容，显示在 file 文件中以 Hello 开始的行的下面</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只打印，file 文件内容未修改，若要修改，可加上 -i 选项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^Hello/r otherFile&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h2 id="写入文件-w-命令" tabindex="-1">写入文件: <strong>w</strong> 命令 <a class="header-anchor" href="#写入文件-w-命令" aria-label="Permalink to &quot;写入文件: **w** 命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 file 文件中以 Hello 开始的行，都写入到 otherFile 中, otherFile 立即生效且覆盖原有内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^Hello/w otherFile&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><h2 id="已匹配标记" tabindex="-1">已匹配标记: <strong>&amp;</strong> <a class="header-anchor" href="#已匹配标记" aria-label="Permalink to &quot;已匹配标记: **&amp;**&quot;">​</a></h2><p><strong>&amp;</strong> 标记代表匹配的每一个值</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;中文 English 33&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\w\\+/[&amp;]/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [中文] [English] [33]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;中文 English 33&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\w\\+/&amp;@/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中文@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> English@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 33@</span></span></code></pre></div>`,51),t=[l];function h(p,k,d,r,o,g){return a(),i("div",null,t)}const u=s(e,[["render",h]]);export{c as __pageData,u as default};
