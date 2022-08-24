import{_ as s,c as n,o as a,d as l}from"./app.8c4db2f0.js";const i=JSON.parse('{"title":"\u6307\u9488","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6307\u9488","slug":"\u6307\u9488"},{"level":2,"title":"\u6307\u9488\u58F0\u660E\u53CA\u4F7F\u7528","slug":"\u6307\u9488\u58F0\u660E\u53CA\u4F7F\u7528"},{"level":2,"title":"\u4E8C\u7EA7\u6307\u9488","slug":"\u4E8C\u7EA7\u6307\u9488"},{"level":2,"title":"\u6307\u9488\u7684\u4F5C\u7528","slug":"\u6307\u9488\u7684\u4F5C\u7528"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u6307\u9488.md","lastUpdated":1661331191000}'),p={name:"go/\u57FA\u7840\u77E5\u8BC6/\u6307\u9488.md"},o=l(`<h2 id="\u6307\u9488" tabindex="-1">\u6307\u9488 <a class="header-anchor" href="#\u6307\u9488" aria-hidden="true">#</a></h2><blockquote><p>\u6307\u9488\uFF0C\u6307\u5411\u7684\u662F\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u5E38\u91CF\u7684\u5185\u5B58\u5730\u5740</p></blockquote><h2 id="\u6307\u9488\u58F0\u660E\u53CA\u4F7F\u7528" tabindex="-1">\u6307\u9488\u58F0\u660E\u53CA\u4F7F\u7528 <a class="header-anchor" href="#\u6307\u9488\u58F0\u660E\u53CA\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u6307\u9488\u901A\u8FC7\u5728\u5236\u5B9A\u7C7B\u578B\u524D\u9762\u52A0 * \u7B26\u53F7\u6765\u5B9A\u4E49\u6307\u9488\uFF0C\u5982\u4E0B\u7684 age \u6307\u9488</p></blockquote><blockquote><p>\u6307\u9488\u5982\u679C\u53EA\u505A\u4E86\u58F0\u660E\uFF0C\u6CA1\u6709\u4EFB\u4F55\u53D8\u91CF\u4E3A\u5176\u8D4B\u503C\uFF0C\u90A3\u4E48\u8BE5\u6307\u9488\u89C6\u4E3A <strong>\u7A7A\u6307\u9488</strong>\uFF0C\u5176\u503C\u4E3A <code>&lt;nil&gt;</code>\uFF0C\u5982\u4E0B\u9762\u7684 ptr</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ptr </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">float32</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a           </span><span style="color:#676E95;">// \u4F7F\u7528 &amp; \u7B26\u53F7\u83B7\u5F97\u6BD4\u53D8\u91CF a \u7684\u5185\u5B58\u5730\u5740\uFF0C\u5E76\u8D4B\u503C\u7ED9\u6307\u9488 age </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// a \u7684 \u5185\u5B58\u5730\u5740 0xc000018090</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// &lt;nil&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;">// \u4F7F\u7528 * \u7B26\u53F7\u6765\u6539\u53D8\u6307\u9488\u7684\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u4E2D\u7684\u503C\u4E3A 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// a \u7684\u503C\u53D8\u66F4\u4E3A 30</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// a \u7684 \u5185\u5B58\u5730\u5740\u4F9D\u7136\u4E3A 0xc000018090\uFF0C\u6CA1\u6709\u53D8\u66F4</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u7EA7\u6307\u9488" tabindex="-1">\u4E8C\u7EA7\u6307\u9488 <a class="header-anchor" href="#\u4E8C\u7EA7\u6307\u9488" aria-hidden="true">#</a></h2><blockquote><p>Go \u8BED\u8A00\u652F\u6301\u5B9A\u4E49\u4E00\u4E2A\u6307\u5411\u6307\u9488\u7684\u6307\u9488\uFF0C\u4E5F\u5C31\u662F\u4E8C\u7EA7\u6307\u9488\uFF0C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a       </span><span style="color:#676E95;">// \u4E00\u7EA7\u6307\u9488\uFF0C\u6307\u5411\u53D8\u91CF a \u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u5185\u5B58\u5730\u5740 0xc000018090</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u5185\u5B58\u5730\u5740 0xc000018090</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">b       </span><span style="color:#676E95;">// \u4E8C\u7EA7\u6307\u9488\uFF0C\u6307\u5411\u6307\u9488 b \u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u5185\u5B58\u5730\u5740 0xc00000e030</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u5185\u5B58\u5730\u5740 0xc00000e030</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6307\u9488\u7684\u4F5C\u7528" tabindex="-1">\u6307\u9488\u7684\u4F5C\u7528 <a class="header-anchor" href="#\u6307\u9488\u7684\u4F5C\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u8FC7\u6307\u9488\u6539\u53D8\u6307\u9488\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\u4E2D\u7684\u503C\uFF0C\u6BD4\u5982\u4EA4\u6362\u4E24\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u5C31\u53EF\u4EE5\u7528\u8FC7\u6307\u9488\u6765\u6539\u53D8\u5185\u5B58\u5730\u5740\u7684\u503C\u6765\u64CD\u4F5C</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  b </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">swap</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">swap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> temp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">c    </span><span style="color:#676E95;">// \u5C06 c \u6307\u9488\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u4E2D\u7684\u503C\u8D4B\u503C\u7ED9\u4E34\u65F6\u53D8\u91CF temp</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">d          </span><span style="color:#676E95;">// \u5C06 d \u6307\u9488\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u7684\u503C\u8D4B\u503C\u7ED9\u6307\u9488 c \u5185\u5B58\u5730\u5740\u4E2D\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> temp        </span><span style="color:#676E95;">// \u5C06\u4E34\u65F6\u53D8\u91CF temp \u7684\u503C\u8D4B\u503C\u7ED9\u6307\u9488 d \u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u4E2D\u7684\u503C</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function c(t,r,D,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
