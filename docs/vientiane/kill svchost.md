---
title: Windows CPU 高
head:
- - meta
  - property: og:title
    content: Windows CPU 高
- - meta
  - name: description
    content: Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。
- - meta
  - name: keywords
    content: svchost,
- - meta
  - property: og:description
    content: Windows 系统卡顿，查看任务管理器发现进程 服务主机 Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大，尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。
- - meta
  - property: og:url
    content: https://sanoon.me/vientiane/kill%20svchost
- - link
  - rel: canonical
    href: https://sanoon.me/vientiane/kill%20svchost
---

## 现象
Windows 系统卡顿，查看任务管理器发现进程 服务主机: Message Manager Service 导致 CPU 高，电源使用情况高，风扇狂转，噪音大。

尝试结束该进程发现过一会儿后又自动拉起了，遂写了脚本，定时执行杀死它。

## 查询 svchost 进程的详细信息

该服务是由 **svchost.exe** 进程统一拉起执行，而系统中有多个 服务 项在执行，需要通过进程的详细信息区分目标进程。

```shell
tasklist /svc
```

## 杀死 MessageManagerService 对应的 svchost 进程

复制以下代码到 文本软件，保存为 **.bat** 格式文件，双击执行, 世界终于安静了。

```shell
@echo off
setlocal

set SERVICE_NAME=MessageManagerService

:loop
tasklist /svc | find /i "svchost.exe" | find /i "%SERVICE_NAME%" >nul
if %errorlevel% equ 0 (
    taskkill /f /im svchost.exe /fi "services eq %SERVICE_NAME%" >nul
    echo Message Manager Service has been killed.
)
timeout /t 10 /nobreak >nul
goto loop
```
    
    

