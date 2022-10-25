import{_ as s,c as a,o as n,d as o}from"./app.029773f8.js";const i=JSON.parse('{"title":"Map","description":"","frontmatter":{},"headers":[{"level":2,"title":"Map","slug":"map"},{"level":2,"title":"Map \u7684\u521B\u5EFA","slug":"map-\u7684\u521B\u5EFA"},{"level":2,"title":"Map \u6DFB\u52A0\u5143\u7D20","slug":"map-\u6DFB\u52A0\u5143\u7D20"},{"level":2,"title":"Map \u66F4\u65B0\u5143\u7D20","slug":"map-\u66F4\u65B0\u5143\u7D20"},{"level":2,"title":"Map \u83B7\u53D6\u5143\u7D20","slug":"map-\u83B7\u53D6\u5143\u7D20"},{"level":2,"title":"Map \u5220\u9664\u5143\u7D20","slug":"map-\u5220\u9664\u5143\u7D20"},{"level":2,"title":"Map key\u5B58\u5728\u6027","slug":"map-key\u5B58\u5728\u6027"},{"level":2,"title":"Map \u7684\u904D\u5386","slug":"map-\u7684\u904D\u5386"},{"level":2,"title":"Map \u7684\u957F\u5EA6","slug":"map-\u7684\u957F\u5EA6"},{"level":2,"title":"Map\u662F\u5F15\u7528\u7C7B\u578B","slug":"map\u662F\u5F15\u7528\u7C7B\u578B"},{"level":2,"title":"\u7A7A Map","slug":"\u7A7A-map"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/Map.md","lastUpdated":1666697641000}'),p={name:"go/\u57FA\u7840\u77E5\u8BC6/Map.md"},l=o(`<h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h2><blockquote><p><code>Map</code> \u662F <code>Go</code> \u4E2D\u7684\u952E\u503C\u5BF9\u7C7B\u578B\uFF0C\u5E95\u5C42\u662F\u54C8\u5E0C\u8868\u5B9E\u73B0\u7684\uFF0C<code>Map</code> \u4E2D\u7684 <code>key</code> \u5177\u5907\u60DF\u4E00\u6027\uFF0C\u6240\u6709\u53EF\u6BD4\u8F83\u7684\u7C7B\u578B\uFF0C\u90FD\u53EF\u4EE5 \u4F5C\u4E3A <code>key</code>\u3002</p></blockquote><h2 id="map-\u7684\u521B\u5EFA" tabindex="-1">Map \u7684\u521B\u5EFA <a class="header-anchor" href="#map-\u7684\u521B\u5EFA" aria-hidden="true">#</a></h2><blockquote><p><code>Map</code> \u4F7F\u7528 <code>make</code> \u51FD\u6570\u6765\u521B\u5EFA\uFF0C\u683C\u5F0F\u4E3A\uFF1A<code>make(map[key]value)</code> \u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>map</code> \u8BED\u6CD5\u521B\u5EFA\uFF0C\u4E14\u53EF\u4EE5\u6307\u5B9A\u5177\u4F53\u7684\u952E\u503C\u5BF9</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">string </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1292052/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1292052/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="map-\u6DFB\u52A0\u5143\u7D20" tabindex="-1">Map \u6DFB\u52A0\u5143\u7D20 <a class="header-anchor" href="#map-\u6DFB\u52A0\u5143\u7D20" aria-hidden="true">#</a></h2><blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>map[key] = value</code> \u7684\u65B9\u5F0F\u5411 <code>Map</code> \u4E2D\u6DFB\u52A0\u5143\u7D20\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F53\u5E78\u798F\u6765\u6572\u95E8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1849031/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="map-\u66F4\u65B0\u5143\u7D20" tabindex="-1">Map \u66F4\u65B0\u5143\u7D20 <a class="header-anchor" href="#map-\u66F4\u65B0\u5143\u7D20" aria-hidden="true">#</a></h2><blockquote><p>\u82E5 <code>key</code> \u5DF2\u5B58\u5728\uFF0C\u5219\u8986\u76D6\u539F\u6709\u7684\u503C</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F53\u5E78\u798F\u6765\u6572\u95E8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1849031/?from=subject-page</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="map-\u83B7\u53D6\u5143\u7D20" tabindex="-1">Map \u83B7\u53D6\u5143\u7D20 <a class="header-anchor" href="#map-\u83B7\u53D6\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F53\u5E78\u798F\u6765\u6572\u95E8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//https://movie.douban.com/subject/1849031/?from=subject-page</span></span>
<span class="line"></span></code></pre></div><h2 id="map-\u5220\u9664\u5143\u7D20" tabindex="-1">Map \u5220\u9664\u5143\u7D20 <a class="header-anchor" href="#map-\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528 <code>delete(map, key)</code> \u51FD\u6570\u5220\u9664\u952E\u503C\u5BF9\uFF0C\u5982\u679C <code>key</code> \u4E0D\u5B58\u5728\uFF0C<code>delete</code> \u51FD\u6570\u4E0D\u4F1A\u62A5\u9519\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F53\u5E78\u798F\u6765\u6572\u95E8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// map[\u8096\u7533\u514B\u7684\u6551\u8D4E:https://movie.douban.com/subject/1292052/]</span></span>
<span class="line"></span></code></pre></div><h2 id="map-key\u5B58\u5728\u6027" tabindex="-1">Map key\u5B58\u5728\u6027 <a class="header-anchor" href="#map-key\u5B58\u5728\u6027" aria-hidden="true">#</a></h2><blockquote><p>\u5224\u65AD <code>Map</code> \u4E2D\u67D0\u4E2A <code>Key</code> \u7684\u5B58\u5728\u4E0E\u5426\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BED\u6CD5 value, ok := map[key]\uFF0C\u8BE5\u8BED\u6CD5\u8FD4\u56DE\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u4E3A\u952E\u503C\u5BF9\u4E2D\u7684\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A <code>key</code> \u662F\u5426\u5B58\u5728\uFF0C<code>true</code> \u4E3A\u5B58\u5728\uFF0C<code>false</code> \u4E3A\u4E0D\u5B58\u5728\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="map-\u7684\u904D\u5386" tabindex="-1">Map \u7684\u904D\u5386 <a class="header-anchor" href="#map-\u7684\u904D\u5386" aria-hidden="true">#</a></h2><blockquote><p><code>Map</code> \u7684\u904D\u5386\u4F9D\u7136\u4F7F\u7528 <code>for range</code> \u8BED\u6CD5\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// key, value \u90FD\u83B7\u53D6</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key: %s, value: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u53EA\u83B7\u53D6 key</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key: %s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u53EA\u83B7\u53D6 value</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="map-\u7684\u957F\u5EA6" tabindex="-1">Map \u7684\u957F\u5EA6 <a class="header-anchor" href="#map-\u7684\u957F\u5EA6" aria-hidden="true">#</a></h2><blockquote><p>\u6211\u4EEC\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528 <code>len</code> \u51FD\u6570\u6765\u8BA1\u7B97 <code>Map</code> \u7684\u957F\u5EA6\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1994</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F53\u5E78\u798F\u6765\u6572\u95E8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2006</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 2</span></span>
<span class="line"></span></code></pre></div><h2 id="map\u662F\u5F15\u7528\u7C7B\u578B" tabindex="-1">Map\u662F\u5F15\u7528\u7C7B\u578B <a class="header-anchor" href="#map\u662F\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h2><blockquote><p><code>Map</code> \u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5F53\u5176\u88AB\u8D4B\u503C\u7ED9\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u65F6\uFF0C\u65B0\u65E7\u53D8\u91CF\u6307\u5411\u7684\u662F\u540C\u4E00\u4E2A\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF0C\u5F53\u6539\u8FB9\u5176\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u7684\u65F6\u5019\uFF0C\u53E6\u4E00\u4E2A\u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8\u3002\u5F53 <code>Map</code> \u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F20\u9012\u65F6\u4E5F\u662F\u5982\u6B64.</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1994</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F53\u5E78\u798F\u6765\u6572\u95E8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2006</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// map[\u5F53\u5E78\u798F\u6765\u6572\u95E8:2006 \u8096\u7533\u514B\u7684\u6551\u8D4E:1994]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">newMovies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> movies</span></span>
<span class="line"><span style="color:#A6ACCD;">newMovies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8096\u7533\u514B\u7684\u6551\u8D4E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1995</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// map[\u5F53\u5E78\u798F\u6765\u6572\u95E8:2006 \u8096\u7533\u514B\u7684\u6551\u8D4E:1995]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newMovies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// map[\u5F53\u5E78\u798F\u6765\u6572\u95E8:2006 \u8096\u7533\u514B\u7684\u6551\u8D4E:1995]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7A7A-map" tabindex="-1">\u7A7A Map <a class="header-anchor" href="#\u7A7A-map" aria-hidden="true">#</a></h2><blockquote><p><code>Map</code> \u4E4B\u95F4\u4E0D\u80FD\u7528 == \u64CD\u4F5C\u7B26\u6765\u5224\u65AD\u662F\u5426\u76F8\u7B49\uFF0C\u5E94\u8BE5\u4F7F\u7528\u5FAA\u73AF\u6765\u5224\u65AD\uFF0C\u5224\u65AD <code>Map</code> \u662F\u5426\u4E3A\u7A7A\u53EF\u4EE5\u4F7F\u7528 <code>map == nil</code> \u3002</p></blockquote>`,32),e=[l];function t(c,r,D,F,y,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
