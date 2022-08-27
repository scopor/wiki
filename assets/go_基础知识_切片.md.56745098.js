import{_ as s,c as n,o as a,d as l}from"./app.259ce81e.js";const i=JSON.parse('{"title":"\u5207\u7247\u7684\u6982\u5FF5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5207\u7247\u7684\u6982\u5FF5","slug":"\u5207\u7247\u7684\u6982\u5FF5"},{"level":2,"title":"\u5207\u7247\u7684\u521B\u5EFA","slug":"\u5207\u7247\u7684\u521B\u5EFA"},{"level":2,"title":"\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF","slug":"\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF"},{"level":2,"title":"\u5207\u7247\u7684\u4FEE\u6539","slug":"\u5207\u7247\u7684\u4FEE\u6539"},{"level":2,"title":"\u5207\u7247\u8FFD\u52A0\u5143\u7D20","slug":"\u5207\u7247\u8FFD\u52A0\u5143\u7D20"},{"level":2,"title":"\u83B7\u53D6\u5207\u7247\u5143\u7D20","slug":"\u83B7\u53D6\u5207\u7247\u5143\u7D20"},{"level":2,"title":"\u591A\u7EF4\u5207\u7247","slug":"\u591A\u7EF4\u5207\u7247"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u5207\u7247.md","lastUpdated":1661562262000}'),p={name:"go/\u57FA\u7840\u77E5\u8BC6/\u5207\u7247.md"},o=l(`<h2 id="\u5207\u7247\u7684\u6982\u5FF5" tabindex="-1">\u5207\u7247\u7684\u6982\u5FF5 <a class="header-anchor" href="#\u5207\u7247\u7684\u6982\u5FF5" aria-hidden="true">#</a></h2><blockquote><p>\u5207\u7247\u548C\u6570\u7EC4\u4E00\u6837\u90FD\u662F\u5E8F\u5217\uFF0C\u4F46\u5207\u7247\u662F\u53D8\u957F\u7684\uFF0C\u56E0\u6B64\u5207\u7247\u58F0\u660E\u65F6\u4E00\u822C\u5199\u4F5C <code>[]Type</code> \uFF0C\u5207\u7247\u662F\u5BF9\u6570\u7EC4\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5207\u7247\u4F1A\u5C06\u6570\u7EC4\u4F5C\u4E3A\u5176\u5E95\u5C42\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u53EF\u4EE5\u65F6\u6570\u7EC4\u7531\u67D0\u4E2A\u7D22\u5F15\u5F00\u59CB\u5230\u53E6\u4E00\u4E2A\u7D22\u5F15\u7EC8\u6B62\u5BF9\u4E00\u6BB5\u8FDE\u7EED\u7247\u6BB5\u3002</p></blockquote><h2 id="\u5207\u7247\u7684\u521B\u5EFA" tabindex="-1">\u5207\u7247\u7684\u521B\u5EFA <a class="header-anchor" href="#\u5207\u7247\u7684\u521B\u5EFA" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528 <code>[]Type</code> \u521B\u5EFA\u5207\u7247</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u58F0\u660E\u6574\u5F62\u7C7B\u578B\u7684\u5207\u7247</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u58F0\u660E\u7A7A\u5207\u7247</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521D\u59CB\u5316\u4E00\u4E2A\u975E\u7A7A\u5207\u7247</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u622A\u53D6\u6570\u7EC4\u83B7\u5F97\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [20 30]</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u8BED\u6CD5 <code>arr[start:end]</code> \u662F\u521B\u5EFA\u4E00\u4E2A\u4ECE\u6570\u7EC4 <code>arr</code> \u7D22\u5F15 <code>start</code> \u5F00\u59CB\u5230 <code>end - 1</code> \u7ED3\u675F\u7684\u5207\u7247\uFF0C\u5DE6\u5F00\u53F3\u95ED\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>make</code> \u51FD\u6570\u521B\u5EFA \u4E00\u4E2A\u5207\u7247\uFF0C\u683C\u5F0F\u4E3A <code>make([]type, size, cap)</code></p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A2\uFF0C\u5BB9\u91CF\u4E3A3\u7684\u6574\u5F62\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF" tabindex="-1">\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF <a class="header-anchor" href="#\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF" aria-hidden="true">#</a></h2><blockquote><p>\u5207\u7247\u7684\u7EC4\u6210\u90E8\u5206\u4E3A\uFF1A\u6307\u9488\u3001\u957F\u5EA6\u548C\u5BB9\u91CF\uFF0C\u6307\u9488\u6307\u5411\u5207\u7247\u7B2C\u4E00\u4E2A\u5143\u7D20\u5BF9\u5E94\u7684\u5E95\u5C42\u6570\u7EC4\u5143\u7D20\u7684\u5730\u5740\uFF0C\u957F\u5EA6\u5BF9\u5E94\u5207\u7247\u4E2D\u5143\u7D20\u7684\u4E2A\u6570\uFF0C\u5BB9\u91CF\u662F\u4ECE\u5207\u7247\u7684\u5F00\u59CB\u4F4D\u7F6E\u5230\u5E95\u5C42\u6570\u636E\u7684\u7ED3\u675F\u4F4D\u7F6E\uFF0C\u4E14\u957F\u5EA6\u4E0D\u80FD\u8D85\u5BB9\u91CF\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u7684 <code>len</code> \u548C <code>cap</code> \u51FD\u6570\u5206\u522B\u83B7\u53D6\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 3</span></span>
<span class="line"></span></code></pre></div><p>\u5207\u7247\u548C\u6570\u7EC4\u4E0D\u540C\uFF0C\u5207\u7247\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u56E0\u6B64\u5176\u9ED8\u8BA4\u503C\u4E3A <code>nil</code></p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u4E00\u4E2A\u5207\u7247\u4E2D\u7684\u5143\u7D20\u4E3A\u7A7A\u65F6\uFF0C\u5E94\u8BE5\u5224\u65AD\u5176\u957F\u5EA6\u662F\u5426\u4E3A 0 \u4F5C\u4E3A\u4E00\u4E2A\u7A7A\u5207\u7247\u7684\u5224\u65AD\u4F9D\u636E\u3002\u5207\u7247\u4E4B\u95F4\u4E0D\u80FD\u76F4\u63A5\u6BD4\u8F83\uFF0C\u5FC5\u987B\u5BF9\u5207\u7247\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u8F83\u6765\u5224\u65AD\u4E24\u4E2A\u5207\u7247\u662F\u5426\u76F8\u7B49\uFF0C\u6807\u51C6\u5E93\u4E2D\u9488\u5BF9\u5B57\u8282\u7C7B\u578B\u7684\u5207\u7247\uFF08[]byte\uFF09\u662F\u5426\u76F8\u7B49\u63D0\u4F9B\u4E86 <code>bytes.Equal</code> \u51FD\u6570\u3002</p><h2 id="\u5207\u7247\u7684\u4FEE\u6539" tabindex="-1">\u5207\u7247\u7684\u4FEE\u6539 <a class="header-anchor" href="#\u5207\u7247\u7684\u4FEE\u6539" aria-hidden="true">#</a></h2><blockquote><p>\u5207\u7247\u672C\u8EAB\u4E0D\u62E5\u6709\u4EFB\u4F55\u6570\u636E\uFF0C\u5B83\u53EA\u662F\u5E95\u5C42\u6570\u7EC4\u7684\u4E00\u79CD\u8868\u793A\u65B9\u5F0F\uFF0C\u5BF9\u5207\u7247\u7684\u4EFB\u4F55\u4FEE\u6539\u90FD\u4F1A\u53CD\u5E94\u5230\u5E95\u5C42\u6570\u636E\u4E2D\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;">// [10 20 30 40]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// [20 30]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4FEE\u6539\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;">// [10 50 30 40]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// [50 30]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5207\u7247\u8FFD\u52A0\u5143\u7D20" tabindex="-1">\u5207\u7247\u8FFD\u52A0\u5143\u7D20 <a class="header-anchor" href="#\u5207\u7247\u8FFD\u52A0\u5143\u7D20" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528 <code>append</code> \u51FD\u6570\u53EF\u4EE5\u5C06\u65B0\u7684\u5143\u7D20\u8FFD\u52A0\u5230\u5207\u7247\u4E0A\uFF0C\u5F53\u65B0\u7684\u5143\u7D20\u52A0\u5165\u5230\u5207\u7247\u4E4B\u540E\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF0C\u73B0\u6709\u6570\u7EC4\u7684\u5143\u7D20\u88AB\u590D\u5236\u5230\u8FD9\u4E2A\u65B0\u7684\u6570\u7EC4\u4E2D\uFF0C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u65B0\u6570\u7EC4\u7684\u65B0\u5207\u7247\u5F15\u7528\uFF0C\u5982\u679C\u8FFD\u52A0\u540E\u957F\u5EA6\u8D85\u8FC7\u65E7\u5207\u7247\u7684\u957F\u5EA6\u65F6\uFF0C\u65B0\u5207\u7247\u7684\u5BB9\u91CF\u4F1A\u53D8\u6210\u65E7\u5207\u7247\u5BB9\u91CF\u7684\u4E24\u500D\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8FFD\u52A0\u4E00\u4E2A\u5143\u7D20 3</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8FFD\u52A0\u4E24\u4E2A\u5143\u7D20 4 5</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8FFD\u52A0\u4E00\u4E2A\u5207\u7247 ... \u8868\u793A\u89E3\u5305\u4E0D\u80FD\u7701\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">}...)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5728\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165\u4E00\u4E2A\u5143\u7D20 0</span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">...)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 16</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;">// [0 1 2 3 4 5 6 7 9]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u83B7\u53D6\u5207\u7247\u5143\u7D20" tabindex="-1">\u83B7\u53D6\u5207\u7247\u5143\u7D20 <a class="header-anchor" href="#\u83B7\u53D6\u5207\u7247\u5143\u7D20" aria-hidden="true">#</a></h2><blockquote><p>\u548C\u6570\u7EC4\u4E00\u6837\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>for range</code> \u5FAA\u73AF\u6765\u83B7\u53D6\u5207\u7247 \u7684\u7D22\u5F15\u548C\u7D22\u5F15\u5BF9\u5E94\u7684\u503C</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> idnex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nums[%d] = %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u591A\u7EF4\u5207\u7247" tabindex="-1">\u591A\u7EF4\u5207\u7247 <a class="header-anchor" href="#\u591A\u7EF4\u5207\u7247" aria-hidden="true">#</a></h2><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[][]</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 3</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 3</span></span>
<span class="line"></span></code></pre></div>`,24),e=[o];function c(t,r,D,F,y,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
