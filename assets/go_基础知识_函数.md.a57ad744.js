import{_ as s,c as n,o as a,d as l}from"./app.e3e9c775.js";const i=JSON.parse('{"title":"\u51FD\u6570\u5B9A\u4E49","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570\u5B9A\u4E49","slug":"\u51FD\u6570\u5B9A\u4E49"},{"level":2,"title":"Go \u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D","slug":"go-\u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D"},{"level":2,"title":"\u51FD\u6570\u8FD4\u56DE\u503C","slug":"\u51FD\u6570\u8FD4\u56DE\u503C"},{"level":2,"title":"\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536","slug":"\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536"},{"level":2,"title":"\u51FD\u6570\u7C7B\u578B","slug":"\u51FD\u6570\u7C7B\u578B"},{"level":2,"title":"\u53EF\u53D8\u53C2\u6570","slug":"\u53EF\u53D8\u53C2\u6570"},{"level":2,"title":"main \u51FD\u6570 \u548C init \u51FD\u6570","slug":"main-\u51FD\u6570-\u548C-init-\u51FD\u6570"},{"level":2,"title":"\u51FD\u6570\u4F5C\u7528\u57DF","slug":"\u51FD\u6570\u4F5C\u7528\u57DF"},{"level":2,"title":"\u533F\u540D\u51FD\u6570","slug":"\u533F\u540D\u51FD\u6570"},{"level":2,"title":"\u95ED\u5305","slug":"\u95ED\u5305"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u51FD\u6570.md","lastUpdated":1665674648000}'),p={name:"go/\u57FA\u7840\u77E5\u8BC6/\u51FD\u6570.md"},o=l(`<h2 id="\u51FD\u6570\u5B9A\u4E49" tabindex="-1">\u51FD\u6570\u5B9A\u4E49 <a class="header-anchor" href="#\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a></h2><blockquote><p>\u51FD\u6570\u58F0\u660E\uFF0C\u4E3B\u8981\u5305\u542B <code>func</code> \u5173\u952E\u5B57\uFF0C \u8FD4\u56DE\u503C\u7C7B\u578B <code>return_type</code>\uFF08\u5982 <code>c int</code> \u6216\u4E0D\u6307\u5B9A\u53D8\u91CF\u540D <code>c</code>\uFF09\uFF0C\u548C\u5165\u53C2 <code>parameter_list</code> (\u5982 <code>a int, b int</code>)</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u51FD\u6570\u5B9A\u4E49\u7ED3\u6784</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">parameter_list</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">return_type</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u51FD\u6570\u4F53</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u51FD\u6570\u5B9A\u4E49\u793A\u4F8B</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="go-\u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D" tabindex="-1"><code>Go</code> \u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D <a class="header-anchor" href="#go-\u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D" aria-hidden="true">#</a></h2><blockquote><p>\u540C\u4E00\u4E2A\u5305\u4E0D\u80FD\u76F8\u540C\u540D\u79F0\u7684\u51FD\u6570\uFF0C\u5982\u4E0B\u7F16\u8BD1\u5668\u4F1A\u62A5\u9519\uFF1Afoo redeclared int this package</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51FD\u6570\u8FD4\u56DE\u503C" tabindex="-1">\u51FD\u6570\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u51FD\u6570\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><blockquote><p><code>Go</code> \u51FD\u6570\u652F\u6301\u8FD4\u56DE\u503C\u4E0D\u5199\u53D8\u91CF\u540D\uFF0C\u5982\u4E0B\u9762\u7684\u51CF\u6CD5\u64CD\u4F5C\uFF0C<code>c</code> \u53EF\u5FFD\u7565\u6389\uFF0C\u4E14\u53EA\u6709\u4E00\u4E2A\u8FD4\u56DE\u503C\u65F6\uFF0C\u4E0D\u9700\u8981 <code>()</code> \u5305\u88C5</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u5F53\u8FD4\u56DE\u503C\u5B58\u5728\u547D\u540D\uFF0C\`return\` \u53EF\u4EE5\u4E0D\u6307\u5B9A\u8FD4\u56DE\u503C\u53D8\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5F53\u8FD4\u56DE\u503C\u4E0D\u5B58\u5728\u547D\u540D\uFF0C\`return\` \u540E\u9762\u5FC5\u987B\u663E\u5F0F\u8FD4\u56DE\u7ED3\u679C</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sub</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536" tabindex="-1">\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536 <a class="header-anchor" href="#\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536" aria-hidden="true">#</a></h2><blockquote><p>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u8D4B\u7ED9\u53D8\u91CF, \u540C\u65F6\u67D0\u4E9B\u8FD4\u56DE\u503C\u4E5F\u53EF\u4EE5\u6807\u8BC6\u7B26 <code>_</code> \u5FFD\u7565\u63A5\u6536</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sum </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sub </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">    sub </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fun </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 300</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sub </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sub</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 300, -100</span></span>
<span class="line"><span style="color:#A6ACCD;">    _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sub </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u6CE8\u610F\u8FD9\u91CC\u5DF2\u7ECF\u4E0D\u5B58\u5728\u65B0\u7684\u53D8\u91CF\uFF0C\u5C5E\u4E8E\u91CD\u65B0\u8D4B\u503C\uFF0C\u4F7F\u7528 \`=\` \u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51FD\u6570\u7C7B\u578B" tabindex="-1">\u51FD\u6570\u7C7B\u578B <a class="header-anchor" href="#\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a></h2><blockquote><p>\u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53D8\u91CF</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u58F0\u660E\u51FD\u6570\u7C7B\u578B</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">calc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">operate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">op calc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> a </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">op</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5C06\u51FD\u6570\u7C7B\u578B\u8D4B\u503C\u7ED9\u53D8\u91CF \`function\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    function </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> add</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u6253\u5370\u51FD\u6570\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">function</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5C06\u51FD\u6570\u7C7B\u578B\u4F5C\u4E3A\u5165\u53C2</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">operate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">function</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EF\u53D8\u53C2\u6570" tabindex="-1">\u53EF\u53D8\u53C2\u6570 <a class="header-anchor" href="#\u53EF\u53D8\u53C2\u6570" aria-hidden="true">#</a></h2><blockquote><p>\u53EF\u53D8\u53C2\u6570\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2Aslice\u5207\u7247\u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u6807\u7D22\u5F15\u7684\u65B9\u5F0F\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u51FD\u6570 <code>len</code> \u6765\u7EDF\u8BA1\u5176\u957F\u5EA6\uFF0C\u4E14\u53EF\u53D8\u53C2\u6570\u53EA\u80FD\u653E\u5728\u51FD\u6570\u5165\u53C2\u7684\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func add(a int, args... int) int {</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u51FD\u6570\u4F53 </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">func concat(s string, arg ...string) string {</span></span>
<span class="line"><span style="color:#A6ACCD;">    str := s</span></span>
<span class="line"><span style="color:#A6ACCD;">    for i := 0; i &lt; len(arg); i++ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        str += arg[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="main-\u51FD\u6570-\u548C-init-\u51FD\u6570" tabindex="-1"><strong>main</strong> \u51FD\u6570 \u548C <strong>init</strong> \u51FD\u6570 <a class="header-anchor" href="#main-\u51FD\u6570-\u548C-init-\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li><strong>main</strong> \u51FD\u6570\u53EA\u80FD\u7528\u5728 package main \u5305\u4E2D\uFF0C\u4E14 package main \u5305\u4E2D\u5FC5\u987B\u5305\u542B <strong>main</strong> \u51FD\u6570</li><li><strong>main</strong> \u51FD\u6570\u4E0D\u80FD\u6709\u5165\u53C2\uFF0C\u547D\u4EE4\u884C\u4F20\u5165\u7684\u53C2\u6570\u53EF\u4EE5\u4F7F\u7528 <code>os.Args</code> \u83B7\u53D6\uFF0C\u547D\u4EE4\u884C\u5F00\u5173\u6253\u5F00\u9700\u8981\u5BFC\u5165 <code>flag</code> \u5305</li><li><strong>init</strong> \u51FD\u6570\u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u7684 package \u4E2D\uFF0C\u662F\u53EF\u9009\u7684\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u51FA\u73B0</li><li><strong>main</strong> \u548C <strong>init</strong> \u51FD\u6570\u4E0D\u9700\u8981\u624B\u52A8\u8C03\u7528\uFF0C<code>Go</code> \u7A0B\u5E8F\u4F1A\u81EA\u52A8\u6267\u884C\u8FD9\u4E24\u4E2A\u51FD\u6570</li></ul><h2 id="\u51FD\u6570\u4F5C\u7528\u57DF" tabindex="-1">\u51FD\u6570\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u51FD\u6570\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><ul><li>\u5728\u51FD\u6570\u4F53\u5185\u90E8\u58F0\u660E\u7684\u53D8\u91CF\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u751F\u547D\u5468\u671F\u4EC5\u9650\u4E8E\u51FD\u6570\u5185\u90E8</li><li>\u5728\u51FD\u6570\u4F53\u5916\u90E8\u58F0\u660E\u7684\u53D8\u91CF\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u751F\u547D\u5468\u671F\u4F5C\u7528\u4E8E\u6574\u4E2A\u5305\uFF0C\u5982\u679C\u51FD\u6570\u540D\u662F\u5927\u5199\u7684\uFF0C\u505A\u4F5C\u7528\u4E8E\u6574\u4E2A\u7A0B\u5E8F</li></ul><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">foo2</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#F78C6C;">18</span></span>
<span class="line"></span></code></pre></div><h2 id="\u533F\u540D\u51FD\u6570" tabindex="-1">\u533F\u540D\u51FD\u6570 <a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a></h2><blockquote><p>\u533F\u540D\u51FD\u6570\uFF0C\u5373\u6CA1\u6709\u51FD\u6570\u540D\uFF0C\u7531\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u4F53\u7EC4\u6210</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u533F\u540D\u51FD\u6570\u8D4B\u503C\u7ED9\u53D8\u91CF foo</span></span>
<span class="line"><span style="color:#A6ACCD;">    foo </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h2><blockquote><p>\u95ED\u5305\u662F\u51FD\u6570\u548C\u4E0E\u5176\u76F8\u5173\u7684\u5F15\u7528\u73AF\u5883\u7EC4\u5408\u800C\u6210\u7684\u7ED3\u6784\u5B9E\u4F53\uFF0C\u51FD\u6570\u53EF\u4EE5\u5B58\u50A8\u5230\u53D8\u91CF\u4E2D\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u5176\u4ED6\u51FD\u6570</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">d </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        x </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> d</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    f </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;">// 11</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;">// 111</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">()(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">()(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// 10</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">calculate</span><span style="color:#89DDFF;">()(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// 100</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u7684 <code>f := calculate() </code> \u64CD\u4F5C\uFF0C\u4F1A\u5C06\u51FD\u6570\u53D8\u91CF\u8D4B\u503C\u7ED9\u53D8\u91CF <code>f</code>\uFF0C <code>f</code> \u5C31\u6B64\u6210\u4E3A\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0C<code>f</code> \u4FDD\u5B58\u7740\u5BF9 <code>x</code> \u7684\u5F15\u7528\uFF0C\u7531\u4E8E <code>f</code> \u6709\u7740\u6307\u5411 <code>x</code> \u7684\u6307\u9488\uFF0C\u56E0\u6B64\u540E\u9762\u91CD\u590D\u8C03\u7528 <code>f</code> \u65F6\uFF0C<code>f</code> \u6307\u5411 <code>x</code> \u7684\u503C\u8FD8\u662F\u4E0A\u4E00\u6B21\u7684\u7ED3\u679C\uFF0C\u5BFC\u81F4\u4E86 <code>x</code> \u9003\u9038\u4E86\uFF0C\u751F\u547D\u5468\u671F\u6CA1\u6709\u7ED3\u675F\u3002\u800C\u591A\u6B21\u8C03\u7528 <code>calculate()(x)</code> \u65B9\u6CD5\u662F\u5206\u522B\u8FD4\u56DE\u4E86\u4E0D\u540C\u7684\u95ED\u5305\uFF0C\u56E0\u6B64\u51FD\u6570\u4F53\u5185\u7684 <code>x</code> \u4E0D\u4F1A\u5BF9\u4E0B\u4E00\u4E2A\u95ED\u5305\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F\u4E0D\u540C\u7684\u95ED\u5305</p>`,30),e=[o];function c(t,r,D,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
