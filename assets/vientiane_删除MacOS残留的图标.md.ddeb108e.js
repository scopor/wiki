import{_ as a,c as e,d as n,e as o,r as t,o as l}from"./app.3aa45f04.js";const A=JSON.parse('{"title":"\u5220\u9664 MacOS \u6B8B\u7559\u7684\u56FE\u6807","description":"MacOS \u542F\u52A8\u53F0\u91CC\u7684\u56FE\u6807\u5220\u4E0D\u6389\u600E\u4E48\u529E.","frontmatter":{"title":"\u5220\u9664 MacOS \u6B8B\u7559\u7684\u56FE\u6807","head":[["meta",{"property":"og:title","content":"\u5220\u9664 MacOS \u6B8B\u7559\u7684\u56FE\u6807"}],["meta",{"name":"description","content":"MacOS \u542F\u52A8\u53F0\u91CC\u7684\u56FE\u6807\u5220\u4E0D\u6389\u600E\u4E48\u529E."}],["meta",{"name":"keywords","content":"nvm, node"}],["meta",{"property":"og:description","content":"MacOS \u542F\u52A8\u53F0\u91CC\u7684\u56FE\u6807\u5220\u4E0D\u6389\u600E\u4E48\u529E."}]]},"headers":[],"relativePath":"vientiane/\u5220\u9664MacOS\u6B8B\u7559\u7684\u56FE\u6807.md"}'),p={name:"vientiane/\u5220\u9664MacOS\u6B8B\u7559\u7684\u56FE\u6807.md"},c=o(`<p>MacOS \u542F\u52A8\u53F0\u91CC\u7684\u56FE\u6807\u5220\u4E0D\u6389\u600E\u4E48\u529E\uFF1F\u6253\u5F00 Terminal\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u66FF\u6362 xxx \u4E3A\u6B8B\u7559\u7684\u56FE\u6807\u540D\u79F0\u6216\u8005\u524D\u7F00\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sqlite3 </span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">find /private/var/folders </span><span style="color:#A6ACCD;">\\(</span><span style="color:#C3E88D;"> -name com.apple.dock.launchpad -a -user </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">USER</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\)</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">2&gt;</span><span style="color:#C3E88D;"> /dev/null</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">/db/db </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DELETE FROM apps WHERE title like &#39;ACCFind%&#39;;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> killall Dock</span></span>
<span class="line"></span></code></pre></div><hr>`,3);function r(i,_,d,D,C,y){const s=t("GoogleAdsense");return l(),e("div",null,[c,n(s)])}const F=a(p,[["render",r]]);export{A as __pageData,F as default};
