import{_ as n,c as a,d as l,e as o,o as e,r as t}from"./app.dc302ea1.js";const h=JSON.parse('{"title":"Go 语言笔记：基础数据类型","description":"Go,布尔类型,数字类型,特殊整型,字符类型,浮点类型,复数类型","frontmatter":{"title":"Go 语言笔记：基础数据类型","head":[["meta",{"property":"og:title","content":"Go 语言笔记：基础数据类型"}],["meta",{"name":"description","content":"Go,布尔类型,数字类型,特殊整型,字符类型,浮点类型,复数类型"}],["meta",{"name":"keywords","content":"Go,布尔类型,数字类型,特殊整型,字符类型,浮点类型,复数类型"}],["meta",{"property":"og:description","content":"Go,布尔类型,数字类型,特殊整型,字符类型,浮点类型,复数类型"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}]]},"headers":[{"level":2,"title":"布尔型","slug":"布尔型","link":"#布尔型","children":[]},{"level":2,"title":"数字类型","slug":"数字类型","link":"#数字类型","children":[{"level":3,"title":"整型","slug":"整型","link":"#整型","children":[]},{"level":3,"title":"特殊整型","slug":"特殊整型","link":"#特殊整型","children":[]}]},{"level":2,"title":"字符类型","slug":"字符类型","link":"#字符类型","children":[]},{"level":2,"title":"浮点型","slug":"浮点型","link":"#浮点型","children":[]},{"level":2,"title":"复数类型","slug":"复数类型","link":"#复数类型","children":[]}],"relativePath":"go/基础知识/基础数据类型.md"}'),p={name:"go/基础知识/基础数据类型.md"},c=o(`<h1 id="go-语言笔记-基础数据类型" tabindex="-1">Go 语言笔记：基础数据类型 <a class="header-anchor" href="#go-语言笔记-基础数据类型" aria-hidden="true" loading="lazy">#</a></h1><h2 id="布尔型" tabindex="-1">布尔型 <a class="header-anchor" href="#布尔型" aria-hidden="true" loading="lazy">#</a></h2><p>布尔型的值是常量的 <code>true</code> 或者 <code>false</code>, 默认值是 <code>false</code></p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> flag </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> isMale </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> isFemale </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"></span></code></pre></div><h2 id="数字类型" tabindex="-1">数字类型 <a class="header-anchor" href="#数字类型" aria-hidden="true" loading="lazy">#</a></h2><p>数字类型分为 <code>int</code>、<code>uint</code>、<code>float</code>、<code>complex</code>、<code>byte</code>、<code>rune</code>、<code>uintptr</code> 等</p><h3 id="整型" tabindex="-1">整型 <a class="header-anchor" href="#整型" aria-hidden="true" loading="lazy">#</a></h3><p>整型主要分为 <code>int</code>、<code>uint</code> 两大类，详见表格如下</p><table><thead><tr><th>类型</th><th>有无符号</th><th>范围</th></tr></thead><tbody><tr><td>uint8</td><td>无符号 8 位整型</td><td>0--255</td></tr><tr><td>uint16</td><td>无符号 16 位整型</td><td>0--65535</td></tr><tr><td>uint32</td><td>无符号 32 位整型</td><td>0--4294967295</td></tr><tr><td>uint64</td><td>无符号 64 位整型</td><td>0--18446744073709551615</td></tr><tr><td>int8</td><td>有符号 8 位整型</td><td>-128--127</td></tr><tr><td>int16</td><td>有符号 8 位整型</td><td>-32768--32767</td></tr><tr><td>int32</td><td>有符号 8 位整型</td><td>-2147483648--2147483647</td></tr><tr><td>int64</td><td>有符号 8 位整型</td><td>-9223372036854775808--9223372036854775807</td></tr></tbody></table><h3 id="特殊整型" tabindex="-1">特殊整型 <a class="header-anchor" href="#特殊整型" aria-hidden="true" loading="lazy">#</a></h3><p><code>Go</code> 对于 <code>int</code> 和 <code>uint</code> 这两种在不同平台的实现不一样，</p><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>uint</td><td>32 位操作系统上就是 <code>uint32</code>，64 位操作系统上就是 <code>uint64</code></td></tr><tr><td>int</td><td>32 位操作系统上就是 <code>int32</code>，64 位操作系统上就是 <code>int64</code></td></tr><tr><td>uintptr</td><td>无符号整型，用于存放一个指针</td></tr></tbody></table><p>在使用 <code>int</code> 和 <code>uint</code> 类型时，不能假定它是 32 位还是 64 位，应考虑其在不同平台上的差异化。</p><h2 id="字符类型" tabindex="-1">字符类型 <a class="header-anchor" href="#字符类型" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> 语言中单个字符有两种，一种是代表 <code>ASCII码</code>，一种是代表 <code>UTF-8</code> 字符</p><ul><li><code>byte</code> 是 <code>uint8</code> 的别名，等同之，主要区别是 byte 用来标识 <code>ASCII码</code> 字符， 而 <code>uint8</code> 标识数字</li><li><code>rune</code> 是 <code>int32</code> 的别名，等同之，主要区别是 byte 用来标识 <code>UTF-8</code> 字符， 而 <code>uint8</code> 标识数字</li></ul><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    str </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello, 柠檬</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 打印 ASCII 码长度，使用 len 函数取长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 打印出 unicode 字符，使用 range 函数取长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">range</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>打印结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">13</span></span>
<span class="line"><span style="color:#A6ACCD;">hello, æ æª¬</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 0 h</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 1 e</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 2 l</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 3 l</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 4 o</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 5 ,</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 6  </span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 7 柠</span></span>
<span class="line"><span style="color:#A6ACCD;">unicode: 10 檬</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>可以看到这里的长度 13 和我们普遍认为字符串的长度 9 不一样，是因为 len 函数默认是以 ASCII 码的方法统计长度，可以认为统计的是字节长度。 这样打印出来的中文是乱码，此时拿到的字符类型是 ASCII 码，其代表不了中文字符，可以使用 range 函数遍历打印出中文，可以看到 &quot;柠檬&quot; 这两个中文字符各占 3 个字节。 但此时长度也不是我们认为的 9，依然是 13，这里打印的是下标 i。总结，<code>len</code> 函数可以用来获取切片、字符串、通道(channel)的长度，区别是对于字符串，<code>len</code> 统计的字符串的 byte 个数， 而中文是以 UTF-8 格式存储的，UTF-8 是一种变长的编码方法，字符长度从 2 个字节到 4 个字节不等，因此当含有中文的字符串，统计其长度应使用如下的方式：</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">unicode/utf8</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    str </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello, 柠檬</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 方式一，将字符串转换成 rune</span></span>
<span class="line"><span style="color:#A6ACCD;">    r </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#82AAFF;">rune</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 9</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 方式二，使用内置包 unicode/utf8 中的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">utf8</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RuneCountInString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 方式二，使用内置包 strings 中的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">strings</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Count</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="浮点型" tabindex="-1">浮点型 <a class="header-anchor" href="#浮点型" aria-hidden="true" loading="lazy">#</a></h2><p>通常情况下应该优先选择 <code>float64</code>, 因为 <code>float32</code> 能精确表示的整数位并不是很大，且累计计算误差很容易超过最大值。</p><table><thead><tr><th>类型</th><th>范围</th></tr></thead><tbody><tr><td>float32</td><td>IEEE-754 32位浮点型数</td></tr><tr><td>float64</td><td>IEEE-754 64位浮点型数</td></tr></tbody></table><h2 id="复数类型" tabindex="-1">复数类型 <a class="header-anchor" href="#复数类型" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> 中存在复数的概念，复数由三部分组成 RE + IMi, 其中 RE 和 IM 分别表示复数的实数和虚数部分，i 为复数单位。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对于一个复数 <code>z := complex(x, y)</code>，可以通过内置函数 <code>real(z)</code> 来获得该复数的实部，也就是 <code>x</code>; 通过 <code>imag(z)</code> 获得该复数的虚部，也就是 <code>y</code>。 复数也可以使用 <code>==</code> 和 <code>!=</code> 来进行比较，只有当实数和虚数都一致时，才认为两个复数相等，操作复数优先选择 <code>complex128</code>， 因为内置的 <code>math</code> 和 <code>cmplx</code> 包提供的函数使用的类型都是该类型。</p></div><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:center;">范围</th><th style="text-align:center;">声明方式</th></tr></thead><tbody><tr><td style="text-align:left;">complex64</td><td style="text-align:center;">32 位实数和虚数</td><td style="text-align:center;">var name complex64 = complex(x, y)</td></tr><tr><td style="text-align:left;">complex128</td><td style="text-align:center;">64 位实数和虚数</td><td style="text-align:center;">var name complex128 = complex(x, y)</td></tr></tbody></table><hr>`,29);function r(d,i,D,y,F,A){const s=t("GoogleAdsense");return e(),a("div",null,[c,l(s)])}const u=n(p,[["render",r]]);export{h as __pageData,u as default};
