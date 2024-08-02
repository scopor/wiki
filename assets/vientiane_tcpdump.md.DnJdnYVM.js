import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.4sasYC7X.js";const g=JSON.parse('{"title":"tcpdump","description":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。","frontmatter":{"title":"tcpdump","head":[["meta",{"property":"og:title","content":"tcpdump"}],["meta",{"name":"description","content":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。"}],["meta",{"name":"keywords","content":"tcpdump"}],["meta",{"property":"og:description","content":"tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。"}],["meta",{"property":"og:url","content":"https://sooloe.com/vientiane/tcpdump"}],["link",{"rel":"canonical","href":"https://sooloe.com/vientiane/tcpdump"}]]},"headers":[],"relativePath":"vientiane/tcpdump.md","filePath":"vientiane/tcpdump.md"}'),h={name:"vientiane/tcpdump.md"},p=t(`<h1 id="tcpdump" tabindex="-1">tcpdump <a class="header-anchor" href="#tcpdump" aria-label="Permalink to &quot;tcpdump&quot;">​</a></h1><p><strong>tcpdump</strong> 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。</p><h2 id="监听网卡" tabindex="-1">监听网卡 <a class="header-anchor" href="#监听网卡" aria-label="Permalink to &quot;监听网卡&quot;">​</a></h2><p>不指定时默认监听第一个网络接口 <strong>eth0</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span></span></code></pre></div><p>使用 -i 选项指定监听某个网络接口</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span></span></code></pre></div><h2 id="监听指定主机" tabindex="-1">监听指定主机 <a class="header-anchor" href="#监听指定主机" aria-label="Permalink to &quot;监听指定主机&quot;">​</a></h2><p>监听进入或者离开 ZKServer 的数据包</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ZKServer</span></span></code></pre></div><p>监听两个主机之间的通信</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ZKServer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LemonServer</span></span></code></pre></div><p>监听当前主机和多个主机之间的通信</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ZKServer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LemonServer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PomeloServer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\)</span></span></code></pre></div><p>监听当前主机和指定主机外其他所有主机之间的通信</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ZKServer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PomeloServer</span></span></code></pre></div><h2 id="监听指定ip" tabindex="-1">监听指定IP <a class="header-anchor" href="#监听指定ip" aria-label="Permalink to &quot;监听指定IP&quot;">​</a></h2><p>监听 192.168.1.2 收到的和发出的数据包</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.2</span></span></code></pre></div><p>监听两个 IP 之间的通信</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.3</span></span></code></pre></div><p>监听当前 IP 和多个 IP 之间的通信</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\)</span></span></code></pre></div><p>监听当前IP 和指定 IP 外其他所有 IP 之间的通信</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.3</span></span></code></pre></div><h2 id="监听发出的数据包" tabindex="-1">监听发出的数据包 <a class="header-anchor" href="#监听发出的数据包" aria-label="Permalink to &quot;监听发出的数据包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ZKServer</span></span></code></pre></div><h2 id="监听收到的数据包" tabindex="-1">监听收到的数据包 <a class="header-anchor" href="#监听收到的数据包" aria-label="Permalink to &quot;监听收到的数据包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ZKServer</span></span></code></pre></div><h2 id="监听指定主机及指定端口的数据包" tabindex="-1">监听指定主机及指定端口的数据包 <a class="header-anchor" href="#监听指定主机及指定端口的数据包" aria-label="Permalink to &quot;监听指定主机及指定端口的数据包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.2</span></span></code></pre></div><h2 id="监听指定端口的数据包" tabindex="-1">监听指定端口的数据包 <a class="header-anchor" href="#监听指定端口的数据包" aria-label="Permalink to &quot;监听指定端口的数据包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6758</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6758</span></span></code></pre></div><h2 id="监听指定网段的数据包" tabindex="-1">监听指定网段的数据包 <a class="header-anchor" href="#监听指定网段的数据包" aria-label="Permalink to &quot;监听指定网段的数据包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1</span></span></code></pre></div><h2 id="监听指定协议的数据包" tabindex="-1">监听指定协议的数据包 <a class="header-anchor" href="#监听指定协议的数据包" aria-label="Permalink to &quot;监听指定协议的数据包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> icmp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcpdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arp</span></span></code></pre></div><h2 id="后台监听" tabindex="-1">后台监听 <a class="header-anchor" href="#后台监听" aria-label="Permalink to &quot;后台监听&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcpdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dst</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> capture.cap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>nohup 和 &amp;：两者配合，可以让 tcpdump 抓包进程在后台执行</p><p>tcp：监听的协议</p><p>-i：监听的网络接口</p><p>-s：0，代表不限制包的大小，默认长度 68 字节</p><p>-c：指定抓取包的数量</p><p>-w：指定保存的文件</p></div>`,40),e=[p];function l(n,k,d,F,r,c){return a(),i("div",null,e)}const C=s(h,[["render",l]]);export{g as __pageData,C as default};
