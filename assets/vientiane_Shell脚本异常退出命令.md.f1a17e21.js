import{_ as s,c as n,o as a,e as l}from"./app.f6eaa947.js";const A=JSON.parse('{"title":"shell \u811A\u672C\u4E2D\u5E38\u7528\u7684\u5F02\u5E38\u9000\u51FA\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"set -e","slug":"set-e","link":"#set-e","children":[]},{"level":2,"title":"set -u","slug":"set-u","link":"#set-u","children":[]},{"level":2,"title":"set -o pipefail","slug":"set-o-pipefail","link":"#set-o-pipefail","children":[]},{"level":2,"title":"trap","slug":"trap","link":"#trap","children":[]},{"level":2,"title":"shell \u811A\u672C\u4E2D\u5E38\u7528\u7684\u4FE1\u53F7","slug":"shell-\u811A\u672C\u4E2D\u5E38\u7528\u7684\u4FE1\u53F7","link":"#shell-\u811A\u672C\u4E2D\u5E38\u7528\u7684\u4FE1\u53F7","children":[]}],"relativePath":"vientiane/Shell\u811A\u672C\u5F02\u5E38\u9000\u51FA\u547D\u4EE4.md"}'),e={name:"vientiane/Shell\u811A\u672C\u5F02\u5E38\u9000\u51FA\u547D\u4EE4.md"},o=l(`<h1 id="shell-\u811A\u672C\u4E2D\u5E38\u7528\u7684\u5F02\u5E38\u9000\u51FA\u547D\u4EE4" tabindex="-1"><strong>shell</strong> \u811A\u672C\u4E2D\u5E38\u7528\u7684\u5F02\u5E38\u9000\u51FA\u547D\u4EE4 <a class="header-anchor" href="#shell-\u811A\u672C\u4E2D\u5E38\u7528\u7684\u5F02\u5E38\u9000\u51FA\u547D\u4EE4" aria-hidden="true" loading="lazy">#</a></h1><p>\u7F16\u5199 <strong>shell</strong> \u811A\u672C\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u53EF\u9760\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <strong>set -e</strong>\uFF0C<strong>set -u</strong>\uFF0C<strong>set -o pipefail</strong>\uFF0C<strong>trap</strong> \u6765\u5E94\u5BF9\u5F02\u5E38\u540E\u7684\u9000\u51FA\u64CD\u4F5C\u3002</p><h2 id="set-e" tabindex="-1"><strong>set -e</strong> <a class="header-anchor" href="#set-e" aria-hidden="true" loading="lazy">#</a></h2><p>\u5F53\u67D0\u6761\u547D\u4EE4\u6267\u884C\u5931\u8D25\u65F6\uFF0C\u7ACB\u5373\u9000\u51FA\u811A\u672C\uFF0C\u4E0D\u518D\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><p>\u793A\u4F8B\uFF1A<strong>rm -rf /tmp/test</strong> \u547D\u4EE4\u4F1A\u6267\u884C\u5931\u8D25\uFF0C\u56E0\u4E3A <strong>/tmp/test</strong> \u4E0D\u5B58\u5728\uFF0C\u6B64\u65F6\u811A\u672C\u4F1A\u7ACB\u5373\u9000\u51FA\uFF0C\u4E0D\u4F1A\u6267\u884C <strong>echo &quot;Test is done&quot;</strong>\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -e</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf /tmp/test</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="set-u" tabindex="-1"><strong>set -u</strong> <a class="header-anchor" href="#set-u" aria-hidden="true" loading="lazy">#</a></h2><p>\u5F53\u4F7F\u7528\u672A\u5B9A\u4E49\u7684\u53D8\u91CF\u65F6\uFF0C\u7ACB\u5373\u9000\u51FA\u811A\u672C\uFF0C\u4E0D\u518D\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><p>\u793A\u4F8B\uFF1A<strong>echo $undefined_variable</strong> \u547D\u4EE4\u4F1A\u6267\u884C\u5931\u8D25\uFF0C\u56E0\u4E3A <strong>$undefined_variable</strong> \u53D8\u91CF\u672A\u5B9A\u4E49\uFF0C\u6B64\u65F6\u811A\u672C\u4F1A\u7ACB\u5373\u9000\u51FA\uFF0C\u4E0D\u4F1A\u6267\u884C <strong>echo &quot;Test is done&quot;</strong>\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -u</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">undefined_variable</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="set-o-pipefail" tabindex="-1"><strong>set -o pipefail</strong> <a class="header-anchor" href="#set-o-pipefail" aria-hidden="true" loading="lazy">#</a></h2><p>\u5F53\u7BA1\u9053\u4E2D\u7684\u4EFB\u4F55\u4E00\u6761\u547D\u4EE4\u6267\u884C\u5931\u8D25\u65F6\uFF0C\u7ACB\u5373\u9000\u51FA\u811A\u672C\uFF0C\u4E0D\u518D\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><p>\u793A\u4F8B\uFF1A<strong>ls /tmp/test | grep test</strong> \u547D\u4EE4\u4F1A\u6267\u884C\u5931\u8D25\uFF0C\u56E0\u4E3A <strong>/tmp/test</strong> \u4E0D\u5B58\u5728\uFF0C\u6B64\u65F6\u811A\u672C\u4F1A\u7ACB\u5373\u9000\u51FA\uFF0C\u4E0D\u4F1A\u6267\u884C <strong>echo &quot;Test is done&quot;</strong>\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -o pipefail</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ls /tmp/test </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#82AAFF;">test</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="trap" tabindex="-1"><strong>trap</strong> <a class="header-anchor" href="#trap" aria-hidden="true" loading="lazy">#</a></h2><p>\u5F53\u63A5\u6536\u5230\u6307\u5B9A\u7684\u4FE1\u53F7\u65F6\uFF0C\u7ACB\u5373\u6267\u884C\u6307\u5B9A\u7684\u547D\u4EE4\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>trap</strong> \u53EF\u4EE5\u63A5\u6536 <strong>SIGHUP</strong>\u3001<strong>SIGINT</strong>\u3001<strong>SIGQUIT</strong>\u3001<strong>SIGTERM</strong> \u7B49\u4FE1\u53F7\u3002 <strong>trap</strong> \u4E0D\u80FD\u63A5\u6536 <strong>SIGKILL</strong> \u4FE1\u53F7\uFF0C\u56E0\u4E3A <strong>SIGKILL</strong> \u4FE1\u53F7\u4E0D\u80FD\u88AB\u6355\u83B7\u548C\u5FFD\u7565\u3002</p></div><p>\u793A\u4F8B\uFF1A\u5F53\u63A5\u6536\u5230 <strong>SIGHUP</strong> \u4FE1\u53F7\u65F6\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C <strong>echo &#39;Received signal SIGHUP&#39;</strong> \u547D\u4EE4\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C <strong>echo &quot;Test is done&quot;</strong>\u3002</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"><span style="color:#82AAFF;">trap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo &#39;Received signal SIGHUP&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> SIGHUP</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> -SIGHUP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">$</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Test is done</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="shell-\u811A\u672C\u4E2D\u5E38\u7528\u7684\u4FE1\u53F7" tabindex="-1"><strong>shell</strong> \u811A\u672C\u4E2D\u5E38\u7528\u7684\u4FE1\u53F7 <a class="header-anchor" href="#shell-\u811A\u672C\u4E2D\u5E38\u7528\u7684\u4FE1\u53F7" aria-hidden="true" loading="lazy">#</a></h2><ul><li>SIGHUP\uFF081\uFF09\uFF1A\u6302\u8D77\u4FE1\u53F7\uFF0C\u5F53\u7528\u6237\u7EC8\u7AEF\u8FDE\u63A5\u6302\u65AD\u65F6\uFF0C\u8BE5\u4FE1\u53F7\u4F1A\u53D1\u9001\u7ED9\u8FDB\u7A0B\u3002</li><li>SIGINT\uFF082\uFF09\uFF1A\u4E2D\u65AD\u4FE1\u53F7\uFF0C\u5F53\u7528\u6237\u6309\u4E0B <strong>Ctrl+C</strong> \u65F6\uFF0C\u8BE5\u4FE1\u53F7\u4F1A\u53D1\u9001\u7ED9\u8FDB\u7A0B\u3002</li><li>SIGQUIT\uFF083\uFF09\uFF1A\u9000\u51FA\u4FE1\u53F7\uFF0C\u5F53\u7528\u6237\u6309\u4E0B *<em>Ctrl+*</em> \u65F6\uFF0C\u8BE5\u4FE1\u53F7\u4F1A\u53D1\u9001\u7ED9\u8FDB\u7A0B\u3002</li><li>SIGKILL\uFF089\uFF09\uFF1A\u6740\u6B7B\u4FE1\u53F7\uFF0C\u8BE5\u4FE1\u53F7\u4E0D\u80FD\u88AB\u6355\u83B7\u548C\u5FFD\u7565\uFF0C\u7528\u4E8E\u5F3A\u5236\u7EC8\u6B62\u8FDB\u7A0B\u3002</li><li>SIGTERM\uFF0815\uFF09\uFF1A\u7EC8\u6B62\u4FE1\u53F7\uFF0C\u8BE5\u4FE1\u53F7\u53EF\u4EE5\u88AB\u6355\u83B7\u548C\u5FFD\u7565\uFF0C\u7528\u4E8E\u6B63\u5E38\u7EC8\u6B62\u8FDB\u7A0B\u3002</li></ul>`,21),t=[o];function p(r,c,i,h,g,d){return a(),n("div",null,t)}const D=s(e,[["render",p]]);export{A as __pageData,D as default};
