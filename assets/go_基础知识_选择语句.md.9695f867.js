import{_ as n,c as a,d as l,e as o,o as p,r as e}from"./app.9552b1d7.js";const u=JSON.parse('{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u9009\u62E9\u8BED\u53E5","description":"Go \u9009\u62E9\u8BED\u53E5\u4E5F\u662F\u901A\u8FC7 switch \u548C case \u5173\u952E\u5B57\u6765\u5B9E\u73B0\uFF0C\u652F\u6301\u591A\u503C case\uFF0C \u4E14 default \u53EF\u9009\uFF0C\u4E5F\u652F\u6301 \u65E0\u6761\u4EF6\u7684 switch \u548C switch \u540E\u8DDF\u51FD\u6570\uFF0C\u66F4\u5177\u6709 fallthrough \u529F\u80FD","frontmatter":{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u9009\u62E9\u8BED\u53E5","head":[["meta",{"property":"og:title","content":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u9009\u62E9\u8BED\u53E5"}],["meta",{"name":"description","content":"Go \u9009\u62E9\u8BED\u53E5\u4E5F\u662F\u901A\u8FC7 switch \u548C case \u5173\u952E\u5B57\u6765\u5B9E\u73B0\uFF0C\u652F\u6301\u591A\u503C case\uFF0C \u4E14 default \u53EF\u9009\uFF0C\u4E5F\u652F\u6301 \u65E0\u6761\u4EF6\u7684 switch \u548C switch \u540E\u8DDF\u51FD\u6570\uFF0C\u66F4\u5177\u6709 fallthrough \u529F\u80FD"}],["meta",{"name":"keywords","content":"Go,\u9009\u62E9\u8BED\u53E5,switch \u548C case \u5173\u952E\u5B57,fallthrough \u529F\u80FD"}],["meta",{"property":"og:description","content":"Go \u9009\u62E9\u8BED\u53E5\u4E5F\u662F\u901A\u8FC7 switch \u548C case \u5173\u952E\u5B57\u6765\u5B9E\u73B0\uFF0C\u652F\u6301\u591A\u503C case\uFF0C \u4E14 default \u53EF\u9009\uFF0C\u4E5F\u652F\u6301 \u65E0\u6761\u4EF6\u7684 switch \u548C switch \u540E\u8DDF\u51FD\u6570\uFF0C\u66F4\u5177\u6709 fallthrough \u529F\u80FD"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E9%80%89%E6%8B%A9%E8%AF%AD%E5%8F%A5"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E9%80%89%E6%8B%A9%E8%AF%AD%E5%8F%A5"}]]},"headers":[{"level":2,"title":"\u9009\u62E9\u8BED\u53E5","slug":"\u9009\u62E9\u8BED\u53E5","link":"#\u9009\u62E9\u8BED\u53E5","children":[]},{"level":2,"title":"\u591A\u503C case \u4EE5\u53CA default \u53EF\u9009","slug":"\u591A\u503C-case-\u4EE5\u53CA-default-\u53EF\u9009","link":"#\u591A\u503C-case-\u4EE5\u53CA-default-\u53EF\u9009","children":[]},{"level":2,"title":"\u65E0\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684 switch","slug":"\u65E0\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684-switch","link":"#\u65E0\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684-switch","children":[]},{"level":2,"title":"switch \u540E\u53EF\u8DDF\u51FD\u6570","slug":"switch-\u540E\u53EF\u8DDF\u51FD\u6570","link":"#switch-\u540E\u53EF\u8DDF\u51FD\u6570","children":[]},{"level":2,"title":"fallthrough \u7A7F\u900F","slug":"fallthrough-\u7A7F\u900F","link":"#fallthrough-\u7A7F\u900F","children":[]}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u9009\u62E9\u8BED\u53E5.md","lastUpdated":1667794680000}'),t={name:"go/\u57FA\u7840\u77E5\u8BC6/\u9009\u62E9\u8BED\u53E5.md"},c=o(`<h2 id="\u9009\u62E9\u8BED\u53E5" tabindex="-1">\u9009\u62E9\u8BED\u53E5 <a class="header-anchor" href="#\u9009\u62E9\u8BED\u53E5" aria-hidden="true">#</a></h2><p><code>Go</code> \u8BED\u8A00\u4E2D\u7684\u9009\u62E9\u8BED\u53E5\u4E5F\u662F\u901A\u8FC7 <code>switch</code> \u548C <code>case</code> \u5173\u952E\u5B57\u6765\u5B9E\u73B0\u7684\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u5199\u6CD51</span></span>
<span class="line"><span style="color:#A6ACCD;">expression </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> expression </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> expression1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> expression2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5199\u6CD52\uFF0Cexpression \u7684\u4F5C\u7528\u57DF\u5728 switch \u5185</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> expression </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> expression </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0E <code>Java</code> \u4E0D\u540C\u7684\u662F\u8FD9\u91CC\u4E0D\u9700\u8981\u5728\u6BCF\u4E2A <code>case</code> \u8BED\u53E5\u6267\u884C\u7684\u4EE3\u7801\u7ED3\u5C3E\u6DFB\u52A0 <code>break</code> \u3002</p><h2 id="\u591A\u503C-case-\u4EE5\u53CA-default-\u53EF\u9009" tabindex="-1">\u591A\u503C <code>case</code> \u4EE5\u53CA <code>default</code> \u53EF\u9009 <a class="header-anchor" href="#\u591A\u503C-case-\u4EE5\u53CA-default-\u53EF\u9009" aria-hidden="true">#</a></h2><p><code>case</code> \u9009\u9879\u4E0D\u5141\u8BB8\u51FA\u73B0\u91CD\u590D\u7684\u503C\uFF0C\u4F46\u662F <code>case</code> \u540E\u9762\u53EF\u4EE5\u5E26\u591A\u4E2A\u503C\uFF0C\u4EE5\u9017\u53F7\u9694\u5F00\uFF1B\u53E6\u5916 <code>default</code> \u662F\u53EF\u9009\u7684\uFF1B\u56E0\u4E3A <code>case</code> \u4E0D\u5141\u8BB8\u51FA\u73B0\u91CD\u590D\u7684\u503C\uFF0C\u90A3\u4E48\u53EA\u8981\u9047\u89C1\u4E00\u4E2A <code>case</code> \u5339\u914D\u4E0A\uFF0C\u90A3\u4E48\u5219\u7EC8\u6B62\u9009\u62E9\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">season </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> season </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5BD2\u51B7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">summer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u708E\u70ED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">spring</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u98CE\u548C\u65E5\u4E3D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u79CB\u9AD8\u6C14\u723D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> season </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u65E5\u7167\u77ED\u6682</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">summer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">spring</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">autumn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u65E5\u7167\u5145\u8DB3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u65E0\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684-switch" tabindex="-1">\u65E0\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684 <code>switch</code> <a class="header-anchor" href="#\u65E0\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684-switch" aria-hidden="true">#</a></h2><p>\u5982\u679C <code>switch</code> \u540E\u6CA1\u6709\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u90A3\u4E48\u5219\u8BA4\u4E3A\u662F <code>switch true</code> \u7684\u60C5\u5F62\uFF0C\u6B64\u65F6\u53EF\u4EE5\u8BA4\u4E3A\u76F8\u5F53\u4E8E\u662F\u6761\u4EF6\u8BED\u53E5\u7684\u53D8\u79CD\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">season </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> season </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> season </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">summer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="switch-\u540E\u53EF\u8DDF\u51FD\u6570" tabindex="-1"><code>switch</code> \u540E\u53EF\u8DDF\u51FD\u6570 <a class="header-anchor" href="#switch-\u540E\u53EF\u8DDF\u51FD\u6570" aria-hidden="true">#</a></h2><p><code>switch</code> \u540E\u9762\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8981\u6C42 <code>case</code> \u7684\u503C\u7C7B\u578B\u4E0E\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E00\u81F4\u5373\u53EF\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSeason</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">month </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> month </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> month </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">summer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">other</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSeason</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">summer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u590F\u5929</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">other</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="fallthrough-\u7A7F\u900F" tabindex="-1"><code>fallthrough</code> \u7A7F\u900F <a class="header-anchor" href="#fallthrough-\u7A7F\u900F" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u53EA\u8981\u9047\u89C1\u4E00\u4E2A <code>case</code> \u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5219\u76F4\u63A5\u9000\u51FA\u6574\u4E2A <code>switch</code> \uFF0C\u4F46\u662F <code>fallthrough</code> \u5173\u952E\u5B57\u53EF\u4EE5\u5141\u8BB8\u4F60\u7A7F\u900F\u672C\u6B21\u5339\u914D\u7684 <code>case</code> \u5757\uFF0C\u6267\u884C\u4E0B\u4E00\u4E2A\u5206\u652F\u7684\u4EE3\u7801\u5757\uFF0C\u5373\u4F7F\u5176\u6761\u4EF6\u5E76\u4E0D\u5339\u914D\u3002<code>fallthrough</code> \u540E\u9762\u5FC5\u987B\u8FD8\u6709\u5176\u4ED6\u5206\u652F <code>case</code> \u6D3B\u7740 <code>default</code>\u3002</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">season </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> season </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">fallthrough</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> season </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">summer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#A6ACCD;">no</span></span>
<span class="line"></span></code></pre></div><hr>`,17);function D(r,F,y,A,C,i){const s=e("GoogleAdsense");return p(),a("div",null,[c,l(s)])}const h=n(t,[["render",D]]);export{u as __pageData,h as default};
