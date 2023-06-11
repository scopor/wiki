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
    content: https://sooloe.com/vientiane/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4
- - link
  - rel: canonical
    href: https://sooloe.com/vientiane/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4
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
```

## HEAD
HEAD 是对当前检出记录的符号引用，总是指向当前分支上最近一次提交记录。

## log
移动 **head** 是通过提交记录的哈希值来操作的，而查看哈希值则需要用到 **git log** 命令。哈希值基于 **SHA-1** 生成，长度 40 位，**git** 为我们提供了便捷的操作，只关注前几位即可。

## 相对引用 **^**
在引用名称后面使用 **^** 可以寻找指定提交记录的父提交，比如 git checkout main^ 代表寻找 main 的父节点, 可以连续使用多个 ^ ，如 git checkout main^^ 

## 多步操作符 **～**
如果要在提交记录树上移动多步时，使用 **～** 操作符号可以快速达成，起后面可以跟数字，代表移动几次，如果不加数字，效果等同 **^**
```shell
#  将 main 分支强制指向 HEAD 的第 3 级父提交
git branch -f main HEAD~3
```

## reset
本地修改回退，通过把分支记录回退几个提交记录来实现撤销改动。

```shell
# 撤销本次提交，回退到上一次提交的位置，且本地也不知道撤销之前的提交记录了
git reset HEAD~1
```

## revert
远程提交回退，会产生一个与本次提交回退的新的 commit 记录，待推送到远程后，代表撤销本次提交，其他远程小伙伴也可以看到此次撤销。
```shell
git revert HEAD
```

## cherry-pick
**cherry-pick** 可以将一些提交复制到当前所在的位置(HEAD)下面。
```shell
git cherry-pick <commit号>
```

## 交互式 rebase
当你清楚你想要的提交记录的时候，使用 **cherry-pick** 再好不过，如果不清楚呢？ 就需要用到交互式的 **rebase**。
交互式 **rebase** 指的是使用带参数 **--interactive** 的 **rebase** 命令, 简写为 **-i**，执行该命令会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明。
```shell
# 将最后提交的 4 条记录打开，重新调整
git rebase -i HEAD~4
```
    
