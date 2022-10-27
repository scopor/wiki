import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.40b5c47f.js";const g=JSON.parse('{"title":"\u5BFC\u5305\u7684\u65B9\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u5305\u7684\u65B9\u5F0F","slug":"\u5BFC\u5305\u7684\u65B9\u5F0F"},{"level":2,"title":"\u533F\u540D\u3001\u522B\u540D\u3001\u5168\u91CF\u5BFC\u5165","slug":"\u533F\u540D\u3001\u522B\u540D\u3001\u5168\u91CF\u5BFC\u5165"},{"level":2,"title":"init \u51FD\u6570\u6267\u884C\u6D41\u7A0B","slug":"init-\u51FD\u6570\u6267\u884C\u6D41\u7A0B"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u5305\u548C\u6587\u4EF6.md","lastUpdated":1666854463000}'),t={name:"go/\u57FA\u7840\u77E5\u8BC6/\u5305\u548C\u6587\u4EF6.md"},c=p(`<h2 id="\u5BFC\u5305\u7684\u65B9\u5F0F" tabindex="-1">\u5BFC\u5305\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u5BFC\u5305\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><blockquote><p>\u5355\u4E2A\u5305\u7684\u5BFC\u5165</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u591A\u4E2A\u5305\u7684\u5BFC\u5165</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5305\u5BFC\u5165\u4E4B\u540E\u5FC5\u987B\u4F7F\u7528, \u5426\u5219\u7F16\u8BD1\u5668\u4F1A\u63D0\u793A: Unused import\uFF0C\u5982\u679C\u5FC5\u987B\u5BFC\u5165\uFF0C\u53EF\u4EE5\u4F7F\u7528\u533F\u540D\u5BFC\u5165\u7684\u65B9\u5F0F</p></blockquote><h2 id="\u533F\u540D\u3001\u522B\u540D\u3001\u5168\u91CF\u5BFC\u5165" tabindex="-1">\u533F\u540D\u3001\u522B\u540D\u3001\u5168\u91CF\u5BFC\u5165 <a class="header-anchor" href="#\u533F\u540D\u3001\u522B\u540D\u3001\u5168\u91CF\u5BFC\u5165" aria-hidden="true">#</a></h2><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    _ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">image/png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u533F\u540D\u5BFC\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">    . </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">math</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;">// \u5168\u91CF\u5BFC\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">    str </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u522B\u540D\u5BFC\u5165</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u4F7F\u7528\u522B\u540D\u8C03\u7528\u5176\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5168\u91CF\u5BFC\u5165\u540E\uFF0C\u76F4\u63A5\u50CF\u8C03\u7528\u672C\u6587\u4EF6\u7684\u51FD\u6570\u4E00\u6837\u8C03\u7528\u5176\u51FD\u6570\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Abs</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u533F\u540D\u5BFC\u5305\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3\u4EE3\u7801\u4E2D\u6CA1\u6709\u663E\u5F0F\u8C03\u7528\u8BE5\u5305\u7684\u51FD\u6570\u4F46\u6267\u884C\u53C8\u5FC5\u987B\u9700\u8981\u65F6\uFF0C\u7F16\u8BD1\u5668\u63D0\u793AUnused import \u7684\u95EE\u9898\uFF0C\u5982\u56FE\u7247\u683C\u5F0F\u8F6C\u6362, \u4F7F\u7528\u547D\u4EE4 <code>cat demo.png | go run convert.go &gt; demo.jpeg</code> \u6267\u884C\u8F6C\u6362\uFF0C <code>convert.go</code> \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">image</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">image/jpeg</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	img</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> kind</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Decode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stdin</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fprintf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stderr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">err: %v</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	_</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fprintf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stderr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input format: %v</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> kind</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	_ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> jpeg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Encode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stdout</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">jpeg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Quality</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">95</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="init-\u51FD\u6570\u6267\u884C\u6D41\u7A0B" tabindex="-1"><strong>init</strong> \u51FD\u6570\u6267\u884C\u6D41\u7A0B <a class="header-anchor" href="#init-\u51FD\u6570\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u6709\u9879\u76EE\u8DEF\u5F84\u5982\u4E0B\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">lemon</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 lib1</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502\xA0\xA0 \u2514\u2500\u2500 lib1</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">go</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500\u2500 lib2</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502\xA0\xA0 \u2514\u2500\u2500 lib2</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">go</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 main</span><span style="color:#89DDFF;">.</span><span style="color:#89DDFF;">go</span></span>
<span class="line"></span></code></pre></div><blockquote><p>lib1 \u5305\u4E2D \u6587\u4EF6 lib2.go \u5185\u5BB9\u4E3A\uFF1A</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lib1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8FD9\u91CC\u51FD\u6570\u5927\u5199\u5F00\u5934\u8868\u793A\u53EF\u4EE5\u88AB\u5916\u90E8\u5305\u5F15\u5165\u540E\u8C03\u7528</span></span>
<span class="line"><span style="color:#676E95;">// \u5C0F\u5199\u5F00\u5934\u53EA\u80FD\u5728\u672C\u5305\u4E2D\u8C03\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I&#39;m in lib1.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>lib2 \u5305\u4E2D \u6587\u4EF6 lib2.go \u5185\u5BB9\u4E3A\uFF1A</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lib2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I&#39;m in lib2.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>main.go \u5185\u5BB9\u5982\u4E0B\uFF1A</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lemon/lib1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lemon/lib2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	lib2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	lib1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6267\u884C main \u51FD\u6570\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m in lib1.</span></span>
<span class="line"><span style="color:#C3E88D;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">m in lib2</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Hi</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u53EF\u4EE5\u770B\u5230 <strong>init</strong> \u51FD\u6570\u6267\u884C\u7684\u65F6\u95F4\u662F\u6309\u7167\u88AB <strong>main</strong> \u5305\u5BFC\u5165\u7684\u987A\u5E8F\u6267\u884C\u7684\u3002</p></blockquote>`,22);function D(r,F,y,A,C,i){const s=e("GoogleAdsense");return o(),a("div",null,[c,l(s)])}const d=n(t,[["render",D]]);export{g as __pageData,d as default};
