import{_ as a,o as l,c as t,O as i}from"./chunks/framework.95b9d657.js";const u=JSON.parse('{"title":"运算符","description":"基本运算符，自增自减运算符，位运算符，逻辑运算符，运算符优先级.","frontmatter":{"title":"运算符","head":[["meta",{"property":"og:title","content":"运算符"}],["meta",{"name":"description","content":"基本运算符，自增自减运算符，位运算符，逻辑运算符，运算符优先级."}],["meta",{"name":"keywords","content":"基本运算符，自增自减运算符，位运算符，逻辑运算符，运算符优先级."}],["meta",{"property":"og:description","content":"基本运算符，自增自减运算符，位运算符，逻辑运算符，运算符优先级."}]]},"headers":[],"relativePath":"c/运算符.md","filePath":"c/运算符.md"}'),e={name:"c/运算符.md"},o=i('<h2 id="_1-基本运算符" tabindex="-1">1 基本运算符 <a class="header-anchor" href="#_1-基本运算符" aria-label="Permalink to &quot;1 基本运算符&quot;" loading="lazy">​</a></h2><ul><li>加法运算符： +</li><li>减法运算符： -</li><li>乘法运算符： *</li><li>除法运算符： /</li><li>取模运算符： %</li><li>赋值运算符： =</li><li>负数运算符： -</li></ul><h2 id="_2-自增自减运算符" tabindex="-1">2 自增自减运算符 <a class="header-anchor" href="#_2-自增自减运算符" aria-label="Permalink to &quot;2 自增自减运算符&quot;" loading="lazy">​</a></h2><ul><li>自增运算符： ++</li><li>自减运算符： --</li></ul><p>放在变量的前后有区别，以自增运算符为例</p><ul><li>a++ 先返回 a 的值，然后 a 自增</li><li>++a 先自增 a 的值，然后返回 a</li></ul><h2 id="_3-位运算符" tabindex="-1">3 位运算符 <a class="header-anchor" href="#_3-位运算符" aria-label="Permalink to &quot;3 位运算符&quot;" loading="lazy">​</a></h2><p>位运算符分为以下类型</p><ul><li>左移运算符： &lt;&lt; , 将二进制往左移动一位，后面补 0</li><li>右移运算符: &gt;&gt; ，将二进制网右移动一位，左侧补 0</li><li>按位与运算： &amp; ，将二进制的每一个 bit 位进行 &amp; 操作，都是 1 则结果为 1，其余为 0</li><li>按位或运算： | ，将二进制的每一个 bit 位进行 &amp; 操作，其中一个是 1 则结果为 1，其余为 0</li><li>按位异或符： ^ , 将二进制的每一个 bit 位进行比较，如果相同则结果为 0，如果不同则结果为 1</li><li>按位非运算： ~ , 将每一个 bit 位置反</li></ul><p>按位非举个栗子：int a = 2; a = ~a; a 最终为 -3，计算过程如下</p><p>int a 的二进制原码为：00000000 00000000 00000000 00000010，按位非取反后原码变为：11111111 11111111 11111111 11111101，要变成补码需要先变成反码后 +1 因此补码为：10000000 00000000 00000000 00000010 + 00000000 00000000 00000000 00000001 = 10000000 00000000 00000000 00000011, 计算得出 -3。</p><h2 id="_4-逻辑运算符" tabindex="-1">4 逻辑运算符 <a class="header-anchor" href="#_4-逻辑运算符" aria-label="Permalink to &quot;4 逻辑运算符&quot;" loading="lazy">​</a></h2><p>常见的逻辑运算符有：&lt;、 &lt;=、&gt;=、&gt;、!=、==、&amp;&amp;、||、?:，和其他语言基本一致</p><h2 id="_5-运算符优先级" tabindex="-1">5 运算符优先级 <a class="header-anchor" href="#_5-运算符优先级" aria-label="Permalink to &quot;5 运算符优先级&quot;" loading="lazy">​</a></h2><p>运算符的优先级，从上往下依次降低</p>',15),n=[o];function r(_,c,d,p,s,h){return l(),t("div",null,n)}const b=a(e,[["render",r]]);export{u as __pageData,b as default};
