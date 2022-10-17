import{_ as s,c as n,o as a,d as o}from"./app.8b829bc4.js";const i=JSON.parse('{"title":"\u5E38\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u91CF","slug":"\u5E38\u91CF"},{"level":2,"title":"iota","slug":"iota"},{"level":2,"title":"\u5E38\u91CF\u503C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A","slug":"\u5E38\u91CF\u503C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u5E38\u91CF.md","lastUpdated":1665995133000}'),l={name:"go/\u57FA\u7840\u77E5\u8BC6/\u5E38\u91CF.md"},p=o(`<h2 id="\u5E38\u91CF" tabindex="-1">\u5E38\u91CF <a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a></h2><blockquote><p>\u5E38\u91CF\uFF0C\u8868\u793A\u56FA\u5B9A\u503C\uFF0C\u6BD4\u5982 <code>\u03C0</code> \uFF0C\u5E38\u91CF\u5B9A\u4E49\u4E4B\u540E\u4E0D\u80FD\u4FEE\u6539\uFF0C\u5B9A\u4E49\u683C\u5F0F\u5982\u4E0B</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u5355\u4E2A\u5E38\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.1415</span></span>
<span class="line"><span style="color:#A6ACCD;">pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7F16\u8BD1\u9519\u8BEF Cannot assign to age\uFF0C\u5E38\u91CF\u4E0D\u5141\u8BB8\u91CD\u65B0\u8D4B\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u591A\u4E2A\u5E38\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  notFound </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span></span>
<span class="line"><span style="color:#A6ACCD;">  ok </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#A6ACCD;">  config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app.properties</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u58F0\u660E\u591A\u4E2A\u5E38\u91CF\u65F6\uFF0C\u5982\u679C\u540E\u9762\u7684\u5E38\u91CF\u672A\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u90A3\u4E48\u5176\u503C\u9ED8\u8BA4\u4E3A\u5176\u4E0A\u4E00\u4E2A\u5E38\u91CF\u7684\u503C</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// m2, m3 \u7684\u503C\u540C\u6837\u4E3A 18</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">  m2</span></span>
<span class="line"><span style="color:#A6ACCD;">  m3</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="iota" tabindex="-1">iota <a class="header-anchor" href="#iota" aria-hidden="true">#</a></h2><blockquote><p><code>iota</code> \u662F <code>Go</code> \u8BED\u8A00\u7684\u4E00\u4E2A\u5E38\u91CF\u8BA1\u6570\u5668\uFF0C\u53EA\u80FD\u5728\u5E38\u91CF\u7684\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\uFF0C<code>iota</code> \u5728 <code>const</code> \u5173\u952E\u5B57\u51FA\u73B0\u65F6\u91CD\u7F6E\u4E3A 0\uFF0C\u5E38\u91CF\u6BCF\u65B0\u589E\u4E00\u884C\uFF0C<code>iota</code> \u81EA\u52A8 <code>+1</code>\uFF0C\u5373\u4F7F\u8FD9\u4E00\u884C\u6CA1\u6709\u4F7F\u7528\u5230 <code>iota</code>\uFF0C\u5373 <code>iota</code> \u662F\u9010\u884C <code>+1</code>\uFF0C \u4E0D\u4F1A\u56E0\u4E3A\u540C\u4E00\u884C\u4E2D\u591A\u6B21\u4F7F\u7528 <code>iota</code> \u800C\u5BFC\u81F4\u4E0B\u4E00\u884C\u7684\u503C\u53D8\u4E3A <code>+n</code></p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;">// m0=&quot;lemon&quot;, m1 = 1, m2 = 20, m3 = 3, m4 = 4</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  m0 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#A6ACCD;">  m2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">  m3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span></span>
<span class="line"><span style="color:#A6ACCD;">  m4</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u4E00\u884C\u5B58\u5728\u591A\u4E2A <code>iota</code> \u65F6\uFF0C\u5176\u503C\u90FD\u4E00\u6837</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// m1 = 1, m2 = 2, m3 = 2, m4 = 3</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  m1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">  m3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">iota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E38\u91CF\u503C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A" tabindex="-1">\u5E38\u91CF\u503C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A <a class="header-anchor" href="#\u5E38\u91CF\u503C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A" aria-hidden="true">#</a></h2><blockquote><p>\u5E38\u91CF\u7684\u503C\u5FC5\u987B\u662F\u5728\u7F16\u8BD1\u65F6\u5C31\u786E\u5B9A\u7684\uFF0C\u800C\u51FD\u6570\u7684\u8C03\u7528\u662F\u5728\u8FD0\u884C\u65F6\uFF0C\u5982\u679C\u5C06\u51FD\u6570\u8FD4\u56DE\u503C\u8D4B\u7ED9\u5E38\u91CF\uFF0C\u90A3\u4E48\u4F60\u4F1A\u5F97\u5230\u4E00\u4E2A\u7F16\u8BD1\u9519\u8BEF\uFF0C\u4F46\u5185\u7F6E\u51FD\u6570\uFF08\u4E0D\u9700\u8981\u5BFC\u5165\u5305\uFF09\u4E0D\u53D7\u6B64\u5F71\u54CD</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// age \u521D\u59CB\u5316\u9519\u8BEF\uFF1AConst initializer &#39;math.Sqrt(4)&#39; is not a constant</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sqrt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// len \u4E3A\u5185\u7F6E\u51FD\u6570\uFF0C\u4E0D\u9700\u8981\u5BFC\u5165\u5305\uFF0C\u56E0\u6B64 length\u521D\u59CB\u503C = 5</span></span>
<span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> length </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div>`,13),e=[p];function c(t,r,D,y,C,F){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
