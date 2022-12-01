---
title: jar 本地仓库存在, maven 编译失败 
head:
- - meta
  - property: og:title
    content: jar 本地仓库存在, maven 编译失败 
- - meta
  - name: description
    content: jar 本地仓库存在, maven 编译失败 
- - meta
  - name: keywords
    content: Could not find artifact, jar, maven
- - meta
  - property: og:description
    content: jar 本地仓库存在, maven 编译失败 
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/vientiane/jar-exist
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/vientiane/jar-exist
---


# 本地仓库有 **jar** 包 **maven** 编译依然报错

## 现象

```shell
Could not find artifact org.osgi.core:pom:7.0.0 in centralrepo
```

## 解决方案

找到问题 jar 包所在目录的除了 **.jar** 和 **.pom** 结尾之外的所有文件，重新编译即可。
    

