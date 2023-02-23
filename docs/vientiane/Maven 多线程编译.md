---
title: Maven 多线程编译
head:
- - meta
  - property: og:title
    content: Maven 多线程编译
- - meta
  - name: description
    content: 公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。
- - meta
  - name: keywords
    content: Maven,多线程编译
- - meta
  - property: og:description
    content: 公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。
- - meta
  - property: og:url
    content: https://sanoon.me/vientiane/Maven%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E8%AF%91
- - link
  - rel: canonical
    href: https://sanoon.me/vientiane/Maven%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%BC%96%E8%AF%91
---

## 现象

公司的项目比较大，编译缓慢，耗时 2 个多小时。除了配置各种编译跳过选项后，也需要 1 个小时左右的时间。
```
-Dmaven.test.skip=true 
-Dmaven.javadoc.skip=true 
-Dcheckstyle.skip=true 
-Dfindbugs.skip=true
```

## 多线程编译
在翻阅 Maven 命令时，发现 Maven 3.0 以上的版本是支持多线程编译的，使用 -T 的命令可以指定多线程的数量。具体命令如下：
```
-T 1C -Dmaven.compile.fork=true
```

1C 是指倍数核心数的线程数量，如果你的电脑是 4 核 8 线程，配置为 1C 就代表 8线程，如果是 4 核 4 线程，就代表 4 个线程，也可以直接指定线程数量, 如 -T `4`。
编译信息中可以看到以下信息，表示编译使用的线程数
```
[INFO] Using the MultiThreadedBuilder implementation with a thread count of 8
```

## 多线程下载

另外，使用以下配置还可以开启多线程下载，默认配置为5
```
-Dmaven.artifact.threads=10
```
    
