import{_ as a,c as n,d as l,e as o,o as p,r as e}from"./app.03c28ed9.js";const u=JSON.parse('{"title":"\u53D8\u91CF\u662F\u4EC0\u4E48","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF\u662F\u4EC0\u4E48","slug":"\u53D8\u91CF\u662F\u4EC0\u4E48"},{"level":2,"title":"\u53D8\u91CF\u7684\u58F0\u660E","slug":"\u53D8\u91CF\u7684\u58F0\u660E"},{"level":2,"title":"\u58F0\u660E\u53D8\u91CF\u5E76\u521D\u59CB\u5316","slug":"\u58F0\u660E\u53D8\u91CF\u5E76\u521D\u59CB\u5316"},{"level":2,"title":"\u7C7B\u578B\u63A8\u65AD","slug":"\u7C7B\u578B\u63A8\u65AD"},{"level":2,"title":"\u58F0\u660E\u591A\u4E2A\u53D8\u91CF","slug":"\u58F0\u660E\u591A\u4E2A\u53D8\u91CF"},{"level":2,"title":"\u7B80\u77ED\u58F0\u660E","slug":"\u7B80\u77ED\u58F0\u660E"},{"level":2,"title":"\u5F3A\u7C7B\u578B","slug":"\u5F3A\u7C7B\u578B"},{"level":2,"title":"\u672A\u4F7F\u7528\u7684\u53D8\u91CF","slug":"\u672A\u4F7F\u7528\u7684\u53D8\u91CF"},{"level":2,"title":"\u5728 init \u51FD\u6570\u4E2D\u58F0\u660E\u53D8\u91CF","slug":"\u5728-init-\u51FD\u6570\u4E2D\u58F0\u660E\u53D8\u91CF"}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u53D8\u91CF.md","lastUpdated":1666709968000}'),c={name:"go/\u57FA\u7840\u77E5\u8BC6/\u53D8\u91CF.md"},t=o(`<h2 id="\u53D8\u91CF\u662F\u4EC0\u4E48" tabindex="-1">\u53D8\u91CF\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u53D8\u91CF\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><blockquote><p>\u53D8\u91CF\u662F\u67D0\u4E2A\u5B58\u50A8\u5355\u5143\u7684\u540D\u79F0\uFF0C\u5B58\u50A8\u5355\u5143\u5B58\u50A8\u7279\u5B9A\u7C7B\u578B\u7684\u503C</p></blockquote><h2 id="\u53D8\u91CF\u7684\u58F0\u660E" tabindex="-1">\u53D8\u91CF\u7684\u58F0\u660E <a class="header-anchor" href="#\u53D8\u91CF\u7684\u58F0\u660E" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u5E38\u6211\u4EEC\u4F7F\u7528 <code>var name type</code> \u6765\u58F0\u660E\u5355\u4E2A\u53D8\u91CF</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> name </span><span style="color:#C792EA;">string</span></span>
<span class="line"></span></code></pre></div><h2 id="\u58F0\u660E\u53D8\u91CF\u5E76\u521D\u59CB\u5316" tabindex="-1">\u58F0\u660E\u53D8\u91CF\u5E76\u521D\u59CB\u5316 <a class="header-anchor" href="#\u58F0\u660E\u53D8\u91CF\u5E76\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><blockquote><p>\u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u7684\u65F6\u5019\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u4F7F\u7528\u683C\u5F0F <code>var name type = initValue</code></p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u63A8\u65AD" tabindex="-1">\u7C7B\u578B\u63A8\u65AD <a class="header-anchor" href="#\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a></h2><blockquote><p>\u53D8\u91CF\u58F0\u660E\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7701\u7565\u6389 <code>type</code> \u5173\u952E\u5B57\uFF0C\u76F4\u63A5\u521D\u59CB\u5316\uFF0C\u8FD9\u56E0\u4E3A <code>Go</code> \u8BED\u8A00\u5177\u6709\u7C7B\u578B\u63A8\u65AD\u7684\u80FD\u529B\uFF0C\u56E0\u6B64\u6211\u4EEC\u4F7F\u7528 <code>var name = initValue</code> \u6765\u58F0\u660E\u53D8\u91CF\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"></span></code></pre></div><h2 id="\u58F0\u660E\u591A\u4E2A\u53D8\u91CF" tabindex="-1">\u58F0\u660E\u591A\u4E2A\u53D8\u91CF <a class="header-anchor" href="#\u58F0\u660E\u591A\u4E2A\u53D8\u91CF" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u9879\u76EE\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5982\u4F55\u58F0\u660E\u5462\uFF0C\u5982\u679C\u662F\u540C\u4E00\u79CD\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u51E0\u79CD\u683C\u5F0F</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u540C\u4E00\u79CD\u7C7B\u578B\u5355\u884C\u58F0\u660E\u591A\u4E2A\u53D8\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> name1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name2 </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initValue1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> initValue2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4E0D\u540C\u7C7B\u578B\u591A\u884C\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\uFF0C\u6B64\u7C7B\u5199\u6CD5\u591A\u7528\u4E8E\u58F0\u660E\u5305\u7EA7\u522B\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initValue1</span></span>
<span class="line"><span style="color:#A6ACCD;">  name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initValue2</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B80\u77ED\u58F0\u660E" tabindex="-1">\u7B80\u77ED\u58F0\u660E <a class="header-anchor" href="#\u7B80\u77ED\u58F0\u660E" aria-hidden="true">#</a></h2><blockquote><p>\u9664\u4E86\u4EE5\u4E0A\u58F0\u660E\u65B9\u5F0F\u5916\uFF0C<code>Go</code> \u8BED\u8A00\u8FD8\u652F\u6301\u4E00\u79CD\u7B80\u77ED\u58F0\u660E\uFF0C\u4F7F\u7528 <code>:=</code> \u64CD\u4F5C\u7B26\uFF0C\u7B80\u77ED\u58F0\u660E\u8981\u6C42\u6240\u6709\u53D8\u91CF\u90FD\u521D\u59CB\u5316\uFF0C\u6B64\u7C7B\u5199\u6CD5\u4E3B\u8981\u7528\u4E8E\u51FD\u6570\u4F53\u5185\u58F0\u660E\u5C40\u90E8\u53D8\u91CF</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">nage</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5E76\u4E14\uFF0C\u53D8\u91CF\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u5C1A\u672A\u58F0\u660E\u8FC7\uFF0C\u5982\u679C\u4E24\u4E2A\u53D8\u91CF\u90FD\u5DF2\u7ECF\u521D\u59CB\u5316\u8FC7\u4E86\uFF0C\u4F1A\u629B\u51FA\u5F02\u5E38</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Teacher</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// no new variables ont left sid of :=</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F3A\u7C7B\u578B" tabindex="-1">\u5F3A\u7C7B\u578B <a class="header-anchor" href="#\u5F3A\u7C7B\u578B" aria-hidden="true">#</a></h2><blockquote><p><code>Go</code> \u8BED\u8A00\u662F\u5F3A\u7C7B\u578B\u8BED\u8A00\uFF0C\u53D8\u91CF\u7684\u7C7B\u578B\u4E0D\u80FD\u66F4\u6539</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7F16\u8BD1\u9519\u8BEF Cannot use &#39;&quot;lemon&quot;&#39; (type string) as type int </span></span>
<span class="line"></span></code></pre></div><h2 id="\u672A\u4F7F\u7528\u7684\u53D8\u91CF" tabindex="-1">\u672A\u4F7F\u7528\u7684\u53D8\u91CF <a class="header-anchor" href="#\u672A\u4F7F\u7528\u7684\u53D8\u91CF" aria-hidden="true">#</a></h2><blockquote><p><code>Go</code> \u8BED\u8A00\u4E0D\u5141\u8BB8\u58F0\u660E\u4E86\u53D8\u91CF\u800C\u4E0D\u4F7F\u7528\u5B83</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">io</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">net/http</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u663E\u793A\u7F16\u8BD1\u9519\u8BEF Unused variable &#39;age&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">  http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HandleFunc</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">w http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ResponseWriter</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    io</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">w</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi, Lemon.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">  http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ListenAndServe</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:8080</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u65F6\u663E\u793A\u9519\u8BEF</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">age declared but not used</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5728-init-\u51FD\u6570\u4E2D\u58F0\u660E\u53D8\u91CF" tabindex="-1">\u5728 <code>init</code> \u51FD\u6570\u4E2D\u58F0\u660E\u53D8\u91CF <a class="header-anchor" href="#\u5728-init-\u51FD\u6570\u4E2D\u58F0\u660E\u53D8\u91CF" aria-hidden="true">#</a></h2><blockquote><p><code>init</code> \u51FD\u6570\u662F\u975E\u5E38\u7279\u6B8A\u7684\u51FD\u6570\uFF0C\u4E0D\u80FD\u88AB\u4EBA\u4E3A\u8C03\u7528\uFF0C\u5B83\u662F\u5728\u6BCF\u4E2A\u5305\u521D\u59CB\u5316\u65F6\u81EA\u52A8\u6267\u884C\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>main</code> \u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u4E8E\u542F\u52A8\u65F6\u6267\u884C\u521D\u59CB\u5316\u4EFB\u52A1\u6216\u8005\u6570\u636E\u4FEE\u590D\u7B49\u573A\u666F\u3002</p></blockquote><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lemon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  age </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,30);function r(D,y,F,i,C,A){const s=e("GoogleAdsense");return p(),n("div",null,[t,l(s)])}const g=a(c,[["render",r]]);export{u as __pageData,g as default};
