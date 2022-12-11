import{_ as s,c as a,o as l,e as n}from"./app.6e30c603.js";const g=JSON.parse('{"title":"CSS 学习笔记：布局","description":"CSS,显示模式,布局","frontmatter":{"title":"CSS 学习笔记：布局","head":[["meta",{"property":"og:title","content":"CSS 学习笔记：布局"}],["meta",{"name":"description","content":"CSS,显示模式,布局"}],["meta",{"name":"keywords","content":"CSS,显示模式,布局"}],["meta",{"property":"og:description","content":"CSS,显示模式,布局"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/reading/布局"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/reading/布局"}]]},"headers":[{"level":2,"title":"元素的显示模式","slug":"元素的显示模式","link":"#元素的显示模式","children":[{"level":3,"title":"块元素","slug":"块元素","link":"#块元素","children":[]},{"level":3,"title":"行内元素","slug":"行内元素","link":"#行内元素","children":[]},{"level":3,"title":"行内块元素","slug":"行内块元素","link":"#行内块元素","children":[]}]},{"level":2,"title":"元素显示模式切换","slug":"元素显示模式切换","link":"#元素显示模式切换","children":[{"level":3,"title":"转换成块元素","slug":"转换成块元素","link":"#转换成块元素","children":[]},{"level":3,"title":"转换成行内元素","slug":"转换成行内元素","link":"#转换成行内元素","children":[]},{"level":3,"title":"转换成行内块元素","slug":"转换成行内块元素","link":"#转换成行内块元素","children":[]}]},{"level":2,"title":"CSS 三大特性","slug":"css-三大特性","link":"#css-三大特性","children":[{"level":3,"title":"层叠行","slug":"层叠行","link":"#层叠行","children":[]},{"level":3,"title":"继承性","slug":"继承性","link":"#继承性","children":[]},{"level":3,"title":"优先级","slug":"优先级","link":"#优先级","children":[]}]}],"relativePath":"reading/布局.md"}'),e={name:"reading/布局.md"},i=n(`<h1 id="css-学习笔记-布局" tabindex="-1">CSS 学习笔记：布局 <a class="header-anchor" href="#css-学习笔记-布局" aria-hidden="true" loading="lazy">#</a></h1><h2 id="元素的显示模式" tabindex="-1">元素的显示模式 <a class="header-anchor" href="#元素的显示模式" aria-hidden="true" loading="lazy">#</a></h2><p>元素有两种显示模式：块元素、行内元素和行内块元素。</p><h3 id="块元素" tabindex="-1">块元素 <a class="header-anchor" href="#块元素" aria-hidden="true" loading="lazy">#</a></h3><p>常见的块元素有 h1-h6, p, div, ul, ol, li。</p><ul><li>块元素独占一行</li><li>高度、宽度、外边距和内边距可以调整</li><li>宽度默认是容器（父元素）的100%</li><li>本身是一个容器或盒子，里面可以放行内元素或者其他块元素</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>文字类的块元素内部不能再放置其他元素</li></ul></div><h3 id="行内元素" tabindex="-1">行内元素 <a class="header-anchor" href="#行内元素" aria-hidden="true" loading="lazy">#</a></h3><p>常见的行内元素有 a, strong, b, em, i, del, s, ins, u, span。</p><ul><li>相邻的行内元素在同一行上，一行可以显示多个行内元素</li><li>高度、宽度设置是无效的</li><li>默认宽度是本身内容的宽度</li><li>行内元素只能容纳文本或者其他的行内元素</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>链接里面不能再放链接</li><li>特殊情况链接标签里面可以放块元素，但建议将链接标签转换成块元素</li></ul></div><h3 id="行内块元素" tabindex="-1">行内块元素 <a class="header-anchor" href="#行内块元素" aria-hidden="true" loading="lazy">#</a></h3><p>行内元素中有一些特殊的元素，img、input、td 标签同时具有块元素和行内元素的特点。</p><ul><li>和相邻的行内元素在一行上（块元素特点），但是之间有空白缝隙，一行可以显示多个（行内元素特点）</li><li>默认宽度是本身内容的宽度（行内元素特点）</li><li>高度、行高、外边距以及内边距都可以控制（块元素特点）</li></ul><h2 id="元素显示模式切换" tabindex="-1">元素显示模式切换 <a class="header-anchor" href="#元素显示模式切换" aria-hidden="true" loading="lazy">#</a></h2><p>部分块元素和行内元素可以进行显示模式的转换，主要使用 <strong>display</strong> 样式。</p><h3 id="转换成块元素" tabindex="-1">转换成块元素 <a class="header-anchor" href="#转换成块元素" aria-hidden="true" loading="lazy">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">display: block;</span></span>
<span class="line"></span></code></pre></div><h3 id="转换成行内元素" tabindex="-1">转换成行内元素 <a class="header-anchor" href="#转换成行内元素" aria-hidden="true" loading="lazy">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">display: inline;</span></span>
<span class="line"></span></code></pre></div><h3 id="转换成行内块元素" tabindex="-1">转换成行内块元素 <a class="header-anchor" href="#转换成行内块元素" aria-hidden="true" loading="lazy">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">display: </span><span style="color:#FFCB6B;">inline-block</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="css-三大特性" tabindex="-1"><strong>CSS</strong> 三大特性 <a class="header-anchor" href="#css-三大特性" aria-hidden="true" loading="lazy">#</a></h2><p><strong>CSS</strong> 有三个非常重要的特性：层叠性、继承性、优先级</p><h3 id="层叠行" tabindex="-1">层叠行 <a class="header-anchor" href="#层叠行" aria-hidden="true" loading="lazy">#</a></h3><p>层叠，效果其实就是覆盖。相同的选择器设置不同的样式，会发生样式冲突，层叠性就是解决冲突的问题。</p><div class="tip custom-block"><p class="custom-block-title">层叠行原则</p><ul><li>样式冲突，就近原则（优先级的问题），哪个样式离结构近，就执行哪个样式</li><li>样式不冲突，不发生层叠</li></ul></div><h3 id="继承性" tabindex="-1">继承性 <a class="header-anchor" href="#继承性" aria-hidden="true" loading="lazy">#</a></h3><p>子标签继承父标签的某些样式。</p><div class="tip custom-block"><p class="custom-block-title">行高的设置</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#A6ACCD;">/</span><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Microsoft YaHei</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/*  此时div的行高是14*1.5=21 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/* 未指定文字大小，默认使用父元素 body 设置的行高，即 12*1.5=18 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Spring&lt;/</span><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;</span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Summer&lt;/</span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>行高可以跟单位，也可以不跟</li><li>子元素没有设置行高时，继承父元素的行高的 <strong>1.5</strong> 倍</li><li>子元素的行高是当前子元素的文字大小的 <strong>1.5</strong> 倍</li></ul></div><h3 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-hidden="true" loading="lazy">#</a></h3><p>详见 <a href="https://wiki.sanoon.me/reading/css#%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7" loading="lazy" target="_blank" rel="noreferrer">CSS 选择器优先级</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>!important &gt;內联样式 &gt;ID 选择器 &gt;类选择器|伪类选择器|属性选择器 &gt;元素选择器|伪元素选择器 &gt;继承|*</p></div>`,33),o=[i];function p(t,c,r,d,h,y){return l(),a("div",null,o)}const u=s(e,[["render",p]]);export{g as __pageData,u as default};
