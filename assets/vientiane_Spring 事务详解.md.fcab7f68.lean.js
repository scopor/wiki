import{_ as a,c as s,o as n,R as o}from"./chunks/framework.5dd80646.js";const C=JSON.parse('{"title":"Spring 事务详解","description":"最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了 `@Transactional` 注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。","frontmatter":{"title":"Spring 事务详解","head":[["meta",{"property":"og:title","content":"Spring 事务详解"}],["meta",{"name":"description","content":"最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了 `@Transactional` 注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。"}],["meta",{"name":"keywords","content":"Spring事务、传播机制、隔离级别、@Transactional失效"}],["meta",{"property":"og:description","content":"最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了 `@Transactional` 注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/Spring%20%E4%BA%8B%E5%8A%A1%E8%AF%A6%E8%A7%A3"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/Spring%20%E4%BA%8B%E5%8A%A1%E8%AF%A6%E8%A7%A3"}]]},"headers":[],"relativePath":"vientiane/Spring 事务详解.md"}'),l={name:"vientiane/Spring 事务详解.md"},p=o("",61),e=[p];function t(r,c,i,A,D,y){return n(),s("div",null,e)}const F=a(l,[["render",t]]);export{C as __pageData,F as default};
