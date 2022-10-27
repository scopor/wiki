import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.fa1e887d.js";const u=JSON.parse('{"title":"\u5FAA\u73AF\u8BED\u53E5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FAA\u73AF\u8BED\u53E5","slug":"\u5FAA\u73AF\u8BED\u53E5"},{"level":2,"title":"for \u8BED\u53E5\u5199\u6CD5","slug":"for-\u8BED\u53E5\u5199\u6CD5"},{"level":2,"title":"break \u8BED\u53E5","slug":"break-\u8BED\u53E5"},{"level":2,"title":"continue \u8BED\u53E5","slug":"continue-\u8BED\u53E5"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u5FAA\u73AF\u8BED\u53E5.md","lastUpdated":1666855033000}'),c={name:"go/\u57FA\u7840\u77E5\u8BC6/\u5FAA\u73AF\u8BED\u53E5.md"},t=p(`<h2 id="\u5FAA\u73AF\u8BED\u53E5" tabindex="-1">\u5FAA\u73AF\u8BED\u53E5 <a class="header-anchor" href="#\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a></h2><p>\u5FAA\u73AF\u8BED\u53E5\u53EF\u4EE5\u91CD\u590D\u6267\u884C\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5728 <code>Java</code> \u4E2D\uFF0C\u5FAA\u73AF\u8BED\u53E5\u6709 <code>while</code> \u3001<code>do while</code>\u3001<code>for</code> \u8BED\u53E5\uFF0C\u4F46\u5728 <code>Go</code> \u8BED\u8A00\u4E2D\uFF0C\u53EA\u6709 <code>for</code> \u4E00\u79CD\u5FAA\u73AF\u8BED\u53E5\u3002</p><h2 id="for-\u8BED\u53E5\u5199\u6CD5" tabindex="-1"><code>for</code> \u8BED\u53E5\u5199\u6CD5 <a class="header-anchor" href="#for-\u8BED\u53E5\u5199\u6CD5" aria-hidden="true">#</a></h2><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// for + \u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// for + \u4E09\u4E2A\u8868\u8FBE\u5F0F, \u8868\u8FBE\u5F0F\u521D\u59CB\u5316\u53D8\u91CF, \u8868\u8FBE\u5F0F2\u5982\u679C\u672Atrue\u5219\u5FAA\u73AF\u7EE7\u7EED\uFF0C\u5426\u5219\u63A8\u51FA, \u8868\u8FBE\u5F0F3\u4E3A\u5FAA\u73AF\u540E\u53D8\u91CF\u7684\u53D8\u5316</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">:=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// for range</span></span>
<span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9738\u738B\u522B\u59EC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index %d, movie %s </span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// for \u65E0\u9650\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="break-\u8BED\u53E5" tabindex="-1"><code>break</code> \u8BED\u53E5 <a class="header-anchor" href="#break-\u8BED\u53E5" aria-hidden="true">#</a></h2><p><code>break</code> \u8BED\u53E5\u7528\u4E8E\u7EC8\u6B62\u5FAA\u73AF\u7684\u6267\u884C</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">break</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  num</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"></span></code></pre></div><h2 id="continue-\u8BED\u53E5" tabindex="-1"><code>continue</code> \u8BED\u53E5 <a class="header-anchor" href="#continue-\u8BED\u53E5" aria-hidden="true">#</a></h2><p><code>continue</code> \u8BED\u53E5\u7528\u4E8E\u8DF3\u51FA\u5F53\u524D\u5FAA\u73AF\uFF0C\u5728\u8BE5continue\u4E4B\u540E\u7684\u8BED\u53E5\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u4F46\u662F\u4F1A\u7EE7\u7EED\u4E0B\u4E00\u6B21\u5FAA\u73AF\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">continue</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">7</span></span>
<span class="line"><span style="color:#F78C6C;">9</span></span>
<span class="line"></span></code></pre></div>`,10);function r(D,F,y,C,A,i){const s=e("GoogleAdsense");return o(),a("div",null,[t,l(s)])}const f=n(c,[["render",r]]);export{u as __pageData,f as default};
