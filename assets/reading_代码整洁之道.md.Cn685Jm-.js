import{_ as i,D as a,c as e,I as t,a4 as o,o as r}from"./chunks/framework.DVgqcZox.js";const g=JSON.parse('{"title":"代码整洁之道学习笔记","description":"代码整洁之道,有意的命名,函数设计原则","frontmatter":{"title":"代码整洁之道学习笔记","head":[["meta",{"property":"og:title","content":"代码整洁之道学习笔记"}],["meta",{"name":"description","content":"代码整洁之道,有意的命名,函数设计原则"}],["meta",{"name":"keywords","content":"代码整洁之道,有意的命名,函数设计原则"}],["meta",{"property":"og:description","content":"代码整洁之道,有意的命名,函数设计原则"}],["meta",{"property":"og:url","content":"https://sooloe.com/reading/%E4%BB%A3%E7%A0%81%E6%95%B4%E6%B4%81%E4%B9%8B%E9%81%93"}],["link",{"rel":"canonical","href":"https://sooloe.com/reading/%E4%BB%A3%E7%A0%81%E6%95%B4%E6%B4%81%E4%B9%8B%E9%81%93"}]]},"headers":[],"relativePath":"reading/代码整洁之道.md","filePath":"reading/代码整洁之道.md"}'),n={name:"reading/代码整洁之道.md"},c=o('<h1 id="代码整洁之道学习笔记" tabindex="-1">代码整洁之道学习笔记 <a class="header-anchor" href="#代码整洁之道学习笔记" aria-label="Permalink to &quot;代码整洁之道学习笔记&quot;">​</a></h1><h2 id="童子军军规" tabindex="-1">童子军军规 <a class="header-anchor" href="#童子军军规" aria-label="Permalink to &quot;童子军军规&quot;">​</a></h2><ul><li>程序员应该积极阻止代码腐坏，让营地比你来时更干净。 <ul><li>程序员应该始终尽可能保持代码整洁，因为这有助于减少读写代码的时间，提高代码的效率，并且能够减少代码的错误率。</li><li>清理代码不一定需要花费大量精力，可以通过改变变量名，拆分函数，消除重复代码，清理嵌套 if 语句等简单操作来实现。</li></ul></li></ul><h2 id="有意义的命名" tabindex="-1">有意义的命名 <a class="header-anchor" href="#有意义的命名" aria-label="Permalink to &quot;有意义的命名&quot;">​</a></h2><ul><li>名副其实：命名应该能告诉你，它为什么会存在，它做什么事，该怎么用，例如，一个函数名为calculateArea，这个名称告诉你它的作用是计算面积。</li><li>避免误导：避免留下掩盖代码本意的错误线索，例如，不要给一个函数取名为getNumber，如果它实际上是获取字符串。</li><li>做有意义的区分：使用区分度足够大的命名，避免使用相同的名称，例如，ProductInfo 、ProductData 和 Product 没区别。</li><li>使用读得出来的名称：使用单词而不是无意义的缩写来命名，例如，不要给一个函数取名为calcArea，而应该使用calculateArea。</li><li>使用可搜索的名称：广泛使用的变量或常量应该赋予方便搜索的长名称，例如，一个常用的变量名可以取名为numberOfItemsInCart，而不是numItemsInCart。</li><li>避免使用编码：不要使用匈牙利语标记法、成员前缀和接口前导字母 I，例如，不要给一个函数取名为getNmbr，而应该使用getNumber。</li><li>避免思维映射：不应当让读者在脑中把你的名称翻译为他们熟知的名称，例如，不要给一个函数取名为getData，如果它实际上是获取字符串，而不是数据。</li><li>类名和对象名应该是名词和名词短语，方法名应该是动词或动词短语：例如，一个类可以取名为Car，而一个方法可以取名为drive。</li><li>别扮可爱：不要再代码中使用俗语或俚语，例如，不要给一个函数取名为doTheThing，而应该使用executeTask。</li><li>每个概念对应一个词：给每个抽象概念选择一个词，并且一以贯之，例如，不要给一个函数取名为getInfoAndData，而应该使用getInformation和getData。</li><li>别用双关语：避免将同一单词用于不同目的，例如，不要给一个函数取名为set，如果它实际上是获取数据，而不是设置数据。</li><li>添加有意义的语境：通过良好命名的类、函数或名称空间来放置名称，给读者提供语境，例如，可以将一组函数放在一个名为StringUtils的名称空间中，以便提供语境。</li><li>不要添加没用的语境：不要给所有的类都加上应用前缀，只要短名称足够清楚就比长名称要好，例如，不要给所有的类都加上MyApp的前缀，短名称足够清楚Car比MyAppCar要好。</li></ul><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><ul><li>尽可能短小：20行以内最佳。</li><li>职责单一：只做一件事情，只做一件事的函数无法被合理地切分为多个区段。</li><li>每个函一个抽象层级：代码自顶向下阅读，让代码读起来像是一系列自顶向下的TO起头段落是保持抽象层级协调一致的有效技巧。</li><li>switch语句：天生要做 N 件事儿，使用多态改造。</li><li>使用描述性的函数名称：长而具有描述性的名称，要比短而令人费解的名称好。长而具有描述性的名称，要比描述性的长注释好。</li><li>函数参数不宜过多：过多会造成函数难以理解，测试覆盖所有组合让人生畏。在讨论函数的单个参数时，作者提到了三种典型的用途。</li><li>一元函数的普遍形式： <ul><li>首先是对参数提出问题，函数会检查参数对应的数据是否存在；</li><li>第二种是对参数进行操作，并将其转换为其他内容，然后输出；</li><li>第三种是事件，它仅有输入参数而没有输出参数，函数会更改系统状态，而不是返回任何值；</li><li>特殊情况，即函数要对输入参数进行转换操作。在这种情况下，应将转换结果作为函数的返回值，而不是输出参数。</li></ul></li><li>标识参数：即 Boolean 类型参数。向函数传入布尔值简直就是骇人听闻的做法，这代表着函数至少要做两件事儿，违反了职责单一原则。</li><li>二元函数：有时候两个参数正好，有时候应该尽量利用一些机制将其转换成一元函数，例如将函数变成其中一个参数类的函数，或将其中的某个参数变成当前类的成员变量，或者分离出新的类，构造器中采用其中某个参数参数，包含当前函数。</li><li>三元函数：比二元更难懂，排序、琢磨、忽略的问题都会加倍体现。</li><li>参数对象；函数看来需要两个、三个或三个以上参数，就说明其中一些参数应该封装为类。</li><li>函数命名：函数名应该能够较好地解释函数的意图，提高代码的可读性。函数名和参数应当形成一种动词/名词的对形式。</li><li>函数副作用：参数多数会被看作函数的输入，但在某些情况下会被用作输出，应该避免此类副作用。</li><li>分割指令与询问：函数要么做什么事，要么回答什么事，但二者不可得兼。函数应该修改某对象的状态，或是返回该对象的有关信息。两样都干常会导致混乱。</li><li>使用异常替代返回错误码：抽离Try/Catch代码块；使用异常替代错误码，新异常就可以从异常类派生出来，无需重新编译或重新部署。</li><li>别重复自己：重复可能是软件中一切邪恶的根源。许多原则与实践规则都是为控制与消除重复而创建。</li></ul><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><p>注释是一种非常有用的工具，可以帮助读者理解代码的意图和功能。</p><p>注释也应该谨慎使用，避免滥用或冗长。</p><p>正确使用注释可以使代码变得更加清晰和易于理解。</p><p>注释不能美化糟糕的代码, 尽量使用代码本身来阐述。</p><h3 id="好的注释" tabindex="-1">好的注释 <a class="header-anchor" href="#好的注释" aria-label="Permalink to &quot;好的注释&quot;">​</a></h3><ul><li>法律信息：版权及著作权声明</li><li>提供信息：有时需要提供一些有用的信息，更好的方式推荐利用函数名称传达信息</li><li>对意图的解释：这样改动的特意说明</li><li>阐释：对某些晦涩难明的参数挥着返回值的翻译</li><li>警示：警告其他人员该写法的原因和不这么做会出现的某种后果</li><li>TODO：将做未做的部分</li><li>放大：用来放大某种看来不合理之处的重要性</li><li>Javadoc：标准库的良好描述信息</li></ul><h3 id="坏的注释" tabindex="-1">坏的注释 <a class="header-anchor" href="#坏的注释" aria-label="Permalink to &quot;坏的注释&quot;">​</a></h3><ul><li>喃喃自语：只是因为你觉得或者过程需要的，都是无谓之举</li><li>多余：读注释比读代码还长</li><li>误导性注释：和代码表达的不一致</li><li>循规式注释：不是每个函数都需要注释</li><li>日志式注释：这条看工作环境了，有些公司这不让打印，那不让打印，排查问题苦不堪言</li><li>废话注释：用整理代码的决心替代创造废话的冲动</li><li>能用函数或者变量时就别用注释</li><li>括号后面的注释：深度嵌套结构的长函数中比较常见，应提炼多个简短的函数进行组装</li><li>署名：源代码控制系统足够强大，大可不必</li><li>注释掉的代码：确认不用应该立即删除</li><li>HTML注释：不利于阅读</li><li>非本地信息：注释应该在距离被注释内容定义的地方，比如全局变量，不应该在使用他的地方注释而应该在定义时</li><li>信息过多：不要在主食中添加历史性话题或者无关的描述</li><li>不明显的联系：注释和大妈之间的联系应该显而易见，注释本身如果还需要解释，那就太糟糕了</li><li>函数头：短函数不需要太多描述</li><li>非公共代码中的Javadoc：不做公共用途，无需编写Javadoc</li></ul><p>未完待续...</p><hr>',18);function d(s,h,u,p,m,_){const l=a("GoogleAdsense");return r(),e("div",null,[c,t(l)])}const b=i(n,[["render",d]]);export{g as __pageData,b as default};
