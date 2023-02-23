import{_ as a,c as s,o as n,e as l}from"./app.244e85e4.js";const C=JSON.parse('{"title":"Spring 事务详解","description":"最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了`@Transactional`注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。","frontmatter":{"title":"Spring 事务详解","head":[["meta",{"property":"og:title","content":"Spring 事务详解"}],["meta",{"name":"description","content":"最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了`@Transactional`注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。"}],["meta",{"name":"keywords","content":"Spring事务、传播机制、隔离级别、@Transactional失效"}],["meta",{"property":"og:description","content":"最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了`@Transactional`注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。"}],["meta",{"property":"og:url","content":"https://sanoon.me/vientiane/Spring%20%E4%BA%8B%E5%8A%A1%E8%AF%A6%E8%A7%A3"}],["link",{"rel":"canonical","href":"https://sanoon.me/vientiane/Spring%20%E4%BA%8B%E5%8A%A1%E8%AF%A6%E8%A7%A3"}]]},"headers":[{"level":2,"title":"Spring 对事务的支持","slug":"spring-对事务的支持","link":"#spring-对事务的支持","children":[{"level":3,"title":"编程式事务","slug":"编程式事务","link":"#编程式事务","children":[]},{"level":3,"title":"声明式事务","slug":"声明式事务","link":"#声明式事务","children":[]}]},{"level":2,"title":"@Transactional  注解的属性有哪些","slug":"transactional-注解的属性有哪些","link":"#transactional-注解的属性有哪些","children":[]},{"level":2,"title":"事务传播行为","slug":"事务传播行为","link":"#事务传播行为","children":[{"level":3,"title":"Propagation.REQUIRED","slug":"propagation-required","link":"#propagation-required","children":[]},{"level":3,"title":"Propagation.SUPPORTS","slug":"propagation-supports","link":"#propagation-supports","children":[]},{"level":3,"title":"Propagation.MANDATORY","slug":"propagation-mandatory","link":"#propagation-mandatory","children":[]},{"level":3,"title":"Propagation.REQUIRES_NEW","slug":"propagation-requires-new","link":"#propagation-requires-new","children":[]},{"level":3,"title":"Propagation.NOT_SUPPORTED","slug":"propagation-not-supported","link":"#propagation-not-supported","children":[]},{"level":3,"title":"Propagation.NEVER","slug":"propagation-never","link":"#propagation-never","children":[]},{"level":3,"title":"Propagation.NESTED","slug":"propagation-nested","link":"#propagation-nested","children":[]}]},{"level":2,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[{"level":3,"title":"超时属性","slug":"超时属性","link":"#超时属性","children":[]},{"level":3,"title":"只读属性","slug":"只读属性","link":"#只读属性","children":[]},{"level":3,"title":"回滚属性","slug":"回滚属性","link":"#回滚属性","children":[]},{"level":3,"title":"不回滚属性","slug":"不回滚属性","link":"#不回滚属性","children":[]}]},{"level":2,"title":"使用 事务注解@Transactional 时常见的失效行为","slug":"使用-事务注解-transactional-时常见的失效行为","link":"#使用-事务注解-transactional-时常见的失效行为","children":[]}],"relativePath":"vientiane/Spring 事务详解.md"}'),o={name:"vientiane/Spring 事务详解.md"},e=l("",62),p=[e];function t(i,c,r,A,D,d){return n(),s("div",null,p)}const F=a(o,[["render",t]]);export{C as __pageData,F as default};
