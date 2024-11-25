import{_ as s,c as a,a3 as t,o as e}from"./chunks/framework.B-UogkBA.js";const c=JSON.parse('{"title":"删除 MacOS 残留的图标","description":"MacOS 启动台里的图标删不掉怎么办.","frontmatter":{"title":"删除 MacOS 残留的图标","head":[["meta",{"property":"og:title","content":"删除 MacOS 残留的图标"}],["meta",{"name":"description","content":"MacOS 启动台里的图标删不掉怎么办."}],["meta",{"name":"keywords","content":"nvm, node"}],["meta",{"property":"og:description","content":"MacOS 启动台里的图标删不掉怎么办."}]]},"headers":[],"relativePath":"vientiane/删除MacOS残留的图标.md","filePath":"vientiane/删除MacOS残留的图标.md"}'),n={name:"vientiane/删除MacOS残留的图标.md"};function l(p,i,h,k,r,d){return e(),a("div",null,i[0]||(i[0]=[t('<p>MacOS 启动台里的图标删不掉怎么办？打开 Terminal，执行以下命令，替换 xxx 为残留的图标名称或者前缀。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sqlite3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /private/var/folders</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple.dock.launchpad</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $USER </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/db/db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;DELETE FROM apps WHERE title like &#39;ACCFind%&#39;;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">killall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Dock</span></span></code></pre></div>',2)]))}const F=s(n,[["render",l]]);export{c as __pageData,F as default};
