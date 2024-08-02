import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.4sasYC7X.js";const c=JSON.parse('{"title":"数值","description":"","frontmatter":{},"headers":[],"relativePath":"python/数值.md","filePath":"python/数值.md"}'),l={name:"python/数值.md"},h=n(`<h1 id="数值" tabindex="-1">数值 <a class="header-anchor" href="#数值" aria-label="Permalink to &quot;数值&quot;">​</a></h1><p>顾名思义，用于存储数值，Python 支持三种不同的数值类型：整形、浮点型和复数类型。</p><h2 id="整形" tabindex="-1">整形 <a class="header-anchor" href="#整形" aria-label="Permalink to &quot;整形&quot;">​</a></h2><p><strong>整型 (int)：</strong> 表示整数，例如 10, 25, -50。Python 中的整数可以是任意长度的，可以是正数、负数或零。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 整型变量示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num1))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;int&#39;&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num2))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;int&#39;&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num3))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;int&#39;&gt;</span></span></code></pre></div><h2 id="浮点型" tabindex="-1">浮点型 <a class="header-anchor" href="#浮点型" aria-label="Permalink to &quot;浮点型&quot;">​</a></h2><p><strong>浮点型 (float)：</strong> 表示带有小数点的数字，可以是正数、负数或零。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 浮点型变量示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14159</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">negative_float </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zero_float </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pi))              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;float&#39;&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(negative_float))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;float&#39;&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(zero_float))      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;float&#39;&gt;</span></span></code></pre></div><h2 id="复数" tabindex="-1">复数 <a class="header-anchor" href="#复数" aria-label="Permalink to &quot;复数&quot;">​</a></h2><p><strong>复数 (complex)：</strong> 表示带有虚部的数字，形如 <code>a + bj</code>，其中 <code>a</code> 是实部，<code>b</code> 是虚部，<code>j</code> 是虚数单位。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复数变量示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">complex_num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">j</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">complex_num2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">j</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(complex_num1))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;complex&#39;&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(complex_num2))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：&lt;class &#39;complex&#39;&gt;</span></span></code></pre></div><p>以上三种数值类型，运算时会发生类型转换，Python 中类型转换主要分为两种方式：隐式类型转换、显示类型转换(类型强制转换)。</p><h2 id="隐式类型转换" tabindex="-1">隐式类型转换 <a class="header-anchor" href="#隐式类型转换" aria-label="Permalink to &quot;隐式类型转换&quot;">​</a></h2><ul><li>当进行混合类型的数值运算时，Python 会自动将“较小”的类型转换为“较大”的类型，以避免数据丢失。</li><li>转换顺序一般为：<code>整型(int)</code> -&gt; <code>浮点型(float)</code> -&gt; <code>复数(complex)</code>。</li><li>隐式转换不需要使用任何函数，由 Python 解释器自动完成。</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 整型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 浮点型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">j</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 复数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 整型和浮点型运算，结果自动转换为浮点型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：13.14 &lt;class &#39;float&#39;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 浮点型和复数运算，结果自动转换为复数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：(5.140000000000001+3j) &lt;class &#39;complex&#39;&gt;</span></span></code></pre></div><h2 id="显示类型转换" tabindex="-1">显示类型转换 <a class="header-anchor" href="#显示类型转换" aria-label="Permalink to &quot;显示类型转换&quot;">​</a></h2><ul><li>当需要明确将一种数值类型转换为另一种数值类型时，可以使用类型转换函数。</li><li>常用的类型转换函数： <ul><li><code>int(x)</code>: 将 x 转换为整数，小数部分会被截断。</li><li><code>float(x)</code>: 将 x 转换为浮点数。</li><li><code>complex(x)</code>: 将 x 转换为复数，实部为 x，虚部为 0。</li><li><code>complex(x, y)</code>: 将 x 和 y 转换为复数，实部为 x，虚部为 y。</li></ul></li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">j</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将浮点型转换为整型，小数部分被截断</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a) </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：10 &lt;class &#39;int&#39;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将复数转换为浮点型，会报错</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># result2 = float(b)  # TypeError: can&#39;t convert complex to float</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将整型转换为复数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> complex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result3, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result3))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：(10.5+0j) &lt;class &#39;complex&#39;&gt;</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li>从浮点型转换为整型时，小数部分会被截断，而不是四舍五入。</li><li>不能直接将复数转换为浮点型或整型，需要先提取实部或虚部再进行转换。</li></ul><p>​</p>`,21),t=[h];function p(k,e,r,d,g,E){return a(),i("div",null,t)}const o=s(l,[["render",p]]);export{c as __pageData,o as default};
