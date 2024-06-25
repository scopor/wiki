import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.BocDoH_z.js";const E=JSON.parse('{"title":"VitePress 集成 Algolia","description":"VitePress 集成 Algolia，Algolia 申请, Algolia 索引建立.","frontmatter":{"title":"VitePress 集成 Algolia","head":[["meta",{"property":"og:title","content":"VitePress 集成 Algolia"}],["meta",{"name":"description","content":"VitePress 集成 Algolia，Algolia 申请, Algolia 索引建立."}],["meta",{"name":"keywords","content":"VitePress, Algolia"}],["meta",{"property":"og:description","content":"VitePress 集成 Algolia，Algolia 申请, Algolia 索引建立."}]]},"headers":[],"relativePath":"VitePress/VitePress集成Algolia.md","filePath":"VitePress/VitePress集成Algolia.md"}'),l={name:"VitePress/VitePress集成Algolia.md"},e=t(`<h2 id="_1、algolia-申请" tabindex="-1">1、Algolia 申请 <a class="header-anchor" href="#_1、algolia-申请" aria-label="Permalink to &quot;1、Algolia 申请&quot;">​</a></h2><p>VitePress 支持配置 Algolia，因此我们只需要申请 Algolia 的 <a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noreferrer">DOCSEARCH</a> 即可，申请之后会收到一封邮件，你需要直接回复，你拥有该网站的管理权限，并且有权限修改代码。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># config.ts 文件中的 algolia 搜索配置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    appId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    apiKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    indexName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;请输入关键字&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    buttonText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;搜索&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>接着对方会使用 DOCSEARCH 爬取你的网站并发送需要注入的代码过来，我们需要将其中的 appId、apiKey、indexName 配置到上述的 algolia 节点中，重新部署网站即可。</p><h2 id="_2、algolia-爬虫" tabindex="-1">2、Algolia 爬虫 <a class="header-anchor" href="#_2、algolia-爬虫" aria-label="Permalink to &quot;2、Algolia 爬虫&quot;">​</a></h2><p>DOCSEARCH 一般情况下一周爬取一次网站的最新信息，声称最新的索引信息，如果希望手动刷新，可以登录到<a href="https://crawler.algolia.com/admin/crawlers/" target="_blank" rel="noreferrer">爬虫后台</a>进行手动触发。</p>`,6),n=[e];function h(o,k,r,p,g,c){return a(),s("div",null,n)}const y=i(l,[["render",h]]);export{E as __pageData,y as default};
