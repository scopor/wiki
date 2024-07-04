import{_ as t,c as s,o as i,a4 as d}from"./chunks/framework.D_7_7Osg.js";const g=JSON.parse('{"title":"数据类型","description":"C 语言原码，反码，补码，基本数据类型，变量，常量，类型转换，无符号数.","frontmatter":{"title":"数据类型","head":[["meta",{"property":"og:title","content":"数据类型"}],["meta",{"name":"description","content":"C 语言原码，反码，补码，基本数据类型，变量，常量，类型转换，无符号数."}],["meta",{"name":"keywords","content":"C 语言原码，反码，补码，基本数据类型，变量，常量，类型转换，无符号数."}],["meta",{"property":"og:description","content":"C 语言原码，反码，补码，基本数据类型，变量，常量，类型转换，无符号数."}]]},"headers":[],"relativePath":"c/数据类型.md","filePath":"c/数据类型.md"}'),a={name:"c/数据类型.md"},n=d(`<h2 id="_1-基本数据类型" tabindex="-1">1 基本数据类型 <a class="header-anchor" href="#_1-基本数据类型" aria-label="Permalink to &quot;1 基本数据类型&quot;">​</a></h2><h3 id="_1-1-存储单位" tabindex="-1">1.1 存储单位 <a class="header-anchor" href="#_1-1-存储单位" aria-label="Permalink to &quot;1.1 存储单位&quot;">​</a></h3><p>C 语言提供了多种数据类型，不同的数据类型占据的空间大小不同，一般表示数据大小的单位，我们通常使用字、字节来计算。</p><p>计算机底层使用 0 和 1 来存储数据，比如我们存储 10 进制的 4，其二进制格式为 100 ，此时占用 3 个 bit 位，而 8 个 bit 代表一个字节(B, byte),2 个 字节 等于 1 个字。</p><p>8 bit = 1 B，1024 B = 1KB， 1024 KB = 1 MB， 1024 MB = 1 GB，以此类推 TB, PB..., 但是大多数硬盘厂商生产硬盘时单位是按照 1000 的比例计算的。</p><h3 id="_1-2-原码" tabindex="-1">1.2 原码 <a class="header-anchor" href="#_1-2-原码" aria-label="Permalink to &quot;1.2 原码&quot;">​</a></h3><p>正数的原码就是其二进制本身，比如使用 4 个 bit 位存储正数 4， 其原码就是 0110，那么负数怎么办呢？ 可以使用第一个 bit 位表示符号，比如 0 代表正数，1 代表负数。</p><p>原码表示虽然简单，但是计算场景使用原码会导致出错，比如 1 + (-1) = 0001 + 1001 = 1010 显然结果不对。</p><h3 id="_1-3-反码" tabindex="-1">1.3 反码 <a class="header-anchor" href="#_1-3-反码" aria-label="Permalink to &quot;1.3 反码&quot;">​</a></h3><p>正数的反码还是其本身，负数的反码是在其原码的基础上，符号位不变，其余位取反，比如 -1 的原码是 1001， 那么其反码就会变成 1110，那么此时再来看上面的计算公式。</p><p>1 + (-1) = 0001 + 1110 = 1111，得出最终的反码，然后将反码转换成原码，就变成了 1000，代表 -0，问题来了，0 还区分正负？</p><h3 id="_1-4-补码" tabindex="-1">1.4 补码 <a class="header-anchor" href="#_1-4-补码" aria-label="Permalink to &quot;1.4 补码&quot;">​</a></h3><p>为了解决上述的问题，我们引入了补码的概念。</p><p>正数的补码还是其本身，负数的补码是在其原码的基础上，符号位不变，其余各位取反，最后再 +1，表示在其反码的基础上+1，我们再来计算上面的公式。</p><p>1 + (-1) = 0001 + (1110 + 0001) = 0000，因为我们使用的是 4 个 bit 位来计算，因此最后一个进位被丢弃，计算结果正确。</p><h3 id="_1-5-整数类型" tabindex="-1">1.5 整数类型 <a class="header-anchor" href="#_1-5-整数类型" aria-label="Permalink to &quot;1.5 整数类型&quot;">​</a></h3><p>整数就是不包含小数点的数据，比如 8， 88， 888 等，整数分为以下三种类型：</p><ul><li>short 占用 2 个字节，16 个 bit 位</li><li>int 占用 4 个字节， 32 个 bit 位</li><li>long 占用 8 个字节，64 个 bit 位</li></ul><h3 id="_1-6-浮点类型" tabindex="-1">1.6 浮点类型 <a class="header-anchor" href="#_1-6-浮点类型" aria-label="Permalink to &quot;1.6 浮点类型&quot;">​</a></h3><p>浮点类型一般用于保存小数，浮点类型将小数分为整数部分和小数部分，用一部分 bit 位表示整数部分，另一部分 bit 位表示小数部分，各自占多少 bit 位是浮动的，不固定，因此叫做浮点类型。浮点类型分为以下两种类型：</p><ul><li>float 单精度浮点，占用 4 个字节，32 个 bit 位</li><li>double 双精度浮点，占用 8 个字节， 64 个 bit 位</li></ul><h3 id="_1-7-字符类型" tabindex="-1">1.7 字符类型 <a class="header-anchor" href="#_1-7-字符类型" aria-label="Permalink to &quot;1.7 字符类型&quot;">​</a></h3><p>除了数字之外，每一个字符都可以使用字符类型来表示。char 占用 1 个字节，可表示所有的 ASCII 码，每一个数字其实就是一个 ASCII 码表中的一个字符。</p><h4 id="控制字符" tabindex="-1">控制字符 <a class="header-anchor" href="#控制字符" aria-label="Permalink to &quot;控制字符&quot;">​</a></h4><table tabindex="0"><thead><tr><th>十进制</th><th>字符</th><th>CTRL</th><th>代码</th><th>字符解释</th></tr></thead><tbody><tr><td>0</td><td>NUL</td><td>^@</td><td><code>\\x00</code></td><td>空字符</td></tr><tr><td>1</td><td>SOH</td><td>^A</td><td><code>\\x01</code></td><td>标题开始</td></tr><tr><td>2</td><td>STX</td><td>^B</td><td><code>\\x02</code></td><td>正文开始</td></tr><tr><td>3</td><td>ETX</td><td>^C</td><td><code>\\x03</code></td><td>正文结束</td></tr><tr><td>4</td><td>EOT</td><td>^D</td><td><code>\\x04</code></td><td>传输结束</td></tr><tr><td>5</td><td>ENQ</td><td>^E</td><td><code>\\x05</code></td><td>询问</td></tr><tr><td>6</td><td>ACK</td><td>^F</td><td><code>\\x06</code></td><td>确认</td></tr><tr><td>7</td><td>BEL</td><td>^G</td><td><code>\\x07</code></td><td>响铃</td></tr><tr><td>8</td><td>BS</td><td>^H</td><td><code>\\x08</code></td><td>退格</td></tr><tr><td>9</td><td>HT</td><td>^I</td><td><code>\\x09</code></td><td>水平制表符</td></tr><tr><td>10</td><td>LF</td><td>^J</td><td><code>\\x0A</code></td><td>换行</td></tr><tr><td>11</td><td>VT</td><td>^K</td><td><code>\\x0B</code></td><td>垂直制表符</td></tr><tr><td>12</td><td>FF</td><td>^L</td><td><code>\\x0C</code></td><td>换页</td></tr><tr><td>13</td><td>CR</td><td>^M</td><td><code>\\x0D</code></td><td>回车</td></tr><tr><td>14</td><td>SO</td><td>^N</td><td><code>\\x0E</code></td><td>移动到活动的输出</td></tr><tr><td>15</td><td>SI</td><td>^O</td><td><code>\\x0F</code></td><td>移动到活动输入</td></tr><tr><td>16</td><td>DLE</td><td>^P</td><td><code>\\x10</code></td><td>数据链路转义</td></tr><tr><td>17</td><td>DC1</td><td>^Q</td><td><code>\\x11</code></td><td>设备控制1</td></tr><tr><td>18</td><td>DC2</td><td>^R</td><td><code>\\x12</code></td><td>设备控制2</td></tr><tr><td>19</td><td>DC3</td><td>^S</td><td><code>\\x13</code></td><td>设备控制3</td></tr><tr><td>20</td><td>DC4</td><td>^T</td><td><code>\\x14</code></td><td>设备控制4</td></tr><tr><td>21</td><td>NAK</td><td>^U</td><td><code>\\x15</code></td><td>否定应答</td></tr><tr><td>22</td><td>SYN</td><td>^V</td><td><code>\\x16</code></td><td>同步空闲</td></tr><tr><td>23</td><td>ETB</td><td>^W</td><td><code>\\x17</code></td><td>结束传输块</td></tr><tr><td>24</td><td>CAN</td><td>^X</td><td><code>\\x18</code></td><td>取消</td></tr><tr><td>25</td><td>EM</td><td>^Y</td><td><code>\\x19</code></td><td>结束介质访问</td></tr><tr><td>26</td><td>SUB</td><td>^Z</td><td><code>\\x1A</code></td><td>替代</td></tr><tr><td>27</td><td>ESC</td><td><code>^[</code></td><td><code>\\x1B</code></td><td>转义</td></tr><tr><td>28</td><td>FS</td><td>^\\</td><td><code>\\x1C</code></td><td>文件分隔符</td></tr><tr><td>29</td><td>GS</td><td>^]</td><td><code>\\x1D</code></td><td>组分隔符</td></tr><tr><td>30</td><td>RS</td><td>^^</td><td><code>\\x1E</code></td><td>记录分隔符</td></tr><tr><td>31</td><td>US</td><td>^_</td><td><code>\\x1F</code></td><td>单元分隔符</td></tr></tbody></table><h4 id="打印字符" tabindex="-1">打印字符 <a class="header-anchor" href="#打印字符" aria-label="Permalink to &quot;打印字符&quot;">​</a></h4><p>数字 32–126 分配给了能在键盘上找到的字符，当您查看或打印文档时就会出现。数字 127 代表 DELETE 命令。</p><table tabindex="0"><thead><tr><th>十进制</th><th>字符</th><th>CTRL</th><th>代码</th><th>字符解释</th></tr></thead><tbody><tr><td>32</td><td></td><td></td><td><code>\\x20</code></td><td>空格</td></tr><tr><td>33</td><td>!</td><td>^!</td><td><code>\\x21</code></td><td>感叹号</td></tr><tr><td>34</td><td>&quot;</td><td>^&quot;</td><td><code>\\x22</code></td><td>双引号</td></tr><tr><td>35</td><td>#</td><td>^#</td><td><code>\\x23</code></td><td>井号</td></tr><tr><td>36</td><td>$</td><td>^$</td><td><code>\\x24</code></td><td>美元符号</td></tr><tr><td>37</td><td>%</td><td>^%</td><td><code>\\x25</code></td><td>百分号</td></tr><tr><td>38</td><td>&amp;</td><td>^&amp;</td><td><code>\\x26</code></td><td>与</td></tr><tr><td>39</td><td>&#39;</td><td>^&#39;</td><td><code>\\x27</code></td><td>单引号</td></tr><tr><td>40</td><td>(</td><td>^(</td><td><code>\\x28</code></td><td>左圆括号</td></tr><tr><td>41</td><td>)</td><td>^)</td><td><code>\\x29</code></td><td>右圆括号</td></tr><tr><td>42</td><td>*</td><td>^*</td><td><code>\\x2A</code></td><td>星号</td></tr><tr><td>43</td><td>+</td><td>^+</td><td><code>\\x2B</code></td><td>加号</td></tr><tr><td>44</td><td>,</td><td>^,</td><td><code>\\x2C</code></td><td>逗号</td></tr><tr><td>45</td><td>-</td><td>^-</td><td><code>\\x2D</code></td><td>减号</td></tr><tr><td>46</td><td>.</td><td>^.</td><td><code>\\x2E</code></td><td>句点</td></tr><tr><td>47</td><td>/</td><td>^/</td><td><code>\\x2F</code></td><td>斜杠</td></tr><tr><td>48-57</td><td>0-9</td><td></td><td></td><td>数字0-9</td></tr><tr><td>58</td><td>:</td><td>^:</td><td><code>\\x3A</code></td><td>冒号</td></tr><tr><td>59</td><td>;</td><td>^;</td><td><code>\\x3B</code></td><td>分号</td></tr><tr><td>60</td><td>&lt;</td><td>^&lt;</td><td><code>\\x3C</code></td><td>小于号</td></tr><tr><td>61</td><td>=</td><td>^=</td><td><code>\\x3D</code></td><td>等号</td></tr><tr><td>62</td><td>&gt;</td><td>^&gt;</td><td><code>\\x3E</code></td><td>大于号</td></tr><tr><td>63</td><td>?</td><td>^?</td><td><code>\\x3F</code></td><td>问号</td></tr><tr><td>64</td><td>@</td><td>^@</td><td><code>\\x40</code></td><td>电子邮件符号</td></tr><tr><td>65-90</td><td>A-Z</td><td></td><td></td><td>大写字母A-Z</td></tr><tr><td>91</td><td><code>[</code></td><td><code>^[</code></td><td><code>\\x5B</code></td><td>左方括号</td></tr><tr><td>92</td><td>\\</td><td>^\\</td><td><code>\\x5C</code></td><td>反斜线</td></tr><tr><td>93</td><td>]</td><td>^]</td><td><code>\\x5D</code></td><td>右方括号</td></tr><tr><td>94</td><td>^</td><td>^^</td><td><code>\\x5E</code></td><td>插入符号</td></tr><tr><td>95</td><td>_</td><td>^_</td><td><code>\\x5F</code></td><td>下划线</td></tr><tr><td>96</td><td>\`</td><td>^\`</td><td><code>\\x60</code></td><td>反引号</td></tr><tr><td>97-122</td><td>a-z</td><td></td><td></td><td>小写字母a-z</td></tr><tr><td>123</td><td>{</td><td>^{</td><td><code>\\x7B</code></td><td>左花括号</td></tr><tr><td>124</td><td>|</td><td>^|</td><td><code>\\x7C</code></td><td>竖线</td></tr><tr><td>125</td><td>}</td><td>^}</td><td><code>\\x7D</code></td><td>右花括号</td></tr><tr><td>126</td><td>~</td><td>^~</td><td><code>\\x7E</code></td><td>波浪号</td></tr><tr><td>127</td><td>DEL</td><td>^?</td><td><code>\\x7F</code></td><td>删除符号</td></tr></tbody></table><p>表中只有运算符号，数字，大小写字母等，不存在中文和其他语言的字符，也没有中文的标点符号。</p><h4 id="转义ascii字符" tabindex="-1">转义ASCII字符 <a class="header-anchor" href="#转义ascii字符" aria-label="Permalink to &quot;转义ASCII字符&quot;">​</a></h4><p>某些无法显示的字符如换行、退格、换页、响铃等需要使用转义字符来表示。以下是需要进行转义的ASCII字符列表，包含转义字符、含义和对应的ASCII码值：</p><table tabindex="0"><thead><tr><th>转义序列</th><th>含义</th><th>十进制值</th><th>ASCII码值</th></tr></thead><tbody><tr><td><code>\\0</code></td><td>空字符</td><td>0</td><td>0</td></tr><tr><td><code>\\a</code></td><td>响铃符</td><td>7</td><td>7</td></tr><tr><td><code>\\b</code></td><td>退格符</td><td>8</td><td>8</td></tr><tr><td><code>\\t</code></td><td>制表符</td><td>9</td><td>9</td></tr><tr><td><code>\\n</code></td><td>换行符</td><td>10</td><td>10</td></tr><tr><td><code>\\v</code></td><td>垂直制表符</td><td>11</td><td>11</td></tr><tr><td><code>\\f</code></td><td>换页符</td><td>12</td><td>12</td></tr><tr><td><code>\\r</code></td><td>回车符</td><td>13</td><td>13</td></tr><tr><td><code>\\&quot;</code></td><td>双引号</td><td>34</td><td>34</td></tr><tr><td><code>\\&#39;</code></td><td>单引号</td><td>39</td><td>39</td></tr><tr><td><code>\\?</code></td><td>问号</td><td>63</td><td>63</td></tr><tr><td><code>\\\\</code></td><td>反斜杠</td><td>92</td><td>92</td></tr><tr><td><code>\\nnn</code></td><td>八进制数</td><td>可变</td><td>可变</td></tr><tr><td><code>\\xhh</code></td><td>十六进制数</td><td>可变</td><td>可变</td></tr></tbody></table><p>转义序列 \\nnn 和 \\xhh 的十进制值是可变的，取决于所指定的八进制数或十六进制数。ASCII码值是转义序列对应的ASCII字符的码值。</p><h2 id="_2-变量" tabindex="-1">2 变量 <a class="header-anchor" href="#_2-变量" aria-label="Permalink to &quot;2 变量&quot;">​</a></h2><p>以上的数据类型如何使用，这就用到了变量，变量可以存储不同的数据类型，使用变量必须先要声明，声明时需要指定要存储的数据类型</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">变量类型 变量名称 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 初始值;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 初始值可以不指定</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>变量的名称需要符合以下规则：</p><ul><li>不可重复使用其他已经定义过的变量名称</li><li>智能包含英文字母、数字、下划线、严格区分大小写</li><li>不能以数字开头</li><li>不能是关键字</li></ul><p>建议使用有意义的英文单词，不要使用拼音，风格符合驼峰格式或者下划线连接格式进行命名。</p><p>现在我们来计算两个数值相加，程序如下</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c is </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>可以能看到打印出的结果 20，这里需要使用到 printf 函数进行格式化 %d 输出 c 的值，直接打印 c 是看不到值的，那么除了数字意外的其他类型的数据如何打印呢？可以参考以下打印格式化参数：</p><table tabindex="0"><thead><tr><th>格式化控制符</th><th>说明</th></tr></thead><tbody><tr><td><code>%hd</code>、<code>%d</code>、<code>%ld</code></td><td>用于打印有符号、 十进制的short、int、long整数</td></tr><tr><td><code>%hu</code>、<code>%u</code>、<code>%lu</code></td><td>用于打印无符号、 十进制的short、int、long整数</td></tr><tr><td><code>%ho</code>、<code>%o</code>、<code>%lo</code></td><td>用于打印无符号、不带前缀、八进制的short、int、long整数</td></tr><tr><td><code>%#ho</code>、<code>%#o</code>、<code>%#lo</code></td><td>用于打印无符号、 带前缀、八进制的short、int、long整数</td></tr><tr><td><code>%hx</code>、<code>%x</code>、<code>%lx</code></td><td>用于打印无符号、不带前缀、十六进制的short、int、long整数</td></tr><tr><td><code>%hX</code>、<code>%X</code>、<code>%lX</code></td><td>用于打印无符号、不带前缀、十六进制的short、int、long整数，X大写</td></tr><tr><td><code>%#hx</code>、<code>%#x</code>、<code>%#lx</code></td><td>用于打印无符号、 带前缀、十六进制的short、int、long整数</td></tr><tr><td><code>%#hX</code>、<code>%#X</code>、<code>%#lX</code></td><td>用于打印无符号、 带前缀、十六进制的short、int、long整数，X大写</td></tr><tr><td><code>%e</code>、<code>%le</code></td><td>用科学计数法打印浮点数float、double，e小写</td></tr><tr><td><code>%E</code>、<code>%lE</code></td><td>用科学计数法打印浮点数float、double，e大写</td></tr><tr><td><code>%f</code>、<code>%lf</code></td><td>用十进制表示法打印浮点数float、double</td></tr><tr><td><code>%g</code>、<code>%lg</code>、</td><td>用于打印浮点数，并根据具体情况选择以定点表示法或科学计数法来显示。打印时会自动切换为最短的方式，避免不必要的零和小数点。当指数小于-4或大于等于精度（默认为6）时，会使用科学计数法。如果浮点数的小数部分全为0，则会省略小数部分。</td></tr><tr><td><code>%G</code>、<code>%lG</code></td><td>同上，科学计数法显示时，E大写</td></tr><tr><td><code>%.xG</code>、<code>%.xlG</code></td><td>同上，.x 中的 x 表示要自定义的保留精度位数</td></tr><tr><td><code>%s</code></td><td>用于打印字符串</td></tr><tr><td><code>%c</code></td><td>用于打印单个字符</td></tr><tr><td><code>%%</code></td><td>用于打印百分号</td></tr></tbody></table><p>变量定义字符类型</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // a: 97</span></span></code></pre></div><h2 id="_3-常量" tabindex="-1">3 常量 <a class="header-anchor" href="#_3-常量" aria-label="Permalink to &quot;3 常量&quot;">​</a></h2><p>定义常量和变量基本类似，多了一个 const 关键字，格式如下</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PI </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_4-无符号数" tabindex="-1">4 无符号数 <a class="header-anchor" href="#_4-无符号数" aria-label="Permalink to &quot;4 无符号数&quot;">​</a></h2><p>计算机底层使用二进制保存数据，第一位是符号位，如果不考虑符号位，那么所有的数都是按照正数表示，比如 char 的范围从原来的 -128 ~ 127 变成了 0 ~ 255。</p><p>表示无符号的数据，可以使用无符号关键字 <code>unsigned</code></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    unsigned</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 191</span></span></code></pre></div><p>why? 我们首先明确下信：char 占用 1 个字节，也就是 8 个 bit 位，那么 -65 的补码形式是 原码(11000001) -&gt; 反码(10111110) --&gt; 补码(10111111)，由于无符号关键字加持，导致现在无符号位，那么现在就是一个整数，计算后得出 10111111 = 128 + 32 + 16 + 8 + 4 + 2 + 1 = 191。</p><h2 id="_5-类型转换" tabindex="-1">5 类型转换 <a class="header-anchor" href="#_5-类型转换" aria-label="Permalink to &quot;5 类型转换&quot;">​</a></h2><p>类型转换：一种类型的数据可以转换为其他类型的数据，类型转换分为自动类型转换和强制类型转换。</p><h3 id="_5-1-自动类型转换" tabindex="-1">5.1 自动类型转换 <a class="header-anchor" href="#_5-1-自动类型转换" aria-label="Permalink to &quot;5.1 自动类型转换&quot;">​</a></h3><p>自动类型转换就是编译器隐式地进行的数据类型转换，比如 char 转换成 int， int 转换成 long</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">short</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span></code></pre></div><p>也可以把 int 转换成 char，我们来看看打印结果</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -128</span></span></code></pre></div><p>why? 还是根据上面的无符号数的推断方式我们来逐步梳理下。</p><p>int 类型占用 4 个字节，32 个 bit 位，那么 128 的补码就是 00000000 00000000 00000000 10000000，此时将 int 转换成 char， 那么 char 只占用 1 个字节即 8 个 bit 位，发生截断，导致新的 char 类型的变量 b 的补码变为了 10000000, 计算得出：-(2^7) = -128。</p><p>整数转换成小数，小数位补 0 即可</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 100.000000</span></span></code></pre></div><p>小数变整数，发生截断，小数点及后面的小数直接被丢弃</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3</span></span></code></pre></div><p>除了赋值操作会发生自动类型转换，运算也会发生转换</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1.500000</span></span></code></pre></div><p>那么转换的规则是怎样的？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>char  ---&gt;</span></span>
<span class="line"><span>          |---&gt; int ---&gt; unsigned int ---&gt; long ---&gt; double &lt;--- float</span></span>
<span class="line"><span>short ---&gt;</span></span></code></pre></div><ul><li>char 和 short 参与计算时，先转换成 int 后再计算</li><li>浮点类型默认按照双精度进行计算，float 会首先转换成 double 后再计算</li><li>低优先级和高优先级混合运算，会统一转换成高优先级运算</li></ul><h3 id="_5-2-强制类型转换" tabindex="-1">5.2 强制类型转换 <a class="header-anchor" href="#_5-2-强制类型转换" aria-label="Permalink to &quot;5.2 强制类型转换&quot;">​</a></h3><p>强制类型转换，即手动转换，转换格式如下</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(强制转换类型) 变量、常量或表达式;</span></span></code></pre></div><p>比如我们将小数强制转换成整数</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a is </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a is 3</span></span></code></pre></div><p>在某些计算场景下，强制转换会显得很有用</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 先计算出结果 2，再转换类型。其实可以看做是 (double) (a / b)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 先将 a 转换成 double, 然后 double a 和 int b 运算，int b 会被转换成 double b </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, d: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c, d);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// c: 2.000000, d: 2.5000000</span></span></code></pre></div>`,78),h=[n];function e(l,p,k,r,c,o){return i(),s("div",null,h)}const y=t(a,[["render",e]]);export{g as __pageData,y as default};
