---
title: Spring 事务详解
head:
- - meta
  - property: og:title
    content: Spring 事务详解
- - meta
  - name: description
    content: 最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了 `@Transactional` 注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。
- - meta
  - name: keywords
    content: Spring事务、传播机制、隔离级别、@Transactional失效
- - meta
  - property: og:description
    content: 最近在开发过程中遇到了有个异常场景，数据库操作未回滚，查看代码已经标了 `@Transactional` 注解，查阅资料发现该注解默认只能用于运行时异常， 对于受检异常(Unchecked Exception)无效，除非使用其 `rollbackFor` 属性指定受检异常才有效，经此发现对于 `Spring` 事务理解的还不够透彻，再次学习之，记录在此。
- - meta
  - property: og:url
    content: https://sanoon.me/vientiane/Spring%20%E4%BA%8B%E5%8A%A1%E8%AF%A6%E8%A7%A3
- - link
  - rel: canonical
    href: https://sanoon.me/vientiane/Spring%20%E4%BA%8B%E5%8A%A1%E8%AF%A6%E8%A7%A3
---

## 事务

事务，通常是指数据库事务，是由一组数据库操作序列构成的执行逻辑单元。并非任意的操作序列都是数据库事务，数据库事务有以下四个特性，即 `ACID` 特性。

* 原子性：事务作为一个整体被执行，这一组数据库操作要么全部被执行，要么都不执行
* 隔离性：并发执行的各个事务互不干扰
* 一致性：事务应确保数据库的状态从一个一致性状态转变为另一个一致性状态，数据库的完整性约束没有被破坏
* 持久性：事务提交后，对数据的修改是永久的，不受其他操作或者故障的影响。


## Spring 对事务的支持

`Spring` 提供了一套事务管理机制，使用方式主要分为

* 编程式事务
* 声明式事务

### 编程式事务

是手动在代码中做事务的管理，提交、回滚操作等，侵入性强，一般通过 `TransactionTemplate` 或 `TransactionManager` 操作管理，实际使用较少，示例代码如下：

* 使用 `TransactionTemplate` 编程式事务管理操作示例

```java
public void save() {
    transactionTemplate.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus transactionStatus) {
            try {
                // 业务代码
                saveModel(model);
            } catch (Exception e) {
                transactionStatus.setRollbackOnly();
            }
        }
    });
}
```

* 使用 `TransactionManager` 编程式事务管理操作示例

```
public void save() {
    DefaultTransactionDefinition defination = new DefaultTransactionDefinition();
    TransactionStatus status = transactionManager.getTransaction(defination);
    try {
        saveModel(model);
        transactionManager.commit(status);
    } catch (Exception e) {
    	transactionManager.rollback(status);
    }
}
```

### 声明式事务

这是最常用的也是推荐的方法，通过 `AOP` 机制实现，使用方式是在类、方法、接口上标记注解 `@Transactional`。

* 注解在类上，则该类中的所有 public 方法均支持事务
* 注解在方法上，只能是 public 方法上，其他修饰符的方法不生效
* 接口上，不推荐，和  `Spring AOP CGLib` 代理冲突，会导致事务注解失效

```java
public class Demo {
    @Transactional
    puiblic void doBiz() {
        new A().doBiz();
        new B().doBiz();
    }
}

Class A {
    @Transactional
    public void doBiz {
        //do something
    }
}

Class B {
    @Transactional
    public void doBiz {
       //do something
    }
}
```

## @Transactional 注解的属性

* 事务传播行为 `propagtion`
* 事务隔离级别 `isolation`
* 超时 `timeout`
* 只读 `readOnly`
* 回滚 `rollbackFor`
* 不会滚 `noRollbackFor`

## 事务传播行为

事务传播行为，主要是为了解决业务方法之间调用的事务性问题，配置不同事务传播行为，方法有可能会继续使用当前已有的事务，也可能新开一个事务，或者使事务失效。事务传播行为主要以下几种：

### Propagation.REQUIRED

默认事务。当前存在事务，则加入该事务；当前不存在事务，则创建新事务。假设 `Demo` 、A、B 三个类的 doBiz 都是用默认事务传播行为，那么 A、B 类中的方法均使用 Demo 类的事务传播行为。

1、Demo 类的方法未配置事务，A、B 配置REQUIRED， 各自开启事务，A、B互不干扰，某一个回滚不影响另一个
2、Demo 类的方法配置了事务 REQUIRED，A、B 配置REQUIRED， Demo、A、B 任何一个异常，三个均回滚

