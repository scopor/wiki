---
title: Linux sed 命令
head:
- - meta
  - property: og:title
    content: Linux sed 命令
- - meta
  - name: description
    content: Linux sed 命令，修改文件内容.
- - meta
  - name: keywords
    content: Linux, sed
- - meta
  - property: og:description
    content: Linux sed 命令，修改文件内容.
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/vientiane/Linux%20sed
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/vientiane/Linux%20sed
---

# sed 命令是什么

**sed**, 即 **Linux** 上的流编辑器, 能够结合正则表达式进行文本处理。

## 替换操作

### 替换操作: **s** 命令

替换每行第一个匹配的值，打印替换结果，不对文件做实际修改。

```shell
sed 's/oldValue/newValue/' file
```

### **-n** 选项 和 **p** 命令

替换每行第一个匹配的值，只打印被替换的行，不对文件做实际修改。

```shell
sed -n 's/oldValue/newValue/p' file
```

### 全面替换命令: **g** 命令

替换每行所有匹配的值，打印替换结果，不对文件做实际修改。

```shell
sed 's/oldValue/newValue/g' file
```

### 替换后保存：**i** 选项

配合使用 **-i**、 **s**、 **g** ，替换每行所有匹配的值，不打印替换结果，对文件做实际修改。

```shell
sed -i 's/oldValue/newValue/g' file
```

### 从该行第N处匹配开始替换：**/Ng**

```shell
echo "ababababab" | sed 's/ab/AB/3g'
```

## 定界符：/

以上命令均使用 **/** 作为定界符，也可以使用其他任意的定界符，比如 **:**、 **|**等

```shell
echo "abababab" | sed 's:ab:AB:g'
echo "abababab" | sed 's|ab|AB|g'
```

但是当定界符出现在 **被匹配、要替换成的内容** 时需要进行转义

```shell
echo "ab:ab:ab:ab" | sed 's:\:ab:\:AB:g'
echo "ab|ab|ab|ab" | sed 's|\|ab|\|AB|g'
```

## 删除操作：d 命令

### 删除空白行

```shell
sed '/^$/d' file
```

### 删除文件的第 N 行

```shell
# 删除第 2 行，打印结果，不实际删除文件内容
sed '2d' file

# 删除第 2 行，实际删除文件内容
sed -i '2d' file
```

    
