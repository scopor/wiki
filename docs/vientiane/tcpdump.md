---
title: tcpdump
head:
- - meta
  - property: og:title
    content: tcpdump
- - meta
  - name: description
    content: tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。
- - meta
  - name: keywords
    content: tcpdump
- - meta
  - property: og:description
    content: tcpdump 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/vientiane/tcpdump
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/vientiane/tcpdump
---

# tcpdump

**tcpdump** 是数据包分析器，运行在命令行下，能够分析网络行为、性能和应用产生或者接收的网络流量。支持对网络层、协议、主机、端口的过滤，提供 and、 or、 not等逻辑语句过滤无用的信息。

## 监听网卡

不指定时默认监听第一个网络接口 **eth0**
```shell
tcpdump 
```

使用 -i 选项指定监听某个网络接口
```shell
tcpdump -i eth1
```

## 监听指定主机

监听进入或者离开 ZKServer 的数据包

```shell
tcpdump host ZKServer
```

监听两个主机之间的通信

```shell
tcpdump host ZKServer and LemonServer
```

监听当前主机和多个主机之间的通信

```shell
tcpdump host ZKServer and \( LemonServer and PomeloServer \)
```

监听当前主机和指定主机外其他所有主机之间的通信

```shell
tcpdump ip host ZKServer and not PomeloServer
```

## 监听指定IP

监听 192.168.1.2 收到的和发出的数据包
```shell
tcpdump host 192.168.1.2
```

监听两个 IP 之间的通信

```shell
tcpdump host 192.168.1.2 and 192.168.1.3
```

监听当前 IP 和多个 IP 之间的通信

```shell
tcpdump host 192.168.1.2 and \( 192.168.1.3 and 192.168.1.4 \)
```

监听当前IP 和指定 IP 外其他所有 IP 之间的通信

```shell
tcpdump ip host 192.168.1.2 and ! 192.168.1.3
```

## 监听发出的数据包

```shell
tcpdump -i eth0 src host ZKServer
```

## 监听收到的数据包

```shell
tcpdump -i eth0 dst host ZKServer
```

## 监听指定主机及指定端口的数据包

```shell
tcpdump tcp port 23 and host 192.168.1.2
```

## 监听指定端口的数据包

```
tcpdump port 22
tcpdump src port 22
tcpdump dst port 22
tcpdump -i eth1 src port 6758
tcpdump -i eth1 dst port 6758
```

## 监听指定网段的数据包

```
tcpdump -i eth1 net 192.168.1
tcpdump -i eth1 src net 192.168.1
tcpdump -i eth1 dst net 192.168.1
```

## 监听指定协议的数据包

```
tcpdump -i eth0 icmp
tcpdump -i eth0 ip
tcpdump -i eth0 tcp
tcpdump -i eth0 udp
tcpdump -i eth0 arp
```

## 后台监听

```
nohup tcpdump tcp -i eth0 -s 0 -c 100 and dst net 192.168.1.2 -w capture.cap &
```
    
::: tip
nohup 和 &：两者配合，可以让  tcpdump 抓包进程在后台执行    

tcp：监听的协议    

-i：监听的网络接口     

-s：0，代表不限制包的大小，默认长度 68 字节    

-c：制定抓取包的数量    

-w：制定保存的文件    
:::

    
    


