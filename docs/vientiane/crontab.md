---
title: Linux crontab 命令
head:
- - meta
  - property: og:title
    content: Linux crontab 命令
- - meta
  - name: description
    content: crontab 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。
- - meta
  - name: keywords
    content: scp
- - meta
  - property: og:description
    content: crontab 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/vientiane/crontab
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/vientiane/crontab
---

# crontab

**crontab** 命令用于管理周期性任务的表格，这些任务可按照用户指定的时间间隔执行，通常用于自动执行系统维护、日常任务或其他常规操作。

## 语法

```shell
crontab [ -u user ] file
crontab [ -u user ] [-l | -r | -e ]
```

**file** 指的是待执行任务的 **crontab** 文件。

## 选项

```shell
-e: 编辑该用户的任务表格, 如果表格不存在, 则创建一个新的
-l: 列出该用户的所有任务
-r: 删除该用户的任务表格
-u<用户名称>: 指定要编辑,列出,删除的用户的 crontab 表格
```

## 系统任务调度

系统任务调度的配置文件：**/etc/crontab**, 文件内容解读如下

```shell
# 指定要使用的 shell
SHELL=/bin/bash

# 指定系统执行命令的路径
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# 指定将执行信息发送电子邮件给用户，值为空表示不发送
MAILTO=""

# cron 表达式说明
# .---------------- 分钟: 0 - 59
# |  .------------- 小时: 0 - 23
# |  |  .---------- 天数: 1 - 31
# |  |  |  .------- 月份: 1 - 12 或者 jan,feb,mar,apr ...
# |  |  |  |  .---- 星期: 0 - 7 (Sunday=0 or 7) 或者 sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * 用户名 待执行的命令

*/15 * * * * root command 
```

## 用户任务调度

用户任务调度配置文件: **/var/spool/cron/** 目录下，文件名和用户名一致，表达是格式同系统任务调度，只是少了用户。

```shell
/etc/cron.deny     该文件中所列用户不允许使用 crontab 命令
/etc/cron.allow    该文件中所列用户允许使用 **crontab 命令
/var/spool/cron/   所有用户 crontab 文件存放的目录,以用户名命名
```


## cron 表达式符号

星号`[*]`: 代表所有可能的值, 例如month字段如果是星号, 则表示在满足其它字段的制约条件后每月都执行该命令操作

逗号`[,]`: 可以用逗号隔开的值指定一个列表范围, 例如: 1,3,5,7,9

中杠`[-]`: 可以用整数之间的中杠表示一个整数范围, 例如: 2-6 表示 2,3,4,5,6

正斜线`[/]`: 可以用正斜线指定时间的间隔频率, 例如: 0-23/5 表示每 5 小时执行一次, 同时正斜线可以和星号一起使用, 例如: `*/10`, 如果用在 minute 字段, 表示每十分钟执行一次

## crond 服务

```shell
# 启动服务
/sbin/service crond start

# 关闭服务    
/sbin/service crond stop

# 重启服务  
/sbin/service crond restart

# 重新载入配置
/sbin/service crond reload

# 查看服务状态
/sbin/service crond status

# 开机自启动
chkconfig -level 35 crond on
```

    
