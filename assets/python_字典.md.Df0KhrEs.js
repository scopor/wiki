import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.D_7_7Osg.js";const g=JSON.parse('{"title":"字典","description":"","frontmatter":{},"headers":[],"relativePath":"python/字典.md","filePath":"python/字典.md"}'),n={name:"python/字典.md"},h=t(`<h1 id="字典" tabindex="-1">字典 <a class="header-anchor" href="#字典" aria-label="Permalink to &quot;字典&quot;">​</a></h1><p>字典 (Dictionary) 是 Python 中一种常用的数据结构，它以键值对 (key-value pair) 的形式存储数据。每个键必须是唯一的，并且与一个值关联。字典是无序的，这意味着键值对的顺序是不确定的。</p><h2 id="字典的创建" tabindex="-1">字典的创建 <a class="header-anchor" href="#字典的创建" aria-label="Permalink to &quot;字典的创建&quot;">​</a></h2><h3 id="使用花括号-创建" tabindex="-1">使用花括号 <code>{}</code> 创建 <a class="header-anchor" href="#使用花括号-创建" aria-label="Permalink to &quot;使用花括号 \`{}\` 创建&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;city&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Beijing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 30, &#39;city&#39;: &#39;Beijing&#39;}</span></span></code></pre></div><h3 id="使用-dict-函数创建" tabindex="-1">使用 <code>dict()</code> 函数创建 <a class="header-anchor" href="#使用-dict-函数创建" aria-label="Permalink to &quot;使用 \`dict()\` 函数创建&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">city</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Shanghai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;name&#39;: &#39;Bob&#39;, &#39;age&#39;: 25, &#39;city&#39;: &#39;Shanghai&#39;}</span></span></code></pre></div><h2 id="字典的访问" tabindex="-1">字典的访问 <a class="header-anchor" href="#字典的访问" aria-label="Permalink to &quot;字典的访问&quot;">​</a></h2><h3 id="使用键" tabindex="-1">使用键 <a class="header-anchor" href="#使用键" aria-label="Permalink to &quot;使用键&quot;">​</a></h3><p>使用方括号 <code>[]</code> 和键来访问与键关联的值。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: Alice</span></span></code></pre></div><h3 id="使用-get-方法" tabindex="-1">使用 <code>get()</code> 方法 <a class="header-anchor" href="#使用-get-方法" aria-label="Permalink to &quot;使用 \`get()\` 方法&quot;">​</a></h3><p>更安全的方式，如果键不存在，返回 <code>None</code>。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;job&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: None</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;job&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: Unknown (指定默认值)</span></span></code></pre></div><h2 id="字典的修改" tabindex="-1">字典的修改 <a class="header-anchor" href="#字典的修改" aria-label="Permalink to &quot;字典的修改&quot;">​</a></h2><p><strong>使用键和赋值运算符:</strong> 直接修改与键关联的值。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 31</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 31, &#39;city&#39;: &#39;Beijing&#39;}</span></span></code></pre></div><h2 id="字典的添加" tabindex="-1">字典的添加 <a class="header-anchor" href="#字典的添加" aria-label="Permalink to &quot;字典的添加&quot;">​</a></h2><p><strong>使用键和赋值运算符:</strong> 添加新的键值对。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;job&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Software Engineer&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 31, &#39;city&#39;: &#39;Beijing&#39;, &#39;job&#39;: &#39;Software Engineer&#39;}</span></span></code></pre></div><h2 id="字典的删除" tabindex="-1">字典的删除 <a class="header-anchor" href="#字典的删除" aria-label="Permalink to &quot;字典的删除&quot;">​</a></h2><h3 id="使用-del-关键字" tabindex="-1">使用 <code>del</code> 关键字 <a class="header-anchor" href="#使用-del-关键字" aria-label="Permalink to &quot;使用 \`del\` 关键字&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_dict[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;city&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 31, &#39;job&#39;: &#39;Software Engineer&#39;}</span></span></code></pre></div><h3 id="使用-pop-方法" tabindex="-1">使用 <code>pop()</code> 方法 <a class="header-anchor" href="#使用-pop-方法" aria-label="Permalink to &quot;使用 \`pop()\` 方法&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">city </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_dict.pop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;job&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(city)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: Software Engineer</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 31}</span></span></code></pre></div><h2 id="字典的合并" tabindex="-1">字典的合并 <a class="header-anchor" href="#字典的合并" aria-label="Permalink to &quot;字典的合并&quot;">​</a></h2><p>字典合并指的是将两个或多个字典的内容合并成一个新的字典。Python 提供了多种方法实现字典合并，每种方法都有其优缺点：</p><h3 id="使用-update-方法" tabindex="-1">使用 <code>update()</code> 方法 <a class="header-anchor" href="#使用-update-方法" aria-label="Permalink to &quot;使用 \`update()\` 方法&quot;">​</a></h3><p><code>update()</code> 方法将另一个字典的内容更新到当前字典中。如果两个字典中存在相同的键，则使用另一个字典中的值覆盖当前字典中的值。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dict1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dict2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dict1.update(dict2)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dict1)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: {&#39;a&#39;: 1, &#39;b&#39;: 2, &#39;c&#39;: 3, &#39;d&#39;: 4}</span></span></code></pre></div><h3 id="使用解包运算符" tabindex="-1">使用解包运算符 <code>**</code> <a class="header-anchor" href="#使用解包运算符" aria-label="Permalink to &quot;使用解包运算符 \`**\`&quot;">​</a></h3><p>解包运算符 <code>**</code> 可以将字典展开，将其中的键值对合并到新的字典中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dict1 = {&#39;a&#39;: 1, &#39;b&#39;: 2}</span></span>
<span class="line"><span>dict2 = {&#39;c&#39;: 3, &#39;d&#39;: 4}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>merged_dict = {**dict1, **dict2}</span></span>
<span class="line"><span>print(merged_dict)  # 输出: {&#39;a&#39;: 1, &#39;b&#39;: 2, &#39;c&#39;: 3, &#39;d&#39;: 4}</span></span></code></pre></div><h3 id="使用-collections-chainmap" tabindex="-1">使用 <code>collections.ChainMap</code> <a class="header-anchor" href="#使用-collections-chainmap" aria-label="Permalink to &quot;使用 \`collections.ChainMap\`&quot;">​</a></h3><p><code>collections.ChainMap</code> 类可以将多个字典链接在一起，形成一个新的视图。当访问键时，它会依次查找每个字典，直到找到匹配的键。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from collections import ChainMap</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dict1 = {&#39;a&#39;: 1, &#39;b&#39;: 2}</span></span>
<span class="line"><span>dict2 = {&#39;c&#39;: 3, &#39;d&#39;: 4}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>merged_dict = ChainMap(dict1, dict2)</span></span>
<span class="line"><span>print(merged_dict[&#39;a&#39;])  # 输出: 1</span></span>
<span class="line"><span>print(merged_dict[&#39;c&#39;])  # 输出: 3</span></span>
<span class="line"><span>print(merged_dict)       # 输出: ChainMap({&#39;a&#39;: 1, &#39;b&#39;: 2}, {&#39;c&#39;: 3, &#39;d&#39;: 4})</span></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li><code>update()</code> 方法会修改原字典，而解包运算符和 <code>ChainMap</code> 则不会修改原字典。</li><li>如果两个字典中有相同的键，使用 <code>update()</code> 和解包运算符会使用后一个字典的值覆盖前一个字典的值。</li><li><code>ChainMap</code> 不会真正合并字典，而是创建了一个新的视图，当访问键时会依次查找每个字典。</li></ul><h2 id="字典的排序" tabindex="-1">字典的排序 <a class="header-anchor" href="#字典的排序" aria-label="Permalink to &quot;字典的排序&quot;">​</a></h2><p>字典本身是无序的，但我们可以使用一些方法将字典按照键或值进行排序。</p><h3 id="按照键排序" tabindex="-1">按照键排序 <a class="header-anchor" href="#按照键排序" aria-label="Permalink to &quot;按照键排序&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sorted_keys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sorted_keys)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span></code></pre></div><h3 id="按照值排序" tabindex="-1">按照值排序 <a class="header-anchor" href="#按照值排序" aria-label="Permalink to &quot;按照值排序&quot;">​</a></h3><p>可以使用 <code>sorted()</code> 函数结合 <code>items()</code> 方法，对字典的键值对按照值进行排序。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sorted_items </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict.items(), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item: item[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sorted_items)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: [(&#39;a&#39;, 1), (&#39;b&#39;, 2), (&#39;c&#39;, 3)]</span></span></code></pre></div><h3 id="使用-collections-ordereddict" tabindex="-1">使用 <code>collections.OrderedDict</code> <a class="header-anchor" href="#使用-collections-ordereddict" aria-label="Permalink to &quot;使用 \`collections.OrderedDict\`&quot;">​</a></h3><p><code>collections.OrderedDict</code> 类可以保留字典元素插入的顺序。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collections </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OrderedDict</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_dict </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OrderedDict([(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: OrderedDict([(&#39;c&#39;, 3), (&#39;a&#39;, 1), (&#39;b&#39;, 2)])</span></span></code></pre></div><h3 id="注意事项-1" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项-1" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li><code>sorted()</code> 函数创建的是一个新的排序后的列表，不会修改原字典。</li><li><code>OrderedDict</code> 保留插入顺序，但无法根据键或值进行排序。</li></ul><h2 id="字典其他常见操作" tabindex="-1">字典其他常见操作 <a class="header-anchor" href="#字典其他常见操作" aria-label="Permalink to &quot;字典其他常见操作&quot;">​</a></h2><h3 id="keys-获取字典中的所有键" tabindex="-1"><code>keys()</code> : 获取字典中的所有键 <a class="header-anchor" href="#keys-获取字典中的所有键" aria-label="Permalink to &quot;\`keys()\` : 获取字典中的所有键&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>keys = my_dict.keys()</span></span>
<span class="line"><span>print(keys)    # 输出: dict_keys([&#39;name&#39;, &#39;age&#39;])</span></span></code></pre></div><h3 id="values-获取字典中的所有值" tabindex="-1"><code>values()</code> : 获取字典中的所有值 <a class="header-anchor" href="#values-获取字典中的所有值" aria-label="Permalink to &quot;\`values()\` : 获取字典中的所有值&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_dict.values()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(values)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: dict_values([&#39;Alice&#39;, 31])</span></span></code></pre></div><h3 id="items-获取字典中所有键值对" tabindex="-1"><code>items()</code> : 获取字典中所有键值对 <a class="header-anchor" href="#items-获取字典中所有键值对" aria-label="Permalink to &quot;\`items()\` : 获取字典中所有键值对&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">items </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_dict.items()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(items)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: dict_items([(&#39;name&#39;, &#39;Alice&#39;), (&#39;age&#39;, 31)])</span></span></code></pre></div><h3 id="len-函数-获取字典中键值对的数量" tabindex="-1"><code>len()</code> 函数: 获取字典中键值对的数量 <a class="header-anchor" href="#len-函数-获取字典中键值对的数量" aria-label="Permalink to &quot;\`len()\` 函数: 获取字典中键值对的数量&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(my_dict)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(length)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 2</span></span></code></pre></div><h3 id="in-运算符-检查字典中是否存在某个键" tabindex="-1"><code>in</code> 运算符: 检查字典中是否存在某个键 <a class="header-anchor" href="#in-运算符-检查字典中是否存在某个键" aria-label="Permalink to &quot;\`in\` 运算符: 检查字典中是否存在某个键&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_dict:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The key &#39;name&#39; exists&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>字典是 Python 中非常强大的数据结构，它提供了一种灵活、高效的方式来存储和访问数据。通过掌握字典的基本操作，我们可以更方便地处理各种数据，并提高代码的效率。</p>`,63),e=[h];function l(p,k,d,r,o,c){return a(),i("div",null,e)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
