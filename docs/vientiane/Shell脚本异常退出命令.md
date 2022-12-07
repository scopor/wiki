

# **shell** 脚本中常用的异常退出命令

编写 **shell** 脚本时，为了保证可靠性，可以使用命令 **set -e**，**set -u**，**set -o pipefail**，**trap** 来应对异常后的退出操作。

## **set -e**
当某条命令执行失败时，立即退出脚本，不再执行下面的命令。

示例：**rm -rf /tmp/test** 命令会执行失败，因为 **/tmp/test** 不存在，此时脚本会立即退出，不会执行 **echo "Test is done"**。
```shell
#!/bin/bash
set -e
echo "This is a test"
rm -rf /tmp/test
echo "Test is done"
```

## **set -u**
当使用未定义的变量时，立即退出脚本，不再执行下面的命令。

示例：**echo $undefined_variable** 命令会执行失败，因为 **$undefined_variable** 变量未定义，此时脚本会立即退出，不会执行 **echo "Test is done"**。
```shell
#!/bin/bash
set -u
echo "This is a test"
echo $undefined_variable
echo "Test is done"
```

## **set -o pipefail**
当管道中的任何一条命令执行失败时，立即退出脚本，不再执行下面的命令。

示例：**ls /tmp/test | grep test** 命令会执行失败，因为 **/tmp/test** 不存在，此时脚本会立即退出，不会执行 **echo "Test is done"**。

```shell
#!/bin/bash
set -o pipefail
echo "This is a test"
ls /tmp/test | grep test
echo "Test is done"
```


## **trap**
当接收到指定的信号时，立即执行指定的命令。

:::tip 
**trap** 可以接收 **SIGHUP**、**SIGINT**、**SIGQUIT**、**SIGTERM** 等信号。
**trap** 不能接收 **SIGKILL** 信号，因为 **SIGKILL** 信号不能被捕获和忽略。
:::

示例：当接收到 **SIGHUP** 信号时，会立即执行 **echo 'Received signal SIGHUP'** 命令，然后继续执行 **echo "Test is done"**。
```shell
#!/bin/bash
trap "echo 'Received signal SIGHUP'" SIGHUP
echo "This is a test"
kill -SIGHUP $$
echo "Test is done"
```

## **shell** 脚本中常用的信号

* SIGHUP（1）：挂起信号，当用户终端连接挂断时，该信号会发送给进程。
* SIGINT（2）：中断信号，当用户按下 **Ctrl+C** 时，该信号会发送给进程。
* SIGQUIT（3）：退出信号，当用户按下 **Ctrl+\** 时，该信号会发送给进程。
* SIGKILL（9）：杀死信号，该信号不能被捕获和忽略，用于强制终止进程。
* SIGTERM（15）：终止信号，该信号可以被捕获和忽略，用于正常终止进程。