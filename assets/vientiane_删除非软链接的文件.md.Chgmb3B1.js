import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.4sasYC7X.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vientiane/删除非软链接的文件.md","filePath":"vientiane/删除非软链接的文件.md"}'),e={name:"vientiane/删除非软链接的文件.md"},n=t('<p>为了安全考虑，删除前需要判断文件是否是软链接，非软链接文件再执行删除命令，可以使用如下命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> l</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -delete</span></span></code></pre></div><p>也可以使用</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> l</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span></span></code></pre></div><ul><li>/path/to/directory: 您要操作的目录的路径。</li><li>! -type l: 查找不属于符号链接类型的文件和目录。 ! 代表 “非”。</li><li>-exec rm -rf {} +: 对找到的结果执行 rm -rf 命令。 {} 代表找到的文件或目录，+ 会将多个文件或目录传递给一个 rm 命令执行，提高效率。</li></ul>',5),h=[n];function p(l,k,r,d,o,c){return a(),i("div",null,h)}const g=s(e,[["render",p]]);export{_ as __pageData,g as default};
