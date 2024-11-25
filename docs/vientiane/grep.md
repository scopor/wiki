# Linux grep 命令完全指南

## 1. 基本语法

### 1.1 命令格式
```bash
grep [选项] 模式 文件
```

### 1.2 基础示例
```bash
# 基本文件搜索
grep "error" log.txt

# 通过管道搜索
cat file.txt | grep "pattern"

# 通过echo搜索
echo "hello world" | grep "hello"
```

## 2. 选项参数

### 2.1 匹配控制

#### 忽略大小写 (-i, --ignore-case)
```bash
# 忽略大小写搜索错误信息
grep -i "Error" log.txt

# 搜索所有日志文件中的警告信息
grep -i "warning" *.log
```

#### 匹配整词 (-w, --word-regexp)
```bash
# 只匹配完整的单词"log"
grep -w "log" file.txt

# 在输出中匹配完整单词
echo "login logout" | grep -w "log"
```

#### 匹配整行 (-x, --line-regexp)
```bash
# 精确匹配整行
grep -x "exact line" file.txt

# 使用echo测试整行匹配
echo -e "test\ntest line" | grep -x "test"
```

#### 反向匹配 (-v, --invert-match)
```bash
# 排除注释行
grep -v "#" config.txt

# 排除root用户的进程
ps aux | grep -v "root"
```

### 2.2 搜索范围

#### 递归搜索 (-r, --recursive)
```bash
# 搜索所有TODO标记
grep -r "TODO" ./src/

# 搜索所有fixme标记
grep -r "fixme" /path/to/project/
```

#### 符号链接递归 (-R, --dereference-recursive)
```bash
# 递归搜索包括符号链接
grep -R "config" /etc/
```

#### 包含特定文件 (--include)
```bash
# 只搜索Python文件
grep -r --include="*.py" "def" ./

# 搜索JS和JSX文件
grep -r --include="*.{js,jsx}" "import" ./src/
```

#### 排除特定文件 (--exclude)
```bash
# 排除日志文件
grep -r --exclude="*.log" "error" ./

# 排除特定目录
grep -r --exclude-dir={"node_modules","dist"} "todo" ./
```

### 2.3 输出控制

#### 显示行号 (-n, --line-number)
```bash
# 显示匹配行的行号
grep -n "main" program.c

# 搜索函数定义并显示行号
grep -n "^function" script.sh
```

#### 仅显示文件名 (-l, --files-with-matches)
```bash
# 显示包含错误的日志文件
grep -l "error" /var/log/*.log

# 递归查找包含TODO的文件
grep -rl "TODO" ./src/
```

#### 显示不匹配的文件 (-L, --files-without-match)
```bash
# 查找没有测试的文件
grep -L "test" *.spec.js

# 查找没有版权声明的文件
find . -type f -exec grep -L "copyright" {} \;
```

#### 计数 (-c, --count)
```bash
# 统计错误出现次数
grep -c "ERROR" error.log

# 递归统计警告次数
grep -rc "warn" ./logs/
```

#### 仅显示匹配部分 (-o, --only-matching)
```bash
# 提取IP地址
grep -o "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" access.log

# 提取所有匹配的单词
echo "hello world hello" | grep -o "hello"
```

### 2.4 上下文控制

#### 显示前几行 (-B NUM)
```bash
# 显示错误前3行
grep -B 3 "error" log.txt

# 实时显示异常前2行
tail -f log.txt | grep -B 2 "exception"
```

#### 显示后几行 (-A NUM)
```bash
# 显示警告后3行
grep -A 3 "warning" log.txt

# 显示开始标记后5行
grep -A 5 "BEGIN" data.txt
```

#### 显示前后几行 (-C NUM)
```bash
# 显示错误前后2行
grep -C 2 "error" app.log

# 显示致命错误前后3行
grep -C 3 "fatal" system.log
```

## 3. 正则表达式

### 3.1 基本正则表达式 (BRE)

#### 行首行尾匹配
```bash
# 匹配行首
grep "^start" file.txt

# 匹配行尾
grep "end$" file.txt
```

#### 字符类匹配
```bash
# 匹配数字
grep "[0-9]" data.txt

# 匹配字母
grep "[a-zA-Z]" text.txt
```

#### 重复匹配
```bash
# 匹配零个或多个字符
grep "go*gle" file.txt

# 匹配指定次数
grep "a\{2,4\}" text.txt
```

### 3.2 扩展正则表达式 (ERE) (-E)

#### 选择匹配
```bash
# 匹配多个模式
grep -E "cat|dog" pets.txt

# 匹配多种错误类型
grep -E "error|warn|fail" log.txt
```

#### 分组匹配
```bash
# 匹配重复组
grep -E "(log|debug){2}" file.txt

# 匹配重复单词
grep -E "(\w+)\s+\1" text.txt
```

