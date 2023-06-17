import{_ as s,o as a,c as l,O as n}from"./chunks/framework.95b9d657.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"c/数组.md","filePath":"c/数组.md"}'),p={name:"c/数组.md"},o=n(`<h2 id="_1-数组" tabindex="-1">1 数组 <a class="header-anchor" href="#_1-数组" aria-label="Permalink to &quot;1 数组&quot;" loading="lazy">​</a></h2><p>在 C 语言中，数组是一组具有相同数据类型的变量集合。这些变量按照顺序排列，并且可以通过一个共同的名称来访问它们。</p><h2 id="_2-定义" tabindex="-1">2 定义 <a class="header-anchor" href="#_2-定义" aria-label="Permalink to &quot;2 定义&quot;" loading="lazy">​</a></h2><p>在 C 语言中，我们可以使用以下方式来定义一个数组：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">];</span></span></code></pre></div><p>上述代码表示我们定义了一个包含 5 个整型元素的数组，它们被分配在内存中连续的位置上。我们也可以给数组初始化赋值：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">};</span></span></code></pre></div><p>当然，我们也可以只给部分元素赋初值：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">};</span></span></code></pre></div><p>其余元素会自动初始化为 0 么? 答案是 不一定。</p><p>当定义一个数组时，只对其中一部分元素进行了初始化，只有被显式初始化的元素才会被赋予具体的值，而其他未初始化的元素则会保持为随机值。这些随机值的大小和分布是不可预测的，因此未初始化的数组元素可能是 0，也可能是其他随机值。这是因为在程序开始执行之前，内存中已经包含了各种随机值。这些值可能是上一次程序运行时留下的残留值，也可能是其他程序使用同一内存空间时留下的值。</p><p>如果我们不知道数组需要多大，或者需要动态改变其大小，则需要使用动态内存分配函数 malloc 函数来创建一个指向数组首地址的指针</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">sizeof(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">));</span></span></code></pre></div><p>上述代码表示我们创建了一个指向整型元素的指针，并且使用 malloc 函数申请了一块大小为 5 个整型元素所占字节数之和的空间。</p><h2 id="_3-访问" tabindex="-1">3 访问 <a class="header-anchor" href="#_3-访问" aria-label="Permalink to &quot;3 访问&quot;" loading="lazy">​</a></h2><p>要想访问数组元素，只需使用下标（从 0 开始）即可：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">];</span><span style="color:#676E95;font-style:italic;"> // 访问第 1 个元素</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> array</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">];</span><span style="color:#676E95;font-style:italic;"> // 访问第 3 个元素</span></span></code></pre></div><h2 id="_4-遍历" tabindex="-1">4 遍历 <a class="header-anchor" href="#_4-遍历" aria-label="Permalink to &quot;4 遍历&quot;" loading="lazy">​</a></h2><p>要遍历数组，可以使用循环结构（如 for 循环）: 会输出数组中的所有元素。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]);</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_5-特点" tabindex="-1">5 特点 <a class="header-anchor" href="#_5-特点" aria-label="Permalink to &quot;5 特点&quot;" loading="lazy">​</a></h2><ul><li>数组中的所有元素具有相同的数据类型；</li><li>数组在内存中是连续存储的，因此访问其元素速度较快；</li><li>数组长度是固定不变的，如果需要动态改变大小，则需要重新创建一个新的数组。</li></ul><h2 id="_6-多维数组" tabindex="-1">6 多维数组 <a class="header-anchor" href="#_6-多维数组" aria-label="Permalink to &quot;6 多维数组&quot;" loading="lazy">​</a></h2><p>C 语言中的多维数组是指在定义时使用多个方括号 [] 来表示数组的维数。</p><p>例如，以下代码定义了一个二维数组 arr，包含 3 行 4 列的元素：</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},{</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">}};</span></span></code></pre></div><p>这里的 arr 实际上是由 3 个一维数组组成的数组，在内存中排列方式为 3 行 4 列，故它可以看做有 3 个横向的一维数组，每个一维数组有 4 个竖向的元素。</p><p>多维数组的访问方式与一维数组类似，可以使用两个方括号来指定数组中的元素。例如要访问 arr 数组的第 2 行第 3 列元素，可以使用如下语句:</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>此时，数组 arr 中第 2 行第 3 列的元素值即被赋值为 10。</p><p>多维数组的定义和初始化有多种方式，可以在定义时直接赋初值，也可以在之后使用循环对其进行赋值。</p><p>使用多维数组，需要注意以下几点:</p><ul><li>多维数组的定义方式：在定义多维数组时，需要使用多个方括号 [] 来表示数组的维数。</li><li>多维数组的内存布局：多维数组采用按行优先的方式进行排列，在内存中的组织方式是：将第 1 行的元素依次存储在一起，紧接着是第 2 行的元素，以此类推。</li><li>多维数组的初始化：多维数组在定义时也可以直接赋初值，其中大括号内部的数据按行填充到数组中。如果未对数组进行初始化，则数组中的元素值将是不确定的随机值。</li></ul>`,33),e=[o];function t(c,r,y,F,D,C){return a(),l("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
