import{_ as a,c as n,d as l,e as p,o as e,r as t}from"./app.5c04f642.js";const u=JSON.parse('{"title":"tcpdump","description":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。","frontmatter":{"title":"tcpdump","head":[["meta",{"property":"og:title","content":"tcpdump"}],["meta",{"name":"description","content":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。"}],["meta",{"name":"keywords","content":"tcpdump"}],["meta",{"property":"og:description","content":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/vientiane/tcpdump"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/vientiane/tcpdump"}]]},"headers":[{"level":2,"title":"监听网卡","slug":"监听网卡","link":"#监听网卡","children":[]},{"level":2,"title":"监听指定主机","slug":"监听指定主机","link":"#监听指定主机","children":[]},{"level":2,"title":"监听指定IP","slug":"监听指定ip","link":"#监听指定ip","children":[]},{"level":2,"title":"监听发出的数据包","slug":"监听发出的数据包","link":"#监听发出的数据包","children":[]},{"level":2,"title":"监听收到的数据包","slug":"监听收到的数据包","link":"#监听收到的数据包","children":[]},{"level":2,"title":"监听指定主机及指定端口的数据包","slug":"监听指定主机及指定端口的数据包","link":"#监听指定主机及指定端口的数据包","children":[]},{"level":2,"title":"监听指定端口的数据包","slug":"监听指定端口的数据包","link":"#监听指定端口的数据包","children":[]},{"level":2,"title":"监听指定网段的数据包","slug":"监听指定网段的数据包","link":"#监听指定网段的数据包","children":[]},{"level":2,"title":"监听指定协议的数据包","slug":"监听指定协议的数据包","link":"#监听指定协议的数据包","children":[]},{"level":2,"title":"后台监听","slug":"后台监听","link":"#后台监听","children":[]}],"relativePath":"vientiane/tcpdump.md"}'),o={name:"vientiane/tcpdump.md"},c=p(`<h1 id="tcpdump" tabindex="-1">tcpdump <a class="header-anchor" href="#tcpdump" aria-hidden="true" loading="lazy">#</a></h1><p><strong>tcpdump</strong> 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。</p><h2 id="监听网卡" tabindex="-1">监听网卡 <a class="header-anchor" href="#监听网卡" aria-hidden="true" loading="lazy">#</a></h2><p>不指定时默认监听第一个网络接口 <strong>eth0</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>使用 -i 选项指定监听某个网络接口</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth1</span></span>
<span class="line"></span></code></pre></div><h2 id="监听指定主机" tabindex="-1">监听指定主机 <a class="header-anchor" href="#监听指定主机" aria-hidden="true" loading="lazy">#</a></h2><p>监听进入或者离开 ZKServer 的数据包</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span></span>
<span class="line"></span></code></pre></div><p>监听两个主机之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LemonServer</span></span>
<span class="line"></span></code></pre></div><p>监听当前主机和多个主机之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> \\( </span><span style="color:#C3E88D;">LemonServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PomeloServer</span><span style="color:#A6ACCD;"> \\)</span></span>
<span class="line"></span></code></pre></div><p>监听当前主机和指定主机外其他所有主机之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PomeloServer</span></span>
<span class="line"></span></code></pre></div><h2 id="监听指定ip" tabindex="-1">监听指定IP <a class="header-anchor" href="#监听指定ip" aria-hidden="true" loading="lazy">#</a></h2><p>监听 192.168.1.2 收到的和发出的数据包</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.2</span></span>
<span class="line"></span></code></pre></div><p>监听两个 IP 之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.3</span></span>
<span class="line"></span></code></pre></div><p>监听当前 IP 和多个 IP 之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> \\( </span><span style="color:#C3E88D;">192.168.1.3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.4</span><span style="color:#A6ACCD;"> \\)</span></span>
<span class="line"></span></code></pre></div><p>监听当前IP 和指定 IP 外其他所有 IP 之间的通信</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.3</span></span>
<span class="line"></span></code></pre></div><h2 id="监听发出的数据包" tabindex="-1">监听发出的数据包 <a class="header-anchor" href="#监听发出的数据包" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span></span>
<span class="line"></span></code></pre></div><h2 id="监听收到的数据包" tabindex="-1">监听收到的数据包 <a class="header-anchor" href="#监听收到的数据包" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eth0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dst</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ZKServer</span></span>
<span class="line"></span></code></pre></div><h2 id="监听指定主机及指定端口的数据包" tabindex="-1">监听指定主机及指定端口的数据包 <a class="header-anchor" href="#监听指定主机及指定端口的数据包" aria-hidden="true" loading="lazy">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.1.2</span></span>
<span class="line"></span></code></pre></div><h2 id="监听指定端口的数据包" tabindex="-1">监听指定端口的数据包 <a class="header-anchor" href="#监听指定端口的数据包" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tcpdump port 22</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump src port 22</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump dst port 22</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth1 src port 6758</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth1 dst port 6758</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="监听指定网段的数据包" tabindex="-1">监听指定网段的数据包 <a class="header-anchor" href="#监听指定网段的数据包" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tcpdump -i eth1 net 192.168.1</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth1 src net 192.168.1</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth1 dst net 192.168.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="监听指定协议的数据包" tabindex="-1">监听指定协议的数据包 <a class="header-anchor" href="#监听指定协议的数据包" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tcpdump -i eth0 icmp</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth0 ip</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth0 tcp</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth0 udp</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump -i eth0 arp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="后台监听" tabindex="-1">后台监听 <a class="header-anchor" href="#后台监听" aria-hidden="true" loading="lazy">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">nohup tcpdump tcp -i eth0 -s 0 -c 100 and dst net 192.168.1.2 -w capture.cap &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>nohup 和 &amp;：两者配合，可以让 tcpdump 抓包进程在后台执行</p><p>tcp：监听的协议</p><p>-i：监听的网络接口</p><p>-s：0，代表不限制包的大小，默认长度 68 字节</p><p>-c：制定抓取包的数量</p><p>-w：制定保存的文件</p></div><hr>`,41);function r(i,d,C,y,h,A){const s=t("GoogleAdsense");return e(),n("div",null,[c,l(s)])}const m=a(o,[["render",r]]);export{u as __pageData,m as default};
