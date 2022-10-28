import{_ as l,c as o,a as s,b as n,d as p,e,o as c,r as t}from"./app.b9960bd9.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8DF3\u8F6C\u8BED\u53E5","slug":"\u8DF3\u8F6C\u8BED\u53E5","link":"#\u8DF3\u8F6C\u8BED\u53E5","children":[]},{"level":2,"title":"\u6761\u4EF6\u9650\u5236","slug":"\u6761\u4EF6\u9650\u5236","link":"#\u6761\u4EF6\u9650\u5236","children":[]}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u8DF3\u8F6C\u8BED\u53E5.md","lastUpdated":1666940061000}'),r={name:"go/\u57FA\u7840\u77E5\u8BC6/\u8DF3\u8F6C\u8BED\u53E5.md"},D=e(`<h2 id="\u8DF3\u8F6C\u8BED\u53E5" tabindex="-1">\u8DF3\u8F6C\u8BED\u53E5 <a class="header-anchor" href="#\u8DF3\u8F6C\u8BED\u53E5" aria-hidden="true">#</a></h2><p><code>goto</code> \u8BED\u53E5\u662F <code>Go</code> \u8BED\u8A00\u4E2D\u7684\u8DF3\u8F6C\u8BED\u53E5\uFF0C\u540E\u9762\u7D27\u8DDF\u4E00\u4E2A\u6807\u7B7E\uFF0C\u8BE5\u6807\u7B7E\u4EE3\u8868\u4E00\u4E2A\u4EE3\u7801\u6BB5\u7684\u6267\u884C\u8D77\u70B9\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">goto</span><span style="color:#A6ACCD;"> label</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">label code</span></span>
<span class="line"></span></code></pre></div><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winter is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">goto</span><span style="color:#A6ACCD;"> label</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winter is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  label</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Summer is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">Winter is coming</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Summer is coming</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6761\u4EF6\u9650\u5236" tabindex="-1">\u6761\u4EF6\u9650\u5236 <a class="header-anchor" href="#\u6761\u4EF6\u9650\u5236" aria-hidden="true">#</a></h2><p><code>goto</code> \u8BED\u53E5\u548C\u6807\u7B7E\u4E4B\u95F4\u4E0D\u80FD\u5B58\u5728\u53D8\u91CF\u7684\u5B9A\u4E49\uFF0C\u5426\u5219\u4F1A\u7F16\u8BD1\u62A5\u9519</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winter is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">goto</span><span style="color:#A6ACCD;"> label</span></span>
<span class="line"><span style="color:#A6ACCD;">  num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  label</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Summer is coming.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u62A5\u9519\u4FE1\u606F</span></span>
<span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">main</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">go</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">goto</span><span style="color:#A6ACCD;"> label jumps over declaration of num at </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">main</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">go</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">6</span></span>
<span class="line"></span></code></pre></div>`,7),F=s("code",null,"goto",-1),y=s("code",null,"break",-1),i=s("code",null,"continue",-1);function C(A,d,u,m,g,_){const a=t("GoogleAdsense");return c(),o("div",null,[D,s("p",null,[F,n(" \u8BED\u53E5\u53EF\u4EE5\u914D\u5408\u5176\u4ED6\u6761\u4EF6\u5B9E\u73B0\u7C7B\u4F3C "),y,n("\u3001"),i,n(" \u7B49\u6548\u679C\u3002"),p(a)])])}const b=l(r,[["render",C]]);export{f as __pageData,b as default};