### Propagation.SUPPORTS

该事务传播行为是指当前存在事务，则加入该事务；当前不存在事务，则以非事务方式运行。假设 B 类的 doBiz 方法使用 SUPPORTS 事务传播行为，那么 Demo 类 doBiz 使用默认注解时， B 类的 doBiz 方法会加入 Demo 类的 doBiz 方法的事务中，如果 Demo 类的 doBiz 没有使用任何 @Transactional 注解时，B 类中的 doBiz 方法则不使用事务。

1、Demo 类的方法未配置事务，A、B 配置了SUPPORTS， 都以非事务执行，A、B互不干扰，无法回滚
2、Demo 类的方法配置了事务 REQUIRED，A、B 配置了SUPPORTS，都加入该事务执行，Demo、A、B 任何一个异常，三个均回滚

### Propagation.MANDATORY

如果当前存在事务，则加入该事务；如果当前不存在事务，则抛出异常。假设 B 类的 doBiz 方法使用 MANDATORY 事务传播行为，那么 Demo 类 doBiz 使用默认注解时， B 类的 doBiz 方法会加入 Demo 类的 doBiz 方法的事务中，如果 Demo 类的 doBiz 没有使用任何 @Transactional 注解时，执行 B 类中的 doBiz 方法时抛出异常。

1、Demo 类的方法未配置事务，A、B 配置MANDATORY，A、B 执行时抛出异常
2、Demo 类的方法配置了事务 REQUIRED，A、B 配置了MANDATORY，都加入该事务执行，Demo、A、B 任何一个异常，三个均回滚

### Propagation.REQUIRES_NEW

重新创建一个新的事务，如果当前存在事务，暂停当前的事务。假设 A 、B 类中的 doBiz 方法使用了 REQUIRES_NEW 事务传播行为，那么不管 Demo 类存在事务，则在执行 A、B 类的 doBiz 方法时暂停 Demo 类的 doBiz 方法的事务，执行 A、B 类的 doBiz 方法时都会各自新建一个事务。

1、Demo 类的方法未配置事务，A、B 配置REQUIRES_NEW，A、B 新建事务执行，互不干扰，各自异常各自回滚
2、Demo 类的方法配置了事务 REQUIRED，A、B 配置REQUIRES_NEW，A、B 新建事务执行，互不干扰，Demo、A、B 各自异常各自回滚

### Propagation.NOT_SUPPORTED

以非事务的方式运行，如果当前存在事务，暂停当前的事务。假设 A 、B 类中的 doBiz 方法使用了 NOT_SUPPORTED 事务传播行为，那么不管 Demo 类存在事务，则在执行 A、B 类的 doBiz 方法时都会暂停 Demo 类的 doBiz 方法的事务， 并以非事务的方式执行 A、B 类的 doBiz 方法。

1、不管 Demo 类的方法是否配置了事务，A、B配置了NOT_SUPPORTED ，A、B都以非事务方式执行，无法回滚

### Propagation.NEVER

以非事务的方式运行，如果当前存在事务，则抛出异常。假设 A 、B 类中的 doBiz 方法使用了 NEVER事务传播行为，那么 Demo 类存在事务，则在执行 A、B 类的 doBiz 方法时会抛出异常。如果 Demo 类不存在事务，那么以非事务方式执行 A、B 类的 doBiz 方法。

1、Demo 类的方法配置了事务REQUIRED，A、B配置了NEVER，A、B方法执行时抛出异常

### Propagation.NESTED 

如果当前存在事务，则创建新的事务作为当前事务的嵌套事务来运行，如果当前没有事务，则等价于默认事务REQUIRED。

1、Demo 类的方法配置了事务REQUIRED， A、B配置了NESTED， A、B方法执行时，会开启自己的事务，且只回滚自己的事务，不影响 Demo 类方法的事务和其他子事务，即 A 方法回滚，不会造成 Demo 和 B 的方法回滚。

```java
public class Demo {
    @Transactional
    puiblic void doBiz() {
        new A().doBiz();
        new B().doBiz();
    }
}

Class A {
    @Transactional
    public void doBiz {
        //do something
    }
}

Class B {
    @Transactional
    public void doBiz {
       //do something
    }
}
```

## 事务隔离级别

Spring 定义了五个事务隔离级别，分别是：

