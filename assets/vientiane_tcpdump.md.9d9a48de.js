import{_ as a,D as l,o as p,c as n,G as o,R as e}from"./chunks/framework.1625126e.js";const u=JSON.parse('{"title":"tcpdump","description":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。","frontmatter":{"title":"tcpdump","head":[["meta",{"property":"og:title","content":"tcpdump"}],["meta",{"name":"description","content":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。"}],["meta",{"name":"keywords","content":"tcpdump"}],["meta",{"property":"og:description","content":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/tcpdump"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/tcpdump"}]]},"headers":[],"relativePath":"vientiane/tcpdump.md","filePath":"vientiane/tcpdump.md"}'),t={name:"vientiane/tcpdump.md"},c=e(`<h1 id="tcpdump" tabindex="-1">tcpdump <a class="header-anchor" href="#tcpdump" aria-label="Permalink to &quot;tcpdump&quot;" loading="lazy">​</a></h1><p><strong>tcpdump</strong> 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。</p><h2 id="监听网卡" tabindex="-1">监听网卡 <a class="header-anchor" href="#监听网卡" aria-label="Permalink to &quot;监听网卡&quot;" loading="lazy">​</a></h2><p>不指定时默认监听第一个网络接口 <strong>eth0</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span></span></code></pre></div><p>使用 -i 选项指定监听某个网络接口</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span></span></code></pre></div><h2 id="监听指定主机" tabindex="-1">监听指定主机 <a class="header-anchor" href="#监听指定主机" aria-label="Permalink to &quot;监听指定主机&quot;" loading="lazy">​</a></h2><p>监听进入或者离开 ZKServer 的数据包</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span></span></code></pre></div><p>监听两个主机之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LemonServer</span></span></code></pre></div><p>监听当前主机和多个主机之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> \\( </span><span style="color:#C3E88D;">LemonServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PomeloServer</span><span style="color:#A6ACCD;"> \\)</span></span></code></pre></div><p>监听当前主机和指定主机外其他所有主机之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PomeloServer</span></span></code></pre></div><h2 id="监听指定ip" tabindex="-1">监听指定IP <a class="header-anchor" href="#监听指定ip" aria-label="Permalink to &quot;监听指定IP&quot;" loading="lazy">​</a></h2><p>监听 192.168.1.2 收到的和发出的数据包</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.2</span></span></code></pre></div><p>监听两个 IP 之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.3</span></span></code></pre></div><p>监听当前 IP 和多个 IP 之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> \\( </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.4</span><span style="color:#A6ACCD;"> \\)</span></span></code></pre></div><p>监听当前IP 和指定 IP 外其他所有 IP 之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.3</span></span></code></pre></div><h2 id="监听发出的数据包" tabindex="-1">监听发出的数据包 <a class="header-anchor" href="#监听发出的数据包" aria-label="Permalink to &quot;监听发出的数据包&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span></span></code></pre></div><h2 id="监听收到的数据包" tabindex="-1">监听收到的数据包 <a class="header-anchor" href="#监听收到的数据包" aria-label="Permalink to &quot;监听收到的数据包&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dst</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span></span></code></pre></div><h2 id="监听指定主机及指定端口的数据包" tabindex="-1">监听指定主机及指定端口的数据包 <a class="header-anchor" href="#监听指定主机及指定端口的数据包" aria-label="Permalink to &quot;监听指定主机及指定端口的数据包&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.2</span></span></code></pre></div><h2 id="监听指定端口的数据包" tabindex="-1">监听指定端口的数据包 <a class="header-anchor" href="#监听指定端口的数据包" aria-label="Permalink to &quot;监听指定端口的数据包&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dst</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6758</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dst</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6758</span></span></code></pre></div><h2 id="监听指定网段的数据包" tabindex="-1">监听指定网段的数据包 <a class="header-anchor" href="#监听指定网段的数据包" aria-label="Permalink to &quot;监听指定网段的数据包&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">net</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">net</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dst</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">net</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1</span></span></code></pre></div><h2 id="监听指定协议的数据包" tabindex="-1">监听指定协议的数据包 <a class="header-anchor" href="#监听指定协议的数据包" aria-label="Permalink to &quot;监听指定协议的数据包&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">icmp</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">udp</span></span>
<span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">arp</span></span></code></pre></div><h2 id="后台监听" tabindex="-1">后台监听 <a class="header-anchor" href="#后台监听" aria-label="Permalink to &quot;后台监听&quot;" loading="lazy">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nohup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dst</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">net</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">capture.cap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>nohup 和 &amp;：两者配合，可以让 tcpdump 抓包进程在后台执行</p><p>tcp：监听的协议</p><p>-i：监听的网络接口</p><p>-s：0，代表不限制包的大小，默认长度 68 字节</p><p>-c：指定抓取包的数量</p><p>-w：指定保存的文件</p></div><hr>`,41);function r(C,y,i,A,D,d){const s=l("GoogleAdsense");return p(),n("div",null,[c,o(s)])}const m=a(t,[["render",r]]);export{u as __pageData,m as default};
