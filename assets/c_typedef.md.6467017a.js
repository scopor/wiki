import{_ as a,c as n,d as l,e as p,r as e,o}from"./app.3aa45f04.js";const u=JSON.parse('{"title":"typedef","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"typedef \u4E0E\u6307\u9488","slug":"typedef-\u4E0E\u6307\u9488","link":"#typedef-\u4E0E\u6307\u9488","children":[]},{"level":2,"title":"\u4F7F\u7528\u793A\u4F8B","slug":"\u4F7F\u7528\u793A\u4F8B","link":"#\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"c/typedef.md"}'),t={name:"c/typedef.md"},c=p(`<h1 id="typedef" tabindex="-1">typedef <a class="header-anchor" href="#typedef" aria-hidden="true" loading="lazy">#</a></h1><p>\u5728 C \u8BED\u8A00\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u5B9A\u4E49\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002\u4F46\u662F\uFF0C\u6709\u65F6\u5019\u4F7F\u7528 struct \u6216 union \u7B49\u5173\u952E\u5B57\u6765\u5B9A\u4E49\u8FD9\u4E9B\u7C7B\u578B\u4F1A\u663E\u5F97\u7E41\u7410\u548C\u5197\u957F\u3002\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 typedef \u5173\u952E\u5B57\u6765\u5B9A\u4E49\u65B0\u7684\u7C7B\u578B\u540D\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true" loading="lazy">#</a></h2><p>typedef \u7684\u57FA\u672C\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> \u539F\u7C7B\u578B\u540D \u65B0\u7C7B\u578B\u540D</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5176\u4E2D\uFF0C\u539F\u7C7B\u578B\u540D\u53EF\u4EE5\u662F\u4EFB\u4F55\u5DF2\u6709\u7684\u6570\u636E\u7C7B\u578B\uFF08\u5305\u62EC\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u6570\u7EC4\u3001\u7ED3\u6784\u4F53\u3001\u5171\u7528\u4F53\u7B49\uFF09\uFF0C\u800C\u65B0\u7C7B\u578B\u540D\u5C31\u662F\u6211\u4EEC\u8981\u5B9A\u4E49\u7684\u65B0\u7C7B\u578B\u540D\u79F0\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u5C06 int \u578B\u91CD\u547D\u540D\u4E3A integer\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> integer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="typedef-\u4E0E\u6307\u9488" tabindex="-1">typedef \u4E0E\u6307\u9488 <a class="header-anchor" href="#typedef-\u4E0E\u6307\u9488" aria-hidden="true" loading="lazy">#</a></h2><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u6307\u9488\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528 typedef \u7B80\u5316\u4EE3\u7801\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5C06\u4E00\u4E2A\u6574\u578B\u6307\u9488\u91CD\u547D\u540D\u4E3A IntPtr\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> IntPtr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1">\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true" loading="lazy">#</a></h2><p>\u4E0B\u9762\u4EE5\u4E00\u4E2A\u7ED3\u6784\u4F53\u4E3A\u4F8B\u6F14\u793A\u5982\u4F55\u5229\u7528 typedef \u7B80\u5316\u4EE3\u7801\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u8981\u5B9A\u4E49\u4E00\u4E2A\u5305\u542B\u5B66\u751F\u4FE1\u606F\uFF08\u59D3\u540D\u3001\u5E74\u9F84\u3001\u6210\u7EE9\uFF09\u7684\u7ED3\u6784\u4F53\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> student </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">float</span><span style="color:#F07178;"> score</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u5B9A\u4E49\u7ED3\u6784\u4F53\u65F6\u6BD4\u8F83\u7E41\u7410\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 typedef \u6765\u7B80\u5316\u4EE3\u7801\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">float</span><span style="color:#F07178;"> score</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Student</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\uFF0C\u5728\u7A0B\u5E8F\u4E2D\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528Student\u4F5C\u4E3A\u8FD9\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u4E86\uFF1A</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Student stu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5F20\u4E09</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">90.5</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u59D3\u540D\uFF1A%s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">\u5E74\u9F84\uFF1A%d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">\u6210\u7EE9\uFF1A%.1f</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> stu.name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> stu.age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> stu.score</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true" loading="lazy">#</a></h2><p>typedef \u662F C \u8BED\u8A00\u4E2D\u7528\u4E8E\u5B9A\u4E49\u65B0\u7684\u6570\u636E\u7C7B\u578B\u540D\u79F0\u7684\u5173\u952E\u5B57\u3002\u901A\u8FC7\u91CD\u547D\u540D\u5DF2\u6709\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F7F\u7A0B\u5E8F\u66F4\u52A0\u7B80\u6D01\u6613\u61C2\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 typedef \u6765\u7B80\u5316\u4E00\u4E9B\u5197\u957F\u7684\u4EE3\u7801\uFF0C\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002</p><hr>`,22);function r(y,d,i,F,D,C){const s=e("GoogleAdsense");return o(),n("div",null,[c,l(s)])}const h=a(t,[["render",r]]);export{u as __pageData,h as default};