* `TransactionDefinition.ISOLATION_DEFAULT`: 使用数据库默认的隔离级别，MySQL 默认采用的 `REPEATABLE_READ` 隔离级别， 而 Oracle 默认采用的 `READ_COMMITTED` 隔离级别
* `TransactionDefinition.ISOLATION_READ_UNCOMMITTED`: 最低的隔离级别，使用这个隔离级别很少，因为它允许读取尚未提交的数据变更，**可能会导致脏读、幻读或不可重复读**
* `TransactionDefinition.ISOLATION_READ_COMMITTED`: 允许读取并发事务已经提交的数据，**可以阻止脏读，但是幻读或不可重复读仍有可能发生**
* `TransactionDefinition.ISOLATION_REPEATABLE_READ`: 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，**可以阻止脏读和不可重复读，但幻读仍有可能发生。**
* `TransactionDefinition.ISOLATION_SERIALIZABLE`: 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，**该级别可以防止脏读、不可重复读以及幻读**。但是这将严重影响程序的性能。通常情况下也不会用到该级别。

**注** 

1、`MySQL InnoDB` 的 `REPEATABLE-READ`（可重读）并不保证避免幻读，需要应用使用加锁读来保证。而这个加锁度使用到的机制就是 Next-Key Locks。

2、因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 **READ-COMMITTED(读取提交内容)** ，但是你要知道的是InnoDB 存储引擎默认使用 **REPEAaTABLE-READ（可重读）** 并不会有任何性能损失。

3、InnoDB 存储引擎在 **分布式事务** 的情况下一般会用到 **SERIALIZABLE(可串行化)** 隔离级别。

### 超时属性

事务超时指的是事务被允许执行的最长时间，如果在改时间限制内事务还没有执行完成，则自动回滚该事务。超时时间默认值为 -1 ，即不超时。

### 只读属性

读操作为什么要配置事务只读属性？你一定也会有这样的疑问，当你执行一组查询语句时，可能会需要设置只读属性。

1、如果你只执行一条查询语句，那么确实没必要配置事务，数据库默认支持读一致性
2、如果你一次执行若干条语句，例如统计、报表之类的查询，此背景下多条 SQL 必须保证整体的读一致性，否则在查询不同的语句之间，另一个事务插入一条数据，那么会造成汇总和明细的不一致，此时就需要配置事务的只读属性。

### 回滚属性

使用该属性可以指定在抛出某些异常的时候做事务回滚。默认不指定时，只对 Error 和 RuntimeException 异常做回滚。

### 不回滚属性

使用该属性可以指定的多个异常类型在抛出时，不回滚事务。

## 使用事务注解 `@Transactional` 时常见的失效行为

* 事务标记在非 public 方法上，标记在 private 或者 protected 方法上时失效且不会抛异常
* 数据库引擎不支持事务，如 MySQL  的 *MyISAM*  引擎
* 同一个类 A 的 B 方法中调用了标记有事务注解的 C 方法，C 方法的事务失效，这是属于 this 内部调用，和 IOC 反转控制无关，不走 Spring AOP 代理，因为只有当事务方法被当前类以外的代码调用时，才会由 Spring 生成的代理对象来管理
* 继承失效，当基类 A 中的方法 C 打了事务注解，其子类 B 的 D 方法调用了父类 A 的方法 C，此时因为使用的是 super 关键字调用的，也不走 Spring AOP 机制，因此失效
* A 方法标记了事务注解，A 方法调用的 B 方法抛出了异常，但被 A 捕获了，此时不回滚，除非捕获后继续抛出指定的异常或者运行时异常
* 抛出的异常不在 rollbackFor 指定的异常中
* 事务传播机制配置为SUPPORTS、NOT_SUPPORTED、NEVER时，前两个会以非事务方式运行，NEVER则直接抛出异常

:::tip

脏读：是指事务 **2** 读取了事务 **1** 还未提交的内容 **A**，后面事务  **1** 又对内容作了撤销，造成事务 **2** 拿到的是错误的。

幻读：是指在事务执行过程中，当两个完全相同的查询语句执行得到不同的结果集。是 **不可重复读** 的一种特殊场景 —— 当事务 **1** 两次执行 **SELECT...WHERE** 检索一定范围内数据的操作中间，事务 **2** 在这个表中创建了(如 **INSERT**、**DELETE** )了一行新数据，这条新数据正好满足事务 **1** 的 **WHERE** 子句。

不可重复读：是指在一次事务中，当一行数据获取两遍得到不同的结果表示发生了不可重复读，和幻读的区别是，不可重复读的侧重点在数据修改，而幻读是侧重的增删。 

:::

