---
title: Git 常用命令
head:
- - meta
  - property: og:title
    content: Git 常用命令, commit, merge, branch, rebase, HEAD
- - meta
  - name: description
    content: Git 常用命令, commit, merge, branch, rebase, HEAD
- - meta
  - name: keywords
    content: Git 常用命令, commit, merge, branch, rebase, HEAD
- - meta
  - property: og:description
    content: Git 常用命令, commit, merge, branch, rebase, HEAD
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/vientiane/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/vientiane/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4
---

# Git 常用命令

## commit 
**git commit**, 将当前分支的修改和父节点做比对，将差异打包进行提交


## branch
善用分支，早用，多用，创建分支并不会造成存储浪费或内存开销。

* 创建分支
```shell
git branch newBranchName
```

* 切换分支
```shell
git checkout newBranchName
```

* 创建并切换分支
```shell
git checkout -b newBranchName
```

## merge
有时候我们新创建了一个分支，并在上面开发了某个新的需求，开发结束后我们将其合并回主线分支。

* bugFix 分支修改， 合并到 main 分支
```shell
# 切换到 main 分支，执行以下命令
git checkout main; git merge bugFix

# main 分支合入到 bugFix 分支
git checkout bugFix; git merge main
```

## rebase
**rebase** 是取出一系列提交记录，复制它们。使用 **rebase** 可以创造更线性的提交历史，代码库的提交历史变得异常清晰。

假设当前我们处于 bugFix 分支, 我们将该分支上的修改移到 main 分支，使得两个分支的功能看起来是顺序开发（实际上是并行开发）
```shell
# 执行 rebase, 此时 bugFix 的父节点变成了 main，且切换换回了 main 分支
git rebase main

# 我们再将 main 分支 rebase 到 bugFix 分支
git rebase bugFix
# 

```

## HEAD
HEAD 是对当前检出记录的符号引用，总是指向当前分支上最近一次提交记录。





