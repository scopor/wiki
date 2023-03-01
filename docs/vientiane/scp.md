---
title: scp 命令
head:
- - meta
  - property: og:title
    content: scp 命令
- - meta
  - name: description
    content: scp 命令是用于在不同计算机之间复制文件和目录的命令。
- - meta
  - name: keywords
    content: scp
- - meta
  - property: og:description
    content: scp 命令是用于在不同计算机之间复制文件和目录的命令。
- - meta
  - property: og:url
    content: https://sanoon.me/vientiane/scp
- - link
  - rel: canonical
    href: https://sanoon.me/scp
---

# scp
**scp** 命令是用于在不同计算机之间复制文件和目录的命令。

## 语法
**scp** 命令的基本语法如下：其中，**source** 指要复制的文件或目录，**destination** 指复制到的目标位置。可以在本地计算机和远程计算机之间进行复制，也可以在两台远程计算机之间进行复制。

```shell
scp [options] [source] [destination]
```

## 选项

以下是 **scp** 命令中可用的选项：
```bash
-r：复制目录及其子目录。
-p：保留文件的原始权限和时间戳。
-q：静默模式，不显示复制的进度信息。
-C：启用压缩传输。
-i：指定用于身份验证的密钥文件。
-P：指定远程主机上的端口号。
-l：限制带宽使用率，以 **KB/s** 为单位。
-v：显示详细的进度信息。
```

## 示例
以下是一些常用的 **scp** 命令示例

### 从远程计算机复制文件到本地计算机
```shell
scp username@remote:/path/to/remote/file /path/to/local/location
```

### 从本地计算机复制文件到远程计算机
```shell
scp /path/to/local/file username@remote:/path/to/remote/location
```

### 从远程计算机复制目录及其子目录到本地计算机
```shell
scp -r username@remote:/path/to/remote/directory /path/to/local/location
```

### 从本地计算机复制目录及其子目录到远程计算机
```shell
scp /path/to/local/location username2@remote2:/path/to/remote/location
```

### 在两台远程计算机之间复制文件
```shell
scp username1@remote1:/path/to/remote/file username2@remote2:/path/to/remote/location
```
    
::: tip

**scp** 命令传输的文件和目录权限可能会被修改，取决于目标计算机上的 **umask** 设置。     
如果目标文件已存在，则 **scp** 命令将覆盖该文件而不提示。     
如果目标文件夹不存在，**scp** 命令将尝试创建该文件夹，但它不会自动创建目标目录的层次结构。     
在使用 **scp** 命令时，需要确保网络连接是安全的，以避免敏感信息泄露。建议使用 **SSH** 连接。     

:::    
    
