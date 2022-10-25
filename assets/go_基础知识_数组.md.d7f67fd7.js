import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.03c28ed9.js";const u=JSON.parse('{"title":"\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u7EC4","slug":"\u6570\u7EC4"},{"level":2,"title":"\u6570\u7EC4\u7684\u58F0\u660E","slug":"\u6570\u7EC4\u7684\u58F0\u660E"},{"level":2,"title":"\u6570\u7EC4\u7684\u957F\u5EA6","slug":"\u6570\u7EC4\u7684\u957F\u5EA6"},{"level":2,"title":"\u6570\u7EC4\u662F\u503C\u7C7B\u578B","slug":"\u6570\u7EC4\u662F\u503C\u7C7B\u578B"},{"level":2,"title":"\u6570\u7EC4\u7684\u4F7F\u7528","slug":"\u6570\u7EC4\u7684\u4F7F\u7528"},{"level":2,"title":"\u591A\u7EF4\u6570\u7EC4","slug":"\u591A\u7EF4\u6570\u7EC4"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u6570\u7EC4.md","lastUpdated":1666709968000}'),c={name:"go/\u57FA\u7840\u77E5\u8BC6/\u6570\u7EC4.md"},t=p(`<h2 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h2><blockquote><p>\u6570\u7EC4\uFF0C\u56FA\u5B9A\u957F\u5EA6\u7684\u7279\u6027\u7C7B\u578B\u7684\u5143\u7D20\u7EC4\u6210\u7684\u5E8F\u5217\uFF0C\u6709\u96F6\u6216\u591A\u4E2A\u5143\u7D20\u3002\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u56FA\u5B9A\u7684\uFF0C<code>Go</code> \u4E2D\u8F83\u5C11\u4F7F\u7528\u3002</p></blockquote><h2 id="\u6570\u7EC4\u7684\u58F0\u660E" tabindex="-1">\u6570\u7EC4\u7684\u58F0\u660E <a class="header-anchor" href="#\u6570\u7EC4\u7684\u58F0\u660E" aria-hidden="true">#</a></h2><blockquote><p>\u6570\u7EC4\u53EF\u4EE5\u4F7F\u7528 <code>[len]Type</code> \u6765\u58F0\u660E\uFF0C\u5176\u4E2D <code>len</code> \u4EE3\u8868\u957F\u5EA6\uFF0C<code>Type</code> \u4EE3\u8868\u5143\u7D20\u7C7B\u578B\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u58F0\u660E\u957F\u5EA6\u4E3A 5 \u7684\u6570\u7EC4\uFF0C\u6240\u6709\u5143\u7D20\u7684\u503C\u5747\u4E3A 0</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7ED9\u7B2C\u4E00\u4E2A\u5143\u7D20\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [10 0 0 0 0]</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u5728\u58F0\u660E\u65F6\u76F4\u63A5\u5BF9\u6570\u7EC4\u8FDB\u884C\u521D\u59CB\u5316</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [15 0 0 0 0]</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005\u662F\u76F4\u63A5\u4F7F\u7528\u77ED\u58F0\u660E</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [20 0 0 0 0]</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u5143\u7D20\u4E2A\u6570\u592A\u591A\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528\u7F16\u8BD1\u5668\uFF0C\u4E3A\u6211\u4EEC\u8BA1\u7B97\u6570\u7EC4\u7684\u957F\u5EA6</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=[...]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">55</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 6</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u6307\u5B9A\u7D22\u5F15\u4E3A\u6570\u7EC4\u7684\u5143\u7D20\u8D4B\u503C</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [0 0 30 0 50]</span></span>
<span class="line"></span></code></pre></div><p>\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u6570\u7EC4\u7684\u4E00\u90E8\u5206\uFF0C\u4E24\u4E2A\u4E0D\u540C\u957F\u5EA6\u7684\u6570\u7EC4\uFF0C\u662F\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u5982 <code>[5]int</code> \u548C <code>[10]int</code> \u3002</p><h2 id="\u6570\u7EC4\u7684\u957F\u5EA6" tabindex="-1">\u6570\u7EC4\u7684\u957F\u5EA6 <a class="header-anchor" href="#\u6570\u7EC4\u7684\u957F\u5EA6" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528\u5185\u7F6E\u7684 <code>len</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u6307\u5B9A\u6570\u7EC4\u7684\u957F\u5EA6</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=[...]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">55</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 6</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u7EC4\u662F\u503C\u7C7B\u578B" tabindex="-1">\u6570\u7EC4\u662F\u503C\u7C7B\u578B <a class="header-anchor" href="#\u6570\u7EC4\u662F\u503C\u7C7B\u578B" aria-hidden="true">#</a></h2><blockquote><p><code>Go</code> \u8BED\u8A00\u4E2D\u6570\u7EC4\u662F\u503C\u7C7B\u578B\uFF0C\u800C\u975E\u5F15\u7528\u7C7B\u578B\uFF0C\u5F53\u628A\u6570\u7EC4\u8D4B\u503C\u7ED9\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u65F6\uFF0C\u8BE5\u53D8\u91CF\u662F\u5BF9\u539F\u6570\u7EC4\u8FDB\u884C\u4E86\u4E00\u6B21\u62F7\u8D1D\uFF0C\u5BF9\u65B0\u53D8\u91CF\u7684\u503C\u8FDB\u884C\u6539\u53D8\u65F6\uFF0C\u539F\u6570\u7EC4\u7684\u503C\u4E0D\u53D8\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">copy </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> nums</span></span>
<span class="line"><span style="color:#A6ACCD;">copy</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [10 20 30 40 50]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">copy</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [10 90 30 40 50]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u7EC4\u7684\u4F7F\u7528" tabindex="-1">\u6570\u7EC4\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u6570\u7EC4\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u5FAA\u73AF\u53EF\u4EE5\u83B7\u53D6\u6570\u7EC4\u7684\u7D22\u5F15\u548C\u7D22\u5F15\u5BF9\u5E94\u7684\u5143\u7D20</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nums[%d] = %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5FFD\u7565\u7D22\u5F15</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u591A\u7EF4\u6570\u7EC4" tabindex="-1">\u591A\u7EF4\u6570\u7EC4 <a class="header-anchor" href="#\u591A\u7EF4\u6570\u7EC4" aria-hidden="true">#</a></h2><blockquote><p>\u591A\u7EF4\u6570\u7EC4\u7684\u58F0\u660E\u7C7B\u4F3C\u4E00\u7EF4\u6570\u7EC4</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span></code></pre></div>`,26);function r(D,F,y,C,A,i){const s=e("GoogleAdsense");return o(),a("div",null,[t,l(s)])}const g=n(c,[["render",r]]);export{u as __pageData,g as default};
