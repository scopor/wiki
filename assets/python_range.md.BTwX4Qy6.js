import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.4sasYC7X.js";const c=JSON.parse('{"title":"range","description":"","frontmatter":{},"headers":[],"relativePath":"python/range.md","filePath":"python/range.md"}'),e={name:"python/range.md"},t=n(`<h1 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h1><p><code>range</code> 函数是 Python 中一个非常实用的内置函数，它用于生成一个整数序列，常用于循环控制，尤其是在需要对一定范围内的数字进行迭代操作时。</p><h2 id="range-函数的基本用法" tabindex="-1"><code>range</code> 函数的基本用法 <a class="header-anchor" href="#range-函数的基本用法" aria-label="Permalink to &quot;\`range\` 函数的基本用法&quot;">​</a></h2><p><code>range</code> 函数有三种常见的用法：</p><ol><li><strong><code>range(stop)</code>:</strong> 生成从 0 开始，到 <code>stop</code> 结束（不包含 <code>stop</code>）的整数序列。</li><li><strong><code>range(start, stop)</code>:</strong> 生成从 <code>start</code> 开始，到 <code>stop</code> 结束（不包含 <code>stop</code>）的整数序列。</li><li><strong><code>range(start, stop, step)</code>:</strong> 生成从 <code>start</code> 开始，到 <code>stop</code> 结束（不包含 <code>stop</code>），步长为 <code>step</code> 的整数序列。</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成从 0 到 5 的整数序列（不包含 5）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：0 1 2 3 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成从 2 到 8 的整数序列（不包含 8）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：2 3 4 5 6 7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成从 1 到 10，步长为 2 的整数序列</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：1 3 5 7 9</span></span></code></pre></div><h2 id="range-函数的特性" tabindex="-1"><code>range</code> 函数的特性 <a class="header-anchor" href="#range-函数的特性" aria-label="Permalink to &quot;\`range\` 函数的特性&quot;">​</a></h2><ul><li><strong>不可变序列:</strong> <code>range</code> 函数返回的是一个不可变的序列，无法直接修改其元素的值。</li><li><strong>惰性求值:</strong> <code>range</code> 函数不会立即生成整个整数序列，而是在需要的时候才生成。这可以节省内存，尤其是在处理大型序列时。</li><li><strong>可迭代对象:</strong> <code>range</code> 函数返回的对象是一个可迭代对象，可以直接在循环中使用。</li></ul><h2 id="range-函数的应用场景" tabindex="-1"><code>range</code> 函数的应用场景 <a class="header-anchor" href="#range-函数的应用场景" aria-label="Permalink to &quot;\`range\` 函数的应用场景&quot;">​</a></h2><ul><li><strong>循环控制:</strong> <code>range</code> 函数常用于循环控制，例如遍历列表、生成一定范围内的数字等。</li><li><strong>列表推导:</strong> <code>range</code> 函数可用于列表推导，生成包含一定范围内的数字的列表。</li><li><strong>函数参数:</strong> <code>range</code> 函数可以作为函数的参数，例如用于指定循环次数。</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 \`range\` 函数遍历列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">names </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Charlie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(names)):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(names[i])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：Alice Bob Charlie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 \`range\` 函数进行列表推导</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">squares </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(squares)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：[1, 4, 9, 16, 25]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 \`range\` 函数作为函数参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> print_numbers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">print_numbers(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：0 1 2 3 4</span></span></code></pre></div><h2 id="range-函数的注意事项" tabindex="-1"><code>range</code> 函数的注意事项 <a class="header-anchor" href="#range-函数的注意事项" aria-label="Permalink to &quot;\`range\` 函数的注意事项&quot;">​</a></h2><ul><li><strong>步长:</strong> 当步长为负数时，<code>start</code> 应该大于 <code>stop</code>，例如 <code>range(10, 0, -1)</code>。</li><li><strong>空序列:</strong> 如果 <code>start</code> 等于 <code>stop</code>，或者步长为 0，则 <code>range</code> 函数会生成一个空序列。</li></ul><h2 id="range-函数的替代方案" tabindex="-1"><code>range</code> 函数的替代方案 <a class="header-anchor" href="#range-函数的替代方案" aria-label="Permalink to &quot;\`range\` 函数的替代方案&quot;">​</a></h2><ul><li><strong>列表推导:</strong> 对于简单的场景，可以使用列表推导来生成整数序列。例如 <code>[i for i in range(5)]</code> 等价于 <code>range(5)</code>。</li><li><strong>循环计数:</strong> 在一些场景下，可以使用循环变量来控制循环次数，例如 <code>for i in range(5)</code> 可以用 <code>for i in [0, 1, 2, 3, 4]</code> 来代替。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p><code>range</code> 函数是 Python 中一个非常重要的内置函数，它可以方便地生成整数序列，并在循环控制、列表推导等场景中发挥重要作用。</p>`,17),h=[t];function l(p,k,r,d,o,g){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{c as __pageData,y as default};
