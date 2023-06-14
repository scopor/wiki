import{_ as l,D as e,o as i,c as t,G as o,O as r}from"./chunks/framework.95b9d657.js";const b=JSON.parse('{"title":"重构：改善既有代码设计","description":"重构：不改变代码行为的情况下，对代码做出修改。重构时机,代码坏味道,数据泥团,冗余和重复,局部膨胀,耦合结构不良","frontmatter":{"title":"重构：改善既有代码设计","head":[["meta",{"property":"og:title","content":"重构：改善既有代码设计"}],["meta",{"name":"description","content":"重构：不改变代码行为的情况下，对代码做出修改。重构时机,代码坏味道,数据泥团,冗余和重复,局部膨胀,耦合结构不良"}],["meta",{"name":"keywords","content":"重构,改善既有代码设计,重构时机,代码坏味道,数据泥团,冗余和重复,局部膨胀,耦合结构不良"}],["meta",{"property":"og:description","content":"重构：不改变代码行为的情况下，对代码做出修改。重构时机,代码坏味道,数据泥团,冗余和重复,局部膨胀,耦合结构不良"}],["meta",{"property":"og:url","content":"https://sooloe.com/reading/%E9%87%8D%E6%9E%84"}],["link",{"rel":"canonical","href":"https://sooloe.com/reading/%E9%87%8D%E6%9E%84"}]]},"headers":[],"relativePath":"reading/重构.md","filePath":"reading/重构.md"}'),n={name:"reading/重构.md"},d=r('<h1 id="「重构-改善既有代码设计」学习笔记" tabindex="-1">「重构：改善既有代码设计」学习笔记 <a class="header-anchor" href="#「重构-改善既有代码设计」学习笔记" aria-label="Permalink to &quot;「重构：改善既有代码设计」学习笔记&quot;" loading="lazy">​</a></h1><h2 id="重构" tabindex="-1">重构 <a class="header-anchor" href="#重构" aria-label="Permalink to &quot;重构&quot;" loading="lazy">​</a></h2><p>不改变代码行为的情况下，对代码做出修改，改进程序的内部结构</p><h2 id="重构时机" tabindex="-1">重构时机 <a class="header-anchor" href="#重构时机" aria-label="Permalink to &quot;重构时机&quot;" loading="lazy">​</a></h2><ul><li>时机：事不过三；添加新功能时；修补错误时；复核代码时</li><li>非时机：代码太混乱，与其重构不如重写；最后一分钟，deadline；工作量显著超标；没有更好的思路时</li></ul><h2 id="重构设计四原则" tabindex="-1">重构设计四原则 <a class="header-anchor" href="#重构设计四原则" aria-label="Permalink to &quot;重构设计四原则&quot;" loading="lazy">​</a></h2><ul><li>通过所有测试：软件系统对外部需求被正确地完成，包括功能性需求和非功能性需求，并通过了客户验收的标准</li><li>尽可能消除重复：让软件走向高内聚，低耦合，达到良好正交性的过程，并不是所有的重复都可以消除，这条原则被描述为最小化重复，而不是消除重复</li><li>尽可能清晰表达：漂亮的代码如同优美的散文，从不隐藏设计者的意图，恰如其分的抽象，直截了当的控制，代码被阅读的次数远远大于其修改的次数</li><li>更少的代码元素：尽可能的降低设计的复杂度，保持简单</li></ul><h2 id="代码坏味道层次" tabindex="-1">代码坏味道层次 <a class="header-anchor" href="#代码坏味道层次" aria-label="Permalink to &quot;代码坏味道层次&quot;" loading="lazy">​</a></h2><ul><li>直观：一眼过去就可以看到问题，比如魔鬼数字，函数或类过长，圈复杂度高，函数或变量命名不规范</li><li>微观：需要仔细检查才能发现的问题，比如类字段定义不合理，函数功能不单一，变量作用域过长等问题</li><li>宏观：代码架构上的整体问题，比如类的职责不惮以，上帝类，分层不清楚，上下文混乱等问题</li></ul><h2 id="代码坏味道-冗余和重复" tabindex="-1">代码坏味道：冗余和重复 <a class="header-anchor" href="#代码坏味道-冗余和重复" aria-label="Permalink to &quot;代码坏味道：冗余和重复&quot;" loading="lazy">​</a></h2><ul><li>重复 <ul><li>同一个类，两个函数有重复，提取公共代码</li><li>互为兄弟的子类中有重复，提取公共代码，pull至父类</li><li>毫不相干的类有重复，提取到工具类中</li></ul></li><li>过多的注释，考虑提取方法，命名通俗易懂的函数名</li><li>夸夸其谈未来性</li></ul><h2 id="代码坏味道-局部膨胀" tabindex="-1">代码坏味道：局部膨胀 <a class="header-anchor" href="#代码坏味道-局部膨胀" aria-label="Permalink to &quot;代码坏味道：局部膨胀&quot;" loading="lazy">​</a></h2><ul><li>过长参数列表 <ul><li>一个参数通过另一个参数查到，考虑使用查询函数取代参数</li><li>多个参数属于同一个数据结构时，封装成对象</li><li>多个参数有关联，总是同时使用，封装成对象</li><li>某个参数是用来区分函数行为的，可以考虑移除</li><li>多个函数有相同的参数，可以将多个函数组合成类</li></ul></li></ul><h2 id="代码坏味道-耦合结构不良" tabindex="-1">代码坏味道：耦合结构不良 <a class="header-anchor" href="#代码坏味道-耦合结构不良" aria-label="Permalink to &quot;代码坏味道：耦合结构不良&quot;" loading="lazy">​</a></h2><ul><li>发散式变化：模块功能过多</li><li>霰弹式修改：遇到某种变化，多个不同的模块需要修改</li><li>switch惊悚现身：写出只做一件事的 switch 语句也很难， switch 天生要做 N 件 事</li></ul><hr><p><img src="https://cdn.jsdelivr.net/gh/scopor/photos@main/tech/%E9%87%8D%E6%9E%84.png" alt="重构" data-fancybox="gallery"></p><hr><p>​<br><a href="https://book.douban.com/subject/4262627/" loading="lazy" target="_blank" rel="noreferrer">[1]</a>: 重构: 改善既有代码设计， Martin Fowler.</p><hr>',20);function h(s,c,u,p,m,_){const a=e("GoogleAdsense");return i(),t("div",null,[d,o(a)])}const f=l(n,[["render",h]]);export{b as __pageData,f as default};
