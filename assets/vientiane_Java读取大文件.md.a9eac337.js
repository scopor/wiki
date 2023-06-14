import{_ as a,D as s,o as t,c as l,G as o,O as n}from"./chunks/framework.95b9d657.js";const _=JSON.parse('{"title":"Files.readAllBytes 使用隐患","description":"Files.readAllBytes 是 Java 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 byte 数组。然而，它存在一些使用隐患，可能会导致程序运行出错或产生安全问题。","frontmatter":{"title":"Files.readAllBytes 使用隐患","head":[["meta",{"property":"og:title","content":"Files.readAllBytes 使用隐患"}],["meta",{"name":"description","content":"Files.readAllBytes 是 Java 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 byte 数组。然而，它存在一些使用隐患，可能会导致程序运行出错或产生安全问题。"}],["meta",{"name":"keywords","content":"Files.readAllBytes,"}],["meta",{"property":"og:description","content":"Files.readAllBytes 是 Java 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 byte 数组。然而，它存在一些使用隐患，可能会导致程序运行出错或产生安全问题。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/Java%E8%AF%BB%E5%8F%96%E5%A4%A7%E6%96%87%E4%BB%B6"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/Java%E8%AF%BB%E5%8F%96%E5%A4%A7%E6%96%87%E4%BB%B6"}]]},"headers":[],"relativePath":"vientiane/Java读取大文件.md","filePath":"vientiane/Java读取大文件.md"}'),r={name:"vientiane/Java读取大文件.md"},p=n(`<h1 id="files-readallbytes" tabindex="-1">Files.readAllBytes <a class="header-anchor" href="#files-readallbytes" aria-label="Permalink to &quot;Files.readAllBytes&quot;" loading="lazy">​</a></h1><p>是 <strong>Java</strong> 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 <strong>byte</strong> 数组</p><h2 id="现象" tabindex="-1">现象 <a class="header-anchor" href="#现象" aria-label="Permalink to &quot;现象&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">java.lang.OutOfMemoryError:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Direct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buffer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">memory</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">at</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java.nio.Bits.reserveMemory</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Bits.java:632</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>当前我们服务的堆外内存配置如下，如果没配置，默认是 <strong>64M</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-XX:MaxDirectMemorySize</span><span style="color:#A6ACCD;">=128m</span></span></code></pre></div><p>当我们尝试将其修改为 <strong>192m</strong> 后，持续进行测试，还是发生了上述现象，看堆栈信息就是在使用该方法时抛出了异常，我们读取的文件大小约 <strong>40M</strong>。</p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;" loading="lazy">​</a></h2><p>Files.readAllBytes 方法是直接将整个文件直接读取到内存中，这可能是导致错误的原因。</p><p>如果要读取的文件非常大，则可以考虑使用更高效的方式来读取文件，例如使用 BufferedInputStream 和 ByteArrayOutputStream，并逐步读取文件。这样可以避免将整个文件读入内存中，从而避免内存限制问题。</p><p>我们更换使用了 <strong>FileCopyUtils.copyToByteArray</strong> 方法，该方法内部是循环读取文件写入一个输出 ByteArrayOutputStream 流中，经过大量测试后，问题得以解决。</p><hr>`,12);function i(c,y,d,m,A,B){const e=s("GoogleAdsense");return t(),l("div",null,[p,o(e)])}const g=a(r,[["render",i]]);export{_ as __pageData,g as default};
