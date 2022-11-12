---
title: Go 语言笔记：defer
head:
- - meta
  - property: og:title
    content: Go 语言笔记：defer
- - meta
  - name: description
    content: defer 是 Go 新增的关键字，表示延迟调用，在 defer 之后可以紧跟表达式或者函数。defer 后面的语句会在当前函数执行完毕后被执行。
- - meta
  - name: keywords
    content: Go,defer
- - meta
  - property: og:description
    content: defer 是 Go 新增的关键字，表示延迟调用，在 defer 之后可以紧跟表达式或者函数。defer 后面的语句会在当前函数执行完毕后被执行。
- - meta
  - property: og:url
    content: https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/defer
- - link
  - rel: canonical
    href: https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/defer
---
  
# Go 语言笔记：defer

## defer 定义

`defer` 是 `Go` 新增的关键字，表示延迟调用，在 `defer` 之后可以紧跟表达式或者函数。`defer` 后面的语句会在当前函数执行完毕后被执行。

```go
func main() {
  defer fmt.Println("defer")
  ftm.Println("main")
}

// 打印结果
main
defer
```

## defer 栈

如果某个函数中存在有多个 `defer`，他们之间会以入栈的方式后进先出的顺序来执行。

```go
// func3 最先执行，其次是 func2，最后执行 func1
func call() {
  defer func1()
  defer func2()
  defer func3()
}
```

## defer 和 return 执行顺序

先说结论 ：`return` 先于 `defer` 执行。`defer` 的执行时机是在 `return` 执行完成之后才开始执行

```go
import "fmt"

func call() int {
  defer deferCall()
  return returnCall()
}

func returnCall() int {
  fmt.Println("return called.")
  return 0
}

func deferCall() int {
  fmt.Println("defer called.")
  return 0
}

func main() {
  call()
}

// 打印结果
return called.
defer called.
```
