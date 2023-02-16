import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.b1dd07e4.js";const u=JSON.parse('{"title":"Go 语言笔记：字符串","description":"Go 字符串是一种值类型，值不可变，即不可修改(修改会重新分配内存，原始字符串还保留)，字符串是字节定长数组","frontmatter":{"title":"Go 语言笔记：字符串","head":[["meta",{"property":"og:title","content":"Go 语言笔记：字符串"}],["meta",{"name":"description","content":"Go 字符串是一种值类型，值不可变，即不可修改(修改会重新分配内存，原始字符串还保留)，字符串是字节定长数组"}],["meta",{"name":"keywords","content":"Go,字符串,值不可变"}],["meta",{"property":"og:description","content":"Go 字符串是一种值类型，值不可变，即不可修改，修改会重新分配内存，原始字符串还保留，字符串是字节定长数组"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%AD%97%E7%AC%A6%E4%B8%B2"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%AD%97%E7%AC%A6%E4%B8%B2"}]]},"headers":[{"level":2,"title":"字符串类型","slug":"字符串类型","link":"#字符串类型","children":[]},{"level":2,"title":"转义符","slug":"转义符","link":"#转义符","children":[]},{"level":2,"title":"字符串修改","slug":"字符串修改","link":"#字符串修改","children":[]}],"relativePath":"go/基础知识/字符串.md"}'),t={name:"go/基础知识/字符串.md"},c=p(`<h1 id="go-语言笔记-字符串" tabindex="-1">Go 语言笔记：字符串 <a class="header-anchor" href="#go-语言笔记-字符串" aria-hidden="true" loading="lazy">#</a></h1><h2 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-hidden="true" loading="lazy">#</a></h2><p>字符串是一种值类型，值不可变，即不可修改(修改会重新分配内存，原始字符串还保留)，字符串是字节定长数组。 <code>Go</code> 支持两种形式的字符串:</p><blockquote><p>解释字符串：使用双引号扩起来，其中的转义符(详见表格[转义符][#转义符])会被替换</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a wonderful </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> world </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">输出</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a wonderful </span></span>
<span class="line"><span style="color:#A6ACCD;"> world </span></span>
<span class="line"></span></code></pre></div><blockquote><p>非解释字符串：使用反引号括起来，支持转义符原样输出，同时反引号支持多行字符串</p></blockquote><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">This is a wonderful \\n world</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">输出</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a wonderful \\n world</span></span>
<span class="line"></span></code></pre></div><h2 id="转义符" tabindex="-1">转义符 <a class="header-anchor" href="#转义符" aria-hidden="true" loading="lazy">#</a></h2><blockquote><p>常见的转义符见如下表格</p></blockquote><table><thead><tr><th>转义符</th><th>含义</th></tr></thead><tbody><tr><td>\\a</td><td>响铃</td></tr><tr><td>\\b</td><td>退格</td></tr><tr><td>\\f</td><td>换页</td></tr><tr><td>\\r</td><td>回车符（返回行首）</td></tr><tr><td>\\n</td><td>换行符（直接跳到下一行的同列位置）</td></tr><tr><td>\\t</td><td>制表符</td></tr><tr><td>\\v</td><td>垂直制表符</td></tr><tr><td>&#39;</td><td>单引号</td></tr><tr><td>&quot;</td><td>双引号</td></tr><tr><td><code>\\</code></td><td>反斜杠</td></tr></tbody></table><ul><li>字符串比较可以使用比较运算符(==、!=、&lt;、&lt;=、&gt;=、&gt;)通过在内存中按照字节比较来实现字符串的对比;</li><li>字符串长度可以使用 len(str) 来获取字符串所占的字节长度，使用 utf8.RuneCountInString(str) 来统计字符个数;</li><li>字符串拼接可以使用 <code>+</code> 或者 <code>+=</code> 来实现， <code>s := s1 + s2</code> or <code>s += s3</code>，也可以使用 <code>strings.join</code> 函数来拼接，以及更高效的 <code>bytes.Buffer</code> 来实现拼接;</li><li>另外，获取字符串中某个字节的地址的行为是非法的，如 <code>&amp;str[i]</code>。</li></ul><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">unicode/utf8</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello，世界</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 13</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">utf8</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RuneCountInString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 9</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    s </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, Lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// Hello, Lemon</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    s </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Hello, Lemon!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 编译报错：Cannot take the address of name[1]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="字符串修改" tabindex="-1">字符串修改 <a class="header-anchor" href="#字符串修改" aria-hidden="true" loading="lazy">#</a></h2><p>修改字符串需要先将其转换成 <code>[]rune</code> 或者 <code>[]byte</code>, 完成后再转换为 <code>string</code>, 修改操作会重新分配内存，复制字节数组</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">changeString</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">changeString</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    str1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    byteStr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#82AAFF;">byte</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    byteStr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">byteStr</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// pello world</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// Hello world</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    str2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello 柠檬</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    runeStr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#82AAFF;">rune</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    runeStr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">柚</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    runeStr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">子</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">runeStr</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// Hello 柚子</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// Hello 柠檬</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    str2</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">L</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// 直接修改字符串报错：cannot assign to str2[0]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><hr>`,16);function r(D,y,F,A,C,i){const s=e("GoogleAdsense");return o(),a("div",null,[c,l(s)])}const h=n(t,[["render",r]]);export{u as __pageData,h as default};
