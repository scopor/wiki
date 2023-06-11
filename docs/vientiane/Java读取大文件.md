---
title: Files.readAllBytes 使用隐患
head:
- - meta
  - property: og:title
    content: Files.readAllBytes 使用隐患
- - meta
  - name: description
    content: Files.readAllBytes 是 Java 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 byte 数组。然而，它存在一些使用隐患，可能会导致程序运行出错或产生安全问题。
- - meta
  - name: keywords
    content: Files.readAllBytes,
- - meta
  - property: og:description
    content: Files.readAllBytes 是 Java 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 byte 数组。然而，它存在一些使用隐患，可能会导致程序运行出错或产生安全问题。
- - meta
  - property: og:url
    content: https://sooloe.com/vientiane/Java%E8%AF%BB%E5%8F%96%E5%A4%A7%E6%96%87%E4%BB%B6
- - link
  - rel: canonical
    href: https://sooloe.com/vientiane/Java%E8%AF%BB%E5%8F%96%E5%A4%A7%E6%96%87%E4%BB%B6
---

# Files.readAllBytes

是 **Java** 中一个方便的方法，用于读取文件中的所有字节并将其返回为一个 **byte** 数组

## 现象

```shell
java.lang.OutOfMemoryError: Direct buffer memory
    at java.nio.Bits.reserveMemory(Bits.java:632)
```

当前我们服务的堆外内存配置如下，如果没配置，默认是 **64M**

```shell
-XX:MaxDirectMemorySize=128m
```

当我们尝试将其修改为 **192m** 后，持续进行测试，还是发生了上述现象，看堆栈信息就是在使用该方法时抛出了异常，我们读取的文件大小约 **40M**。

## 解决

Files.readAllBytes 方法是直接将整个文件直接读取到内存中，这可能是导致错误的原因。

如果要读取的文件非常大，则可以考虑使用更高效的方式来读取文件，例如使用 BufferedInputStream 和 ByteArrayOutputStream，并逐步读取文件。这样可以避免将整个文件读入内存中，从而避免内存限制问题。

我们更换使用了 **FileCopyUtils.copyToByteArray** 方法，该方法内部是循环读取文件写入一个输出 ByteArrayOutputStream 流中，经过大量测试后，问题得以解决。

    