#### 数量词
```bash
# 匹配一个或多个数字
grep -E "\d+" numbers.txt

# 匹配URL
grep -E "https?://" urls.txt
```

### 3.3 Perl正则表达式 (PCRE) (-P)

#### 前后查找
```bash
# 提取邮箱用户名
grep -P "(?<=@)\w+" emails.txt

# 否定后向查找
grep -P "foo(?!bar)" text.txt
```

#### 特殊结构
```bash
# 匹配Unicode字符
grep -P "\x{2014}" unicode.txt

# 提取电话号码中间部分
grep -P "(?<=\d{3})\d{3}(?=\d{4})" phones.txt
```

## 4. 实用场合

### 4.1 日志分析

#### 错误查找
```bash
# 查找多种级别的错误
grep -i "error\|warning\|critical" application.log

# 查看异常上下文
grep -A 5 -B 2 "exception" error.log
```

#### 特定时段查找
```bash
# 查找特定日期的日志
grep "2024-03-" server.log

# 查找特定日期范围
grep -E "Mar [1-5]" access.log
```

#### 统计分析
```bash
# 统计404错误次数
grep -c "404" access.log

# 统计错误类型分布
grep -o "ERROR.*" log.txt | sort | uniq -c
```

### 4.2 代码审查

#### 函数查找
```bash
# 搜索JavaScript函数
grep -r "function" --include="*.js" ./src/

# 搜索Python类定义
grep -n "^class" --include="*.py" ./
```

#### TODO标记查找
```bash
# 查找所有标记
grep -r "TODO\|FIXME" ./

# 在git仓库中查找
grep -n "TODO" $(git ls-files)
```

#### 依赖检查
```bash
# 检查Go导入
grep -r "import" --include="*.go" ./

# 检查PHP依赖
grep -h "require" --include="*.php" . | sort | uniq
```

### 4.3 系统管理

#### 进程查找
```bash
# 查找nginx进程
ps aux | grep "nginx"

# 查找docker进程
ps -ef | grep -v grep | grep "docker"
```

#### 配置检查
```bash
# 查看SSH有效配置
grep -v "^#" /etc/ssh/sshd_config

# 检查MySQL配置
grep -r "max_connections" /etc/mysql/
```

#### 用户管理
```bash
# 查看sudo权限用户
grep "sudo" /etc/group

# 查看可登录用户
grep -v "nologin" /etc/passwd
```

## 5. 高级技巧

### 5.1 性能优化

#### 使用固定字符串 (-F)
```bash
# 搜索固定字符串
grep -F "literal string" large_file.txt

# 使用模式文件
grep -F -f patterns.txt data.txt
```

#### 限制搜索深度
```bash
# 限制递归深度
grep --max-depth=2 -r "pattern" ./

# 使用find限制深度
find . -maxdepth 3 -type f -exec grep "pattern" {} \;
```

#### 文件类型过滤
```bash
# 搜索特定类型文件
grep --include="*.{c,h}" -r "main" ./

# 结合find搜索
find . -type f -name "*.log" -exec grep "error" {} \;
```

### 5.2 组合应用

#### 与find结合
```bash
# 搜索新文件
find . -type f -newer file.txt -exec grep "pattern" {} \;

# 搜索最近文件
find . -mtime -7 -type f -exec grep "error" {} \;
```

#### 与xargs结合
```bash
# 批量搜索
find . -type f | xargs grep "pattern"

# 从文件列表搜索
cat file_list.txt | xargs grep -l "string"
```

#### 与sed结合
```bash
# 批量替换
grep -l "old" files | xargs sed -i 's/old/new/g'

# 创建备份并替换
grep -rl "pattern" . | xargs sed -i.bak 's/pattern/replace/g'
```

### 5.3 特殊用法

#### 二进制文件搜索
```bash
# 强制文本搜索
grep -a "string" binary_file

# 指定二进制文件处理方式
grep --binary-files=text "pattern" data.bin
```

#### 压缩文件搜索
```bash
# 直接搜索压缩文件
zgrep "pattern" file.gz

# 解压后搜索
zcat file.gz | grep "pattern"
```

#### 多模式匹配
```bash
# 使用模式文件
grep -f patterns.txt file

# 组合多个模式
grep -E "$(cat patterns.txt | paste -sd'|' -)" file
```

## 6. 最佳实践

1. 在处理大文件时，优先使用 `-F` 选项进行固定字符串搜索
2. 使用 `--include` 和 `--exclude` 限制搜索范围
3. 对于复杂的模式匹配，使用 `-E` 或 `-P` 选项
4. 在递归搜索时注意文件权限和符号链接
5. 处理二进制文件时使用适当的选项
6. 结合其他命令如 `find`、`xargs`、`sed` 实现更复杂的操作
