---
title: 删除 MacOS 残留的图标
head:
- - meta
  - property: og:title
    content: 删除 MacOS 残留的图标
- - meta
  - name: description
    content: MacOS 启动台里的图标删不掉怎么办. 
- - meta
  - name: keywords
    content: nvm, node
- - meta
  - property: og:description
    content: MacOS 启动台里的图标删不掉怎么办.
---

MacOS 启动台里的图标删不掉怎么办？打开 Terminal，执行以下命令，替换 xxx 为残留的图标名称或者前缀。

```shell
sqlite3 $(find /private/var/folders \( -name com.apple.dock.launchpad -a -user $USER \) 2> /dev/null)/db/db "DELETE FROM apps WHERE title like 'ACCFind%';" && killall Dock
```
    
