import{_ as a,c as n,d as o,e as l,o as p,r as e}from"./app.4ccf8c2a.js";const u=JSON.parse('{"title":"Go 语言笔记：Map","description":"Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。","frontmatter":{"title":"Go 语言笔记：Map","head":[["meta",{"property":"og:title","content":"Go 语言笔记：Map"}],["meta",{"name":"description","content":"Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。"}],["meta",{"name":"keywords","content":"Go,Map,Map遍历、更新、删除、获取,空Map"}],["meta",{"property":"og:description","content":"Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Map"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Map"}]]},"headers":[{"level":2,"title":"Map","slug":"map","link":"#map","children":[]},{"level":2,"title":"Map 的创建","slug":"map-的创建","link":"#map-的创建","children":[]},{"level":2,"title":"Map 添加元素","slug":"map-添加元素","link":"#map-添加元素","children":[]},{"level":2,"title":"Map 更新元素","slug":"map-更新元素","link":"#map-更新元素","children":[]},{"level":2,"title":"Map 获取元素","slug":"map-获取元素","link":"#map-获取元素","children":[]},{"level":2,"title":"Map 删除元素","slug":"map-删除元素","link":"#map-删除元素","children":[]},{"level":2,"title":"Map key存在性","slug":"map-key存在性","link":"#map-key存在性","children":[]},{"level":2,"title":"Map 的遍历","slug":"map-的遍历","link":"#map-的遍历","children":[]},{"level":2,"title":"Map 的长度","slug":"map-的长度","link":"#map-的长度","children":[]},{"level":2,"title":"Map是引用类型","slug":"map是引用类型","link":"#map是引用类型","children":[]},{"level":2,"title":"空 Map","slug":"空-map","link":"#空-map","children":[]}],"relativePath":"go/基础知识/Map.md"}'),t={name:"go/基础知识/Map.md"},c=l(`<p>Go 语言笔记：Map</p><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Map</code> 是 <code>Go</code> 中的键值对类型，底层是哈希表实现的，<code>Map</code> 中的 <code>key</code> 具备惟一性，所有可比较的类型，都可以 作为 <code>key</code>。</p></blockquote><h2 id="map-的创建" tabindex="-1">Map 的创建 <a class="header-anchor" href="#map-的创建" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Map</code> 使用 <code>make</code> 函数来创建，格式为：<code>make(map[key]value)</code> 。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>也可以使用 <code>map</code> 语法创建，且可以指定具体的键值对</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">string </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1292052/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1292052/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="map-添加元素" tabindex="-1">Map 添加元素 <a class="header-anchor" href="#map-添加元素" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>我们可以通过 <code>map[key] = value</code> 的方式向 <code>Map</code> 中添加元素。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当幸福来敲门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1849031/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="map-更新元素" tabindex="-1">Map 更新元素 <a class="header-anchor" href="#map-更新元素" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>若 <code>key</code> 已存在，则覆盖原有的值</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当幸福来敲门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://movie.douban.com/subject/1849031/?from=subject-page</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="map-获取元素" tabindex="-1">Map 获取元素 <a class="header-anchor" href="#map-获取元素" aria-hidden="true" loading="lazy">#</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当幸福来敲门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//https://movie.douban.com/subject/1849031/?from=subject-page</span></span>
<span class="line"></span></code></pre></div><h2 id="map-删除元素" tabindex="-1">Map 删除元素 <a class="header-anchor" href="#map-删除元素" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>使用 <code>delete(map, key)</code> 函数删除键值对，如果 <code>key</code> 不存在，<code>delete</code> 函数不会报错。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当幸福来敲门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// map[肖申克的救赎:https://movie.douban.com/subject/1292052/]</span></span>
<span class="line"></span></code></pre></div><h2 id="map-key存在性" tabindex="-1">Map key存在性 <a class="header-anchor" href="#map-key存在性" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>判断 <code>Map</code> 中某个 <code>Key</code> 的存在与否，可以使用语法 value, ok := map[key]，该语法返回两个参数，第一个为键值对中的值，第二个参数为 <code>key</code> 是否存在，<code>true</code> 为存在，<code>false</code> 为不存在。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> movies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="map-的遍历" tabindex="-1">Map 的遍历 <a class="header-anchor" href="#map-的遍历" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Map</code> 的遍历依然使用 <code>for range</code> 语法。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// key, value 都获取</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key: %s, value: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 只获取 key</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key: %s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 只获取 value</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> movies </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="map-的长度" tabindex="-1">Map 的长度 <a class="header-anchor" href="#map-的长度" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>我们依然可以使用 <code>len</code> 函数来计算 <code>Map</code> 的长度。</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1994</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当幸福来敲门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2006</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"></span></code></pre></div><h2 id="map是引用类型" tabindex="-1">Map是引用类型 <a class="header-anchor" href="#map是引用类型" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Map</code> 是引用类型，当其被赋值给一个新的变量时，新旧变量指向的是同一个底层数据结构，当改边其中任何一个的时候，另一个也会随之改变。当 <code>Map</code> 作为函数参数传递时也是如此.</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1994</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当幸福来敲门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2006</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// map[当幸福来敲门:2006 肖申克的救赎:1994]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">newMovies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> movies</span></span>
<span class="line"><span style="color:#A6ACCD;">newMovies</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1995</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// map[当幸福来敲门:2006 肖申克的救赎:1995]</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newMovies</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// map[当幸福来敲门:2006 肖申克的救赎:1995]</span></span>
<span class="line"></span></code></pre></div><h2 id="空-map" tabindex="-1">空 Map <a class="header-anchor" href="#空-map" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p><code>Map</code> 之间不能用 == 操作符来判断是否相等，应该使用循环来判断，判断 <code>Map</code> 是否为空可以使用 <code>map == nil</code> 。</p></blockquote><hr>`,34);function r(D,y,F,i,d,C){const s=e("GoogleAdsense");return p(),n("div",null,[c,o(s)])}const m=a(t,[["render",r]]);export{u as __pageData,m as default};
