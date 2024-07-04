import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.D_7_7Osg.js";const c=JSON.parse('{"title":"Go 语言笔记：字符串","description":"Go 字符串是一种值类型，值不可变，即不可修改(修改会重新分配内存，原始字符串还保留)，字符串是字节定长数组","frontmatter":{"title":"Go 语言笔记：字符串","head":[["meta",{"property":"og:title","content":"Go 语言笔记：字符串"}],["meta",{"name":"description","content":"Go 字符串是一种值类型，值不可变，即不可修改(修改会重新分配内存，原始字符串还保留)，字符串是字节定长数组"}],["meta",{"name":"keywords","content":"Go,字符串,值不可变"}],["meta",{"property":"og:description","content":"Go 字符串是一种值类型，值不可变，即不可修改，修改会重新分配内存，原始字符串还保留，字符串是字节定长数组"}],["meta",{"property":"og:url","content":"https://sooloe.com/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%AD%97%E7%AC%A6%E4%B8%B2"}],["link",{"rel":"canonical","href":"https://sooloe.com/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%AD%97%E7%AC%A6%E4%B8%B2"}]]},"headers":[],"relativePath":"go/基础知识/字符串.md","filePath":"go/基础知识/字符串.md"}'),t={name:"go/基础知识/字符串.md"},l=n(`<h1 id="go-语言笔记-字符串" tabindex="-1">Go 语言笔记：字符串 <a class="header-anchor" href="#go-语言笔记-字符串" aria-label="Permalink to &quot;Go 语言笔记：字符串&quot;">​</a></h1><h2 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-label="Permalink to &quot;字符串类型&quot;">​</a></h2><p>字符串是一种值类型，值不可变，即不可修改(修改会重新分配内存，原始字符串还保留)，字符串是字节定长数组。 <code>Go</code> 支持两种形式的字符串:</p><blockquote><p>解释字符串：使用双引号扩起来，其中的转义符(详见表格[转义符][#转义符])会被替换</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;This is a wonderful </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world &quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输出:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a wonderful </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> world</span></span></code></pre></div><blockquote><p>非解释字符串：使用反引号括起来，支持转义符原样输出，同时反引号支持多行字符串</p></blockquote><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`This is a wonderful \\n world\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输出:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a wonderful \\n world</span></span></code></pre></div><h2 id="转义符" tabindex="-1">转义符 <a class="header-anchor" href="#转义符" aria-label="Permalink to &quot;转义符&quot;">​</a></h2><blockquote><p>常见的转义符见如下表格</p></blockquote><table tabindex="0"><thead><tr><th>转义符</th><th>含义</th></tr></thead><tbody><tr><td>\\a</td><td>响铃</td></tr><tr><td>\\b</td><td>退格</td></tr><tr><td>\\f</td><td>换页</td></tr><tr><td>\\r</td><td>回车符（返回行首）</td></tr><tr><td>\\n</td><td>换行符（直接跳到下一行的同列位置）</td></tr><tr><td>\\t</td><td>制表符</td></tr><tr><td>\\v</td><td>垂直制表符</td></tr><tr><td>&#39;</td><td>单引号</td></tr><tr><td>&quot;</td><td>双引号</td></tr><tr><td><code>\\</code></td><td>反斜杠</td></tr></tbody></table><ul><li>字符串比较可以使用比较运算符(==、!=、&lt;、&lt;=、&gt;=、&gt;)通过在内存中按照字节比较来实现字符串的对比;</li><li>字符串长度可以使用 len(str) 来获取字符串所占的字节长度，使用 utf8.RuneCountInString(str) 来统计字符个数;</li><li>字符串拼接可以使用 <code>+</code> 或者 <code>+=</code> 来实现， <code>s := s1 + s2</code> or <code>s += s3</code>，也可以使用 <code>strings.join</code> 函数来拼接，以及更高效的 <code>bytes.Buffer</code> 来实现拼接;</li><li>另外，获取字符串中某个字节的地址的行为是非法的，如 <code>&amp;str[i]</code>。</li></ul><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unicode/utf8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`Hello，世界\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 13</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(utf8.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RuneCountInString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;, Lemon&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello, Lemon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;!&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello, Lemon!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 编译报错：Cannot take the address of name[1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="字符串修改" tabindex="-1">字符串修改 <a class="header-anchor" href="#字符串修改" aria-label="Permalink to &quot;字符串修改&quot;">​</a></h2><p>修改字符串需要先将其转换成 <code>[]rune</code> 或者 <code>[]byte</code>, 完成后再转换为 <code>string</code>, 修改操作会重新分配内存，复制字节数组</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	changeString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> changeString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello world&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    byteStr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    byteStr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(byteStr))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// pello world</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str1)             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello world</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    str2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello 柠檬&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    runeStr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rune</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str2)   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    runeStr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">柚</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    runeStr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">子</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(runeStr))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello 柚子</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str2)             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello 柠檬</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    str2[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             // 直接修改字符串报错：cannot assign to str2[0]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,15),h=[l];function p(k,e,d,r,E,g){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
