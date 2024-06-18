import{_ as i,D as a,c as n,I as t,a4 as e,o as h}from"./chunks/framework.B7V7hgyh.js";const u=JSON.parse('{"title":"联合体","description":"联合体是一种特殊类型的数据结构，允许在同一块内存空间中存储不同类型的数据，从而在某些情况下可以节约内存空间并简化代码。使用联合体时需要注意各个成员变量的占用空间和数据类型转换的问题。","frontmatter":{"title":"联合体","head":[["meta",{"property":"og:title","content":"联合体"}],["meta",{"name":"description","content":"联合体是一种特殊类型的数据结构，允许在同一块内存空间中存储不同类型的数据，从而在某些情况下可以节约内存空间并简化代码。使用联合体时需要注意各个成员变量的占用空间和数据类型转换的问题。"}],["meta",{"name":"keywords","content":"联合体，联合体的定义，联合体访问，联合体应用场景"}],["meta",{"property":"og:description","content":"联合体是一种特殊类型的数据结构，允许在同一块内存空间中存储不同类型的数据，从而在某些情况下可以节约内存空间并简化代码。使用联合体时需要注意各个成员变量的占用空间和数据类型转换的问题。"}]]},"headers":[],"relativePath":"c/联合体.md","filePath":"c/联合体.md"}'),p={name:"c/联合体.md"},l=e(`<h1 id="联合体" tabindex="-1">联合体 <a class="header-anchor" href="#联合体" aria-label="Permalink to &quot;联合体&quot;">​</a></h1><p>在 C 语言中，联合体（Union）是一种特殊的数据类型，它允许在同一块内存空间中存储不同类型的数据。实际上，联合体中的每个成员共享同一块内存空间，它们具有相同的地址，但占用的字节数取决于联合体中占用空间最大的成员。</p><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>定义一个联合体和定义一个结构体类似，只需要使用 union 关键字即可。例如下面就是一个简单的联合体定义：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyUnion {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>这个联合体定义了两个成员变量，一个是整型变量i，一个是浮点型变量f。由于整型变量和浮点型变量占用的字节数不同，因此这个联合体的大小取决于其中占用空间最大的成员变量。</p><h2 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h2><p>我们可以通过联合体的成员访问运算符.或者-&gt;来访问其成员变量。和结构体一样，也可以通过初始化器来对联合体进行初始化。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyUnion u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 将联合体 u 的所有成员变量都初始化为 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u.i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 // 对整型成员变量 i 进行赋值操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> %f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, u.i, u.f);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 输出结果为：123 0.0000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u.f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 // i 的值会被覆盖，值不可控</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> %f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, u.i, u.f);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 输出结果为：1080033280 3.500000</span></span></code></pre></div><p>需要注意的是，联合体中的所有成员变量都是共享存储空间的，因此在给其中一个成员变量赋值后，其他成员变量的值可能会被覆盖掉。在使用联合体时需要特别小心，确保对应的成员变量处于正确的状态。</p><h2 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h2><p>联合体的灵活性使得它在某些情况下可以被用作特定需求的数据类型。以下是几个联合体的使用示例：</p><h3 id="节省内存空间" tabindex="-1">节省内存空间 <a class="header-anchor" href="#节省内存空间" aria-label="Permalink to &quot;节省内存空间&quot;">​</a></h3><p>在一些内存资源有限的嵌入式系统中，为了节约内存空间，可以使用联合体来实现多种不同类型的数据存储共享同一块内存空间，从而降低内存的开销。</p><p>比如在传输协议设计中，不同的消息类型可能携带的数据类型不同。使用联合体可以将这些不同的数据类型存储于同一块空间中，可以在保证程序正确性的前提下，降低数据占用的内存空间，节约系统内存的开销。</p><h3 id="数据类型转换" tabindex="-1">数据类型转换 <a class="header-anchor" href="#数据类型转换" aria-label="Permalink to &quot;数据类型转换&quot;">​</a></h3><p>在一些情况下，需要将不同类型的数据进行转换。使用联合体可以很方便地实现数据类型的转换，从而简化代码。</p><p>比如在网络编程中，需要将整型数据以二进制形式进行传输。此时可以将整型数据存储于联合体中，然后再通过联合体的字节表示进行传输，接收端再将字节表示转换为整型数据，就可以正确地还原出原始数据。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>联合体是一种特殊类型的数据结构，允许在同一块内存空间中存储不同类型的数据，从而在某些情况下可以节约内存空间并简化代码。使用联合体时需要注意各个成员变量的占用空间和数据类型转换的问题。</p><hr>`,21);function k(r,d,o,c,E,g){const s=a("GoogleAdsense");return h(),n("div",null,[l,t(s)])}const F=i(p,[["render",k]]);export{u as __pageData,F as default};
