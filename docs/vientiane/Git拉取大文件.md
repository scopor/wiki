# Git 拉取大文件

## 报错信息

```text
external filter 'git-lfs filter-process' failed
```

这个错误通常是由于在使用 Git Large File Storage（LFS）时出现问题引起的。Git LFS 是一个用于存储大文件的扩展，它将大文件存储在远程服务器上，而不是将其直接纳入到 Git 存储库中。

## 解决方案

安装 Git LFS 并跳过默认的 "smudge" 操作，这意味着下载到本地的指针文件不会被还原为实际文件，而只保留指针文件。

```bash
git lfs install --skip-smudge
```

这个选项通常在以下情况下使用：

* 加快操作速度：跳过 "smudge" 操作可以减少 Git LFS 执行的时间，加快 `git checkout` 或 `git pull` 等操作的速度。这对于项目中包含大量大文件的情况下特别有效。

* 节省存储空间：指针文件相对于实际大文件要小得多，因此跳过 "smudge" 操作可以节省存储空间。如果你只需要查看文件的元数据或者不需要实际文件内容，可以选择跳过 "smudge" 操作来避免占用过多的存储空间。

然后删除项目重新 clone 即可。

## 拉取大文件

如果想将指针还原成大文件，那么可以执行以下命令

```
git lfs pull
```

可能会遇到如下报错

```text
batch response: Post "xxx": x509: certificate signed by unknown authority
```

关闭 https 校验即可

```bash
git config --global http.sslVerify false
```
    
