---
title: NVM 管理 NODE 版本
head:
- - meta
  - property: og:title
    content: NVM 管理 NODE 版本
- - meta
  - name: description
    content: 当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本.
- - meta
  - name: keywords
    content: nvm, node
- - meta
  - property: og:description
    content: 当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本.
---

当不同项目使用不同的 NODE 版本时，可以通过 NVM 来管理 NODE 的版本。

## 1、安装 NVM 

当前 NVM 最新版本为 [1.1.11](https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe)，也可以选择[其他版本](https://github.com/coreybutler/nvm-windows/releases)

下载好之后一路双击，中间存在一步是选择 nodejs 存储目录，切记不要选择路径中带有空格的路径即可。

安装之后，在 NVM 安装路径下，可以找到 settings.txt 文件，这里面就是当前 NVM 的配置信息。

```sh
root: D:\develop\nvm
path: D:\develop\nodejs
arch: 64
proxy: https://xxx.xxx.com:port
originalpath: .
originalversion: 
node_mirror: 
npm_mirror: 
```

此时也可以查看环境变量信息，能看到新增了两个环境变量 NVM_HOME 和 NVM_SYMLINK 配置。

## 2、配置代理

有些公司的网络环境需要配置代理才能连接上 NODE 的官网，配置代理可以编辑上面的 settings.txt 文件，也可以直接在命令行窗口中执行以下命令进行配置。

```sh
# 配置代理
nvm proxy 代理url地址

# 取消代理
nvm proxy none
```

## 3、安装 NODE

NVM 安装 NODE 前，可以执行以下命令查看当前可以用的 NODE 版本，其中 LTS 是最新的稳定版本。

```sh
# 查看最新可用版本
nvm list available
```

选择一个版本进行安装，比如安装 18.16.0 版本，使用以下命令

```sh
nvm install v18.16.0
```

## 4、NODE 版本切换

当你的环境中存在多个 NODE 版本时，可以使用以下命令来进行切换当前 Node 版本 

```sh
# 首次使用需要打开 NVM 管理版本的功能
nvm on
# 查看当前有哪些版本
nvm list
# 切换版本，如切换到 18.16.0
nvm use 18.16.0
```

## 5、卸载 NODE

当不需要其中某个 NODE 版本时，可以使用以下命令来进行卸载

```sh
nvm uninstall 18.16.0
```

## 6、NPM 代理

NPM 配置代理

```sh
npm config set proxy https://域名:port
npm set strict-ssl false
```

## 7、Yarn 代理

Yarn 复用 NPM 代理

```sh
yarn config set strict-ssl false
```

