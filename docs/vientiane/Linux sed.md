---
title: Linux sed
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
    content: https://sanoon.me/vientiane/Linux%20sed
- - link
  - rel: canonical
    href: https://sanoon.me/vientiane/Linux%20sed
---

# sed 命令是什么

**sed**, 即 **Linux** 上的流编辑器, 能够结合正则表达式进行文本处理。

## 替换操作

### 替换操作: **s** 命令

替换每行第一个匹配的值，打印替换结果，不对文件做实际修改。

```bash
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

### 替换后保存: **i** 选项

配合使用 **-i**、 **s**、 **g** ，替换每行所有匹配的值，不打印替换结果，对文件做实际修改。

```shell
sed -i 's/oldValue/newValue/g' file
```

### 从该行第N处匹配开始替换：**/Ng**

```shell
echo "ababababab" | sed 's/ab/AB/3g'
```

## 定界符: **/**

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

## 删除操作: **d** 命令

### 删除空白行

```shell
# 只打印，不修改文件，如要修改，加上 -i 选项
sed '/^$/d' file

sed -n '/./p' file
```

### 删除文件的第 N 行

```shell
# 删除第 2 行，打印结果，不删除文件内容
sed '2d' file

# 删除第 3 行到末尾的所有行，打印结果，不删除文件内容
sed '3,$d' file

# 删除最后一行，打印结果，不删除文件内容
sed '$d' file

# 删除所有开头是Hello的行，打印结果，不删除文件内容
sed '/^Hello/d' file

# 删除所有结尾是Hello的行，打印结果，不删除文件内容
sed '/Hello$/d' file
```

以上操作如要修改文件内容，加上 -i 选项

## 追加: **a\** 命令

```shell
# 在以 Hello 开头的行后面添加 world
sed '/^Hello/a\world' file

# 在第 N 行后插入 world，例如第 2 行后
sed '2a\world' file
```

以上操作如要修改文件内容，加上 -i 选项

## 插入: **i\** 命令

```shell
# 在以 Hello 开头的行前面添加 world
sed '/^Hello/i\world' file

# 在第 N 行前插入 world，例如第 2 行后
sed '2i\world' file
```

以上操作如要修改文件内容，加上 -i 选项

## 替换指定行: **c\** 命令

```shell
# 将以 Hello 开头的行替换成 world
sed '/^Hello/c\world' file

# 指定一个范围，作为一个整体被替换，如将前 3 行作为一个整体替换成 world
sed '1,3c\word' file
```

那如果是想将前 3 行的每一行都替换成 world，name可以使用循环指令

```shell
sed '1{:m;s/.*/world/;n;4!bm}' file
```

::: tip

:m  是设置一个循环标签    
s/.*/world/	是用 world 字符替换匹配到的每行内容    
n	是读取下一行    
4!	是读到第四行退出循环，终止操作,如果没有，则继续循环。    
bm	是如果没有到第四行就跳转到 m 继续循环    

:::


以上操作如要修改文件内容，加上 -i 选项

## 多点编辑: **e** 选项

**-e** 选项允许在同一行里执行多条命令，且命令的执行顺序对结果是有影响的，排在后面的命令是针对前面命令的执行结果做的操作。

```shell
# 删除前 2 行后，对每一行的 Hello 替换成 Hi
sed -e '1,2d' -e 's/Hello/Hi/g' file 
```

以上操作如要修改文件内容，加上 -i 选项

## 从文件读取: **r** 命令

```shell
# 从 otherFile 读取内容，显示在 file 文件中以 Hello 开始的行的下面
# 只打印，file 文件内容未修改，若要修改，可加上 -i 选项
sed '/^Hello/r otherFile' file
```

## 写入文件: **w** 命令

```shell
# 将 file 文件中以 Hello 开始的行，都写入到 otherFile 中, otherFile 立即生效且覆盖原有内容
sed '/^Hello/w otherFile' file
```

## 已匹配标记: **&**

**&** 标记代表匹配的每一个值

```shell
echo "中文 English 33" | sed 's/\w\+/[&]/g' // [中文] [English] [33]

echo "中文 English 33" | sed 's/\w\+/&@/g'  // 中文@ English@ 33@
```

    
