import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.DhMiq51s.js";const E=JSON.parse('{"title":"typedef","description":"","frontmatter":{},"headers":[],"relativePath":"c/typedef.md","filePath":"c/typedef.md"}'),e={name:"c/typedef.md"},n=t(`<h1 id="typedef" tabindex="-1">typedef <a class="header-anchor" href="#typedef" aria-label="Permalink to &quot;typedef&quot;">​</a></h1><p>在 C 语言中，我们经常需要定义一些自定义类型。但是，有时候使用 struct 或 union 等关键字来定义这些类型会显得繁琐和冗长。此时，我们可以使用 typedef 关键字来定义新的类型名。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>typedef 的基本语法如下：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 原类型名 新类型名;</span></span></code></pre></div><p>其中，原类型名可以是任何已有的数据类型（包括基本数据类型、数组、结构体、共用体等），而新类型名就是我们要定义的新类型名称。</p><p>例如，我们可以使用以下代码将 int 型重命名为 integer：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> integer;</span></span></code></pre></div><h2 id="typedef-与指针" tabindex="-1">typedef 与指针 <a class="header-anchor" href="#typedef-与指针" aria-label="Permalink to &quot;typedef 与指针&quot;">​</a></h2><p>当我们使用指针时，也可以利用 typedef 简化代码。例如，我们可以用以下方式将一个整型指针重命名为 IntPtr：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IntPtr;</span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p>下面以一个结构体为例演示如何利用 typedef 简化代码。</p><p>假设我们要定义一个包含学生信息（姓名、年龄、成绩）的结构体，可以使用以下代码：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> student {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> score;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>这样定义结构体时比较繁琐。我们可以使用 typedef 来简化代码：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> score;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} Student;</span></span></code></pre></div><p>这样，在程序中就可以直接使用Student作为这个结构体类型了：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Student stu </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;张三&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;姓名：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">年龄：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">成绩：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%.1f\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, stu.name, stu.age, stu.score);</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>typedef 是 C 语言中用于定义新的数据类型名称的关键字。通过重命名已有的数据类型，可以使程序更加简洁易懂。在实际开发中，我们可以利用 typedef 来简化一些冗长的代码，提高代码的可读性和可维护性。</p>`,21),p=[n];function h(l,k,d,r,c,o){return a(),i("div",null,p)}const y=s(e,[["render",h]]);export{E as __pageData,y as default};
