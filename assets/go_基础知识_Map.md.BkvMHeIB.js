import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.D_7_7Osg.js";const c=JSON.parse('{"title":"Go 语言笔记：Map","description":"Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。","frontmatter":{"title":"Go 语言笔记：Map","head":[["meta",{"property":"og:title","content":"Go 语言笔记：Map"}],["meta",{"name":"description","content":"Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。"}],["meta",{"name":"keywords","content":"Go,Map,Map遍历、更新、删除、获取,空Map"}],["meta",{"property":"og:description","content":"Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。"}],["meta",{"property":"og:url","content":"https://sooloe.com/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Map"}],["link",{"rel":"canonical","href":"https://sooloe.com/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Map"}]]},"headers":[],"relativePath":"go/基础知识/Map.md","filePath":"go/基础知识/Map.md"}'),h={name:"go/基础知识/Map.md"},n=t(`<p>Go 语言笔记：Map</p><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><blockquote><p><code>Map</code> 是 <code>Go</code> 中的键值对类型，底层是哈希表实现的，<code>Map</code> 中的 <code>key</code> 具备惟一性，所有可比较的类型，都可以 作为 <code>key</code>。</p></blockquote><h2 id="map-的创建" tabindex="-1">Map 的创建 <a class="header-anchor" href="#map-的创建" aria-label="Permalink to &quot;Map 的创建&quot;">​</a></h2><blockquote><p><code>Map</code> 使用 <code>make</code> 函数来创建，格式为：<code>make(map[key]value)</code> 。</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>也可以使用 <code>map</code> 语法创建，且可以指定具体的键值对</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;肖申克的救赎&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://movie.douban.com/subject/1292052/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;肖申克的救赎&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://movie.douban.com/subject/1292052/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="map-添加元素" tabindex="-1">Map 添加元素 <a class="header-anchor" href="#map-添加元素" aria-label="Permalink to &quot;Map 添加元素&quot;">​</a></h2><blockquote><p>我们可以通过 <code>map[key] = value</code> 的方式向 <code>Map</code> 中添加元素。</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movies[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当幸福来敲门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://movie.douban.com/subject/1849031/&quot;</span></span></code></pre></div><h2 id="map-更新元素" tabindex="-1">Map 更新元素 <a class="header-anchor" href="#map-更新元素" aria-label="Permalink to &quot;Map 更新元素&quot;">​</a></h2><blockquote><p>若 <code>key</code> 已存在，则覆盖原有的值</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movies[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当幸福来敲门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://movie.douban.com/subject/1849031/?from=subject-page&quot;</span></span></code></pre></div><h2 id="map-获取元素" tabindex="-1">Map 获取元素 <a class="header-anchor" href="#map-获取元素" aria-label="Permalink to &quot;Map 获取元素&quot;">​</a></h2><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当幸福来敲门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//https://movie.douban.com/subject/1849031/?from=subject-page</span></span></code></pre></div><h2 id="map-删除元素" tabindex="-1">Map 删除元素 <a class="header-anchor" href="#map-删除元素" aria-label="Permalink to &quot;Map 删除元素&quot;">​</a></h2><blockquote><p>使用 <code>delete(map, key)</code> 函数删除键值对，如果 <code>key</code> 不存在，<code>delete</code> 函数不会报错。</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movies, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当幸福来敲门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movies) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map[肖申克的救赎:https://movie.douban.com/subject/1292052/]</span></span></code></pre></div><h2 id="map-key存在性" tabindex="-1">Map key存在性 <a class="header-anchor" href="#map-key存在性" aria-label="Permalink to &quot;Map key存在性&quot;">​</a></h2><blockquote><p>判断 <code>Map</code> 中某个 <code>Key</code> 的存在与否，可以使用语法 value, ok := map[key]，该语法返回两个参数，第一个为键值对中的值，第二个参数为 <code>key</code> 是否存在，<code>true</code> 为存在，<code>false</code> 为不存在。</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value, ok </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;肖申克的救赎&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="map-的遍历" tabindex="-1">Map 的遍历 <a class="header-anchor" href="#map-的遍历" aria-label="Permalink to &quot;Map 的遍历&quot;">​</a></h2><blockquote><p><code>Map</code> 的遍历依然使用 <code>for range</code> 语法。</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// key, value 都获取</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key, value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, key,  value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只获取 key</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只获取 value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _, value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="map-的长度" tabindex="-1">Map 的长度 <a class="header-anchor" href="#map-的长度" aria-label="Permalink to &quot;Map 的长度&quot;">​</a></h2><blockquote><p>我们依然可以使用 <code>len</code> 函数来计算 <code>Map</code> 的长度。</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;肖申克的救赎&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1994&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当幸福来敲门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2006&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movies))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span></code></pre></div><h2 id="map是引用类型" tabindex="-1">Map是引用类型 <a class="header-anchor" href="#map是引用类型" aria-label="Permalink to &quot;Map是引用类型&quot;">​</a></h2><blockquote><p><code>Map</code> 是引用类型，当其被赋值给一个新的变量时，新旧变量指向的是同一个底层数据结构，当改边其中任何一个的时候，另一个也会随之改变。当 <code>Map</code> 作为函数参数传递时也是如此.</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;肖申克的救赎&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1994&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当幸福来敲门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2006&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movies)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map[当幸福来敲门:2006 肖申克的救赎:1994]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newMovies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movies</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newMovies[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;肖申克的救赎&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1995&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movies)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map[当幸福来敲门:2006 肖申克的救赎:1995]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fmt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newMovies)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// map[当幸福来敲门:2006 肖申克的救赎:1995]</span></span></code></pre></div><h2 id="空-map" tabindex="-1">空 Map <a class="header-anchor" href="#空-map" aria-label="Permalink to &quot;空 Map&quot;">​</a></h2><blockquote><p><code>Map</code> 之间不能用 == 操作符来判断是否相等，应该使用循环来判断，判断 <code>Map</code> 是否为空可以使用 <code>map == nil</code> 。</p></blockquote>`,33),e=[n];function p(k,l,o,d,E,r){return a(),i("div",null,e)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};
