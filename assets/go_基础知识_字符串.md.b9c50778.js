import{_ as s,c as n,o as a,d as l}from"./app.8c4db2f0.js";const i=JSON.parse('{"title":"\u5B57\u7B26\u4E32\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B57\u7B26\u4E32\u7C7B\u578B","slug":"\u5B57\u7B26\u4E32\u7C7B\u578B"},{"level":2,"title":"\u8F6C\u4E49\u7B26","slug":"\u8F6C\u4E49\u7B26"},{"level":2,"title":"\u5B57\u7B26\u4E32\u4FEE\u6539","slug":"\u5B57\u7B26\u4E32\u4FEE\u6539"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u5B57\u7B26\u4E32.md","lastUpdated":1661330918000}'),p={name:"go/\u57FA\u7840\u77E5\u8BC6/\u5B57\u7B26\u4E32.md"},o=l(`<h2 id="\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1">\u5B57\u7B26\u4E32\u7C7B\u578B <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u662F\u4E00\u79CD\u503C\u7C7B\u578B\uFF0C\u503C\u4E0D\u53EF\u53D8\uFF0C\u5373\u4E0D\u53EF\u4FEE\u6539(\u4FEE\u6539\u4F1A\u91CD\u65B0\u5206\u914D\u5185\u5B58\uFF0C\u539F\u59CB\u5B57\u7B26\u4E32\u8FD8\u4FDD\u7559)\uFF0C\u5B57\u7B26\u4E32\u662F\u5B57\u8282\u5B9A\u957F\u6570\u7EC4\u3002 <code>Go</code> \u652F\u6301\u4E24\u79CD\u5F62\u5F0F\u7684\u5B57\u7B26\u4E32:</p><blockquote><p>\u89E3\u91CA\u5B57\u7B26\u4E32\uFF1A\u4F7F\u7528\u53CC\u5F15\u53F7\u6269\u8D77\u6765\uFF0C\u5176\u4E2D\u7684\u8F6C\u4E49\u7B26(\u8BE6\u89C1\u8868\u683C[\u8F6C\u4E49\u7B26][#\u8F6C\u4E49\u7B26])\u4F1A\u88AB\u66FF\u6362</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a wonderful </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> world </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a wonderful </span></span>
<span class="line"><span style="color:#A6ACCD;"> world </span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u975E\u89E3\u91CA\u5B57\u7B26\u4E32\uFF1A\u4F7F\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\uFF0C\u652F\u6301\u8F6C\u4E49\u7B26\u539F\u6837\u8F93\u51FA\uFF0C\u540C\u65F6\u53CD\u5F15\u53F7\u652F\u6301\u591A\u884C\u5B57\u7B26\u4E32</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">This is a wonderful \\n world</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a wonderful \\n world</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8F6C\u4E49\u7B26" tabindex="-1">\u8F6C\u4E49\u7B26 <a class="header-anchor" href="#\u8F6C\u4E49\u7B26" aria-hidden="true">#</a></h2><blockquote><p>\u5E38\u89C1\u7684\u8F6C\u4E49\u7B26\u89C1\u5982\u4E0B\u8868\u683C</p></blockquote><table><thead><tr><th>\u8F6C\u4E49\u7B26</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>\\a</td><td>\u54CD\u94C3</td></tr><tr><td>\\b</td><td>\u9000\u683C</td></tr><tr><td>\\f</td><td>\u6362\u9875</td></tr><tr><td>\\r</td><td>\u56DE\u8F66\u7B26\uFF08\u8FD4\u56DE\u884C\u9996\uFF09</td></tr><tr><td>\\n</td><td>\u6362\u884C\u7B26\uFF08\u76F4\u63A5\u8DF3\u5230\u4E0B\u4E00\u884C\u7684\u540C\u5217\u4F4D\u7F6E\uFF09</td></tr><tr><td>\\t</td><td>\u5236\u8868\u7B26</td></tr><tr><td>\\v</td><td>\u5782\u76F4\u5236\u8868\u7B26</td></tr><tr><td>&#39;</td><td>\u5355\u5F15\u53F7</td></tr><tr><td>&quot;</td><td>\u53CC\u5F15\u53F7</td></tr><tr><td>|\u53CD\u659C\u6760</td><td></td></tr></tbody></table><ul><li>\u5B57\u7B26\u4E32\u6BD4\u8F83\u53EF\u4EE5\u4F7F\u7528\u6BD4\u8F83\u8FD0\u7B97\u7B26(==\u3001!=\u3001&lt;\u3001&lt;=\u3001&gt;=\u3001&gt;)\u901A\u8FC7\u5728\u5185\u5B58\u4E2D\u6309\u7167\u5B57\u8282\u6BD4\u8F83\u6765\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684\u5BF9\u6BD4;</li><li>\u5B57\u7B26\u4E32\u957F\u5EA6\u53EF\u4EE5\u4F7F\u7528 len(str) \u6765\u83B7\u53D6\u5B57\u7B26\u4E32\u6240\u5360\u7684\u5B57\u8282\u957F\u5EA6\uFF0C\u4F7F\u7528 utf8.RuneCountInString(str) \u6765\u7EDF\u8BA1\u5B57\u7B26\u4E2A\u6570;</li><li>\u5B57\u7B26\u4E32\u62FC\u63A5\u53EF\u4EE5\u4F7F\u7528 <code>+</code> \u6216\u8005 <code>+=</code> \u6765\u5B9E\u73B0\uFF0C <code>s := s1 + s2</code> or <code>s += s3</code>\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>strings.join</code> \u51FD\u6570\u6765\u62FC\u63A5\uFF0C\u4EE5\u53CA\u66F4\u9AD8\u6548\u7684 <code>bytes.Buffer</code> \u6765\u5B9E\u73B0\u62FC\u63A5;</li><li>\u53E6\u5916\uFF0C\u83B7\u53D6\u5B57\u7B26\u4E32\u4E2D\u67D0\u4E2A\u5B57\u8282\u7684\u5730\u5740\u7684\u884C\u4E3A\u662F\u975E\u6CD5\u7684\uFF0C\u5982 <code>&amp;str[i]</code>\u3002</li></ul><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">unicode/utf8</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello\uFF0C\u4E16\u754C</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 13</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">utf8</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RuneCountInString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 9</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    s </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, Lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// Hello, Lemon</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    s </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Hello, Lemon!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7F16\u8BD1\u62A5\u9519\uFF1ACannot take the address of name[1]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B57\u7B26\u4E32\u4FEE\u6539" tabindex="-1">\u5B57\u7B26\u4E32\u4FEE\u6539 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u4FEE\u6539" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u5B57\u7B26\u4E32\u9700\u8981\u5148\u5C06\u5176\u8F6C\u6362\u6210 <code>[]rune</code> \u6216\u8005 <code>[]byte</code>, \u5B8C\u6210\u540E\u518D\u8F6C\u6362\u4E3A <code>string</code>, \u4FEE\u6539\u64CD\u4F5C\u4F1A\u91CD\u65B0\u5206\u914D\u5185\u5B58\uFF0C\u590D\u5236\u5B57\u8282\u6570\u7EC4</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">changeString</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">changeString</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    str1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    byteStr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#82AAFF;">byte</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    byteStr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">byteStr</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// pello world</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// Hello world</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    str2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello \u67E0\u6AAC</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    runeStr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#82AAFF;">rune</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    runeStr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u67DA</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    runeStr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5B50</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">runeStr</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// Hello \u67DA\u5B50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// Hello \u67E0\u6AAC</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    str2</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">L</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// \u76F4\u63A5\u4FEE\u6539\u5B57\u7B26\u4E32\u62A5\u9519\uFF1Acannot assign to str2[0]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,14),e=[o];function t(c,r,D,F,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
