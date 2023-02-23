import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.244e85e4.js";const g=JSON.parse('{"title":"Go 语言笔记：结构体","description":"Go结构体,结构体的声明、创建、初始化、使用,结构体嵌套,结构体字段提升,结构体的方法,访问权限","frontmatter":{"title":"Go 语言笔记：结构体","head":[["meta",{"property":"og:title","content":"Go 语言笔记:结构体"}],["meta",{"name":"description","content":"Go结构体,结构体的声明、创建、初始化、使用,结构体嵌套,结构体字段提升,结构体的方法,访问权限"}],["meta",{"name":"keywords","content":"Go,结构体,结构体嵌套,结构体字段提升,结构体的方法,访问权限"}],["meta",{"property":"og:description","content":"Go结构体,结构体的声明、创建、初始化、使用,结构体嵌套,结构体字段提升,结构体的方法,访问权限"}],["meta",{"property":"og:url","content":"https://sanoon.me/go/%E8%BF%9B%E9%98%B6%E9%83%A8%E5%88%86/%E7%BB%93%E6%9E%84%E4%BD%93"}],["link",{"rel":"canonical","href":"https://sanoon.me/go/%E8%BF%9B%E9%98%B6%E9%83%A8%E5%88%86/%E7%BB%93%E6%9E%84%E4%BD%93"}]]},"headers":[{"level":2,"title":"结构体","slug":"结构体","link":"#结构体","children":[]},{"level":2,"title":"结构体的声明","slug":"结构体的声明","link":"#结构体的声明","children":[]},{"level":2,"title":"结构体的创建","slug":"结构体的创建","link":"#结构体的创建","children":[]},{"level":2,"title":"结构体的使用","slug":"结构体的使用","link":"#结构体的使用","children":[]},{"level":2,"title":"嵌套结构体","slug":"嵌套结构体","link":"#嵌套结构体","children":[]},{"level":2,"title":"结构体字段提升","slug":"结构体字段提升","link":"#结构体字段提升","children":[]},{"level":2,"title":"结构体的方法","slug":"结构体的方法","link":"#结构体的方法","children":[]},{"level":2,"title":"结构体属性通过方法修改","slug":"结构体属性通过方法修改","link":"#结构体属性通过方法修改","children":[]},{"level":2,"title":"结构体方法的访问权限","slug":"结构体方法的访问权限","link":"#结构体方法的访问权限","children":[]}],"relativePath":"go/进阶部分/结构体.md"}'),t={name:"go/进阶部分/结构体.md"},c=p(`<h1 id="go-语言笔记-结构体" tabindex="-1">Go 语言笔记：结构体 <a class="header-anchor" href="#go-语言笔记-结构体" aria-hidden="true" loading="lazy">#</a></h1><h2 id="结构体" tabindex="-1">结构体 <a class="header-anchor" href="#结构体" aria-hidden="true" loading="lazy">#</a></h2><p>结构体是一种将一个或者多个任意类型的值聚合的实体，每个值称为结构体的成员，其实结构体就是 <code>Go</code> 语言中的类。</p><h2 id="结构体的声明" tabindex="-1">结构体的声明 <a class="header-anchor" href="#结构体的声明" aria-hidden="true" loading="lazy">#</a></h2><p>结构体可以使用以下格式进行声明</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">struct_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  attribute_name attribute_type</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>例如我们定一个数据源实体 <code>DataSource</code></p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DataSource</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  url </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  user_name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  password </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  driver_class_name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>成员的类型如果一致，可以定义在同一行，以逗号隔开</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DataSource</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> user_name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> password</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> driver_class_name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>声明结构体也可以不使用 <code>type</code> 关键字，例如我们使用 <code>var</code> 关键字声明一个匿名的结构体</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> DataSource </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  url </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  username </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  password </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="结构体的创建" tabindex="-1">结构体的创建 <a class="header-anchor" href="#结构体的创建" aria-hidden="true" loading="lazy">#</a></h2><p>我们可以使用结构体成员名称来创建结构体，例如我们创建一个名为 <code>Movie</code> 的结构体，包含名称和上映年份成员。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  year </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>使用成员名来初始化结构体</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  year</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>不使用成员初始化结构体</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>初始化匿名结构体</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  year </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  year</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>结构体中的成员变量如果没有显示的赋值，那么它的值是初始化的零值，<code>string</code> 类型的零值为空字符串 <code>&quot;&quot;</code>，<code>int</code> 类型的零值为 0。</p><h2 id="结构体的使用" tabindex="-1">结构体的使用 <a class="header-anchor" href="#结构体的使用" aria-hidden="true" loading="lazy">#</a></h2><p>我们可以使用操作符 <code>.</code> 来给结构体的成员赋值，或者对其访问。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  year </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> mov </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Movie </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 肖申克的救赎</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1994</span></span>
<span class="line"></span></code></pre></div><p>除了以上使用创建出来的实体来访问其成员以外，我们也可以使用指针来访问</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Movie </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">((*</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">).</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 肖申克的救赎</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 肖申克的救赎</span></span>
<span class="line"></span></code></pre></div><p>对于字段也匿名的结构体如何访问呢，且看下面的例子</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 肖申克的救赎</span></span>
<span class="line"></span></code></pre></div><p>匿名字段只支持该类型在结构体中只有一个的情况才可以使用以上方式进行访问。</p><h2 id="嵌套结构体" tabindex="-1">嵌套结构体 <a class="header-anchor" href="#嵌套结构体" aria-hidden="true" loading="lazy">#</a></h2><p>结构体的成员也可以是一个结构体，这样的结构体就是嵌套结构体</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  year</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> month</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> day </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  date Date</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Date </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1994</span></span>
<span class="line"></span></code></pre></div><h2 id="结构体字段提升" tabindex="-1">结构体字段提升 <a class="header-anchor" href="#结构体字段提升" aria-hidden="true" loading="lazy">#</a></h2><p>结构体中如果有匿名的结构体类型，那么匿名的结构体中的字段则成为 <code>提升字段</code>， 提升字段的好处就是，可以直接使用外部结构体来访问，而不用像上面的必须通过中间的名称 <code>mov.date.year</code> 来访问。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  year</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> month</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> day </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  Date</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">movies </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Date</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movies</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1994, 直接访问提升字段</span></span>
<span class="line"></span></code></pre></div><h2 id="结构体的方法" tabindex="-1">结构体的方法 <a class="header-anchor" href="#结构体的方法" aria-hidden="true" loading="lazy">#</a></h2><p><code>Go</code> 语言结构体中无法直接定义方法，但是我们可以将方法绑定给某个结构体。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  year </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie Movie</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Display</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  mov</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Display</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 打印结果：</span></span>
<span class="line"><span style="color:#A6ACCD;">肖申克的救赎</span></span>
<span class="line"><span style="color:#F78C6C;">1994</span></span>
<span class="line"></span></code></pre></div><h2 id="结构体属性通过方法修改" tabindex="-1">结构体属性通过方法修改 <a class="header-anchor" href="#结构体属性通过方法修改" aria-hidden="true" loading="lazy">#</a></h2><p>结构体的属性需要通过方法来修改时，必须传递结构体的指针。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Movie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  year </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 传递mov的副本，只能读取其属性的值，不能修改mov</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie Movie</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">display</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 传递指针，可以通过指针修改其属性的值</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">movie </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Movie</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Correct</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">year </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  movie</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> movie</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> year</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  mov </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Movie</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">肖申克的救赎</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  mov</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Correct</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mov</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1995</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="结构体方法的访问权限" tabindex="-1">结构体方法的访问权限 <a class="header-anchor" href="#结构体方法的访问权限" aria-hidden="true" loading="lazy">#</a></h2><p>在 <code>Go</code> 语言中，方法通过名称首字母的大小写来区分内部方法还是外部方法。</p><ul><li>当方法名称的首字母为大写时，该方法对于所有包都是 <code>Public</code>，其他包可以任意访问</li><li>当方法名称的首字母为小写时，该方法是 <code>Private</code>，其他包是无法访问的</li></ul><hr>`,46);function r(D,y,F,C,i,A){const s=e("GoogleAdsense");return o(),a("div",null,[c,l(s)])}const u=n(t,[["render",r]]);export{g as __pageData,u as default};
