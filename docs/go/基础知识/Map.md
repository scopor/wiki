---
title: Go 语言笔记：Map
head:
- - meta
  - property: og:title
    content: Go 语言笔记：Map
- - meta
  - name: description
    content: Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。
- - meta
  - name: keywords
    content: Go,Map,Map遍历、更新、删除、获取,空Map
- - meta
  - property: og:description
    content: Map 是 Go 中的键值对类型，底层是哈希表实现的，Map 中的 key 具备惟一性，所有可比较的类型，都可以 作为 key。
- - meta
  - property: og:url
    content: https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Map
- - link
  - rel: canonical
    href: https://sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Map
---

Go 语言笔记：Map

## Map

> `Map` 是 `Go` 中的键值对类型，底层是哈希表实现的，`Map` 中的 `key` 具备惟一性，所有可比较的类型，都可以 作为 `key`。

## Map 的创建

> `Map` 使用 `make` 函数来创建，格式为：`make(map[key]value)` 。

```go
movies :=  make(map[string]string)
```

也可以使用 `map` 语法创建，且可以指定具体的键值对

```go
var movies map[string]string = map[string]string{"肖申克的救赎": "https://movie.douban.com/subject/1292052/"}

movies := map[string]string{"肖申克的救赎": "https://movie.douban.com/subject/1292052/"}
```

## Map 添加元素

> 我们可以通过 `map[key] = value` 的方式向 `Map` 中添加元素。

```go
movies["当幸福来敲门"] = "https://movie.douban.com/subject/1849031/"
```

## Map 更新元素

> 若 `key` 已存在，则覆盖原有的值

```go
movies["当幸福来敲门"] = "https://movie.douban.com/subject/1849031/?from=subject-page"
```

## Map 获取元素

```go
var value = movies["当幸福来敲门"]
fmt.Println(value)  //https://movie.douban.com/subject/1849031/?from=subject-page
```

## Map 删除元素

> 使用 `delete(map, key)` 函数删除键值对，如果 `key` 不存在，`delete` 函数不会报错。

```go
delete(movies, "当幸福来敲门")
fmt.Println(movies) // map[肖申克的救赎:https://movie.douban.com/subject/1292052/]
```

## Map key存在性

> 判断 `Map` 中某个 `Key` 的存在与否，可以使用语法 value, ok := map[key]，该语法返回两个参数，第一个为键值对中的值，第二个参数为 `key` 是否存在，`true` 为存在，`false` 为不存在。

```go
value, ok := movies["肖申克的救赎"]
```

## Map 的遍历

> `Map` 的遍历依然使用 `for range` 语法。

```go
// key, value 都获取
for key, value := range movies {
  fmt.Printf("key: %s, value: %d\n", key,  value)
}

// 只获取 key
for key := range movies {
  fmt.Printf("key: %s\n", key)
}

// 只获取 value
for _, value := range movies {
  fmt.Printf("value: %d\n", value)
}
```

## Map 的长度

> 我们依然可以使用 `len` 函数来计算 `Map` 的长度。

```go
movies := map[string]string{"肖申克的救赎": "1994", "当幸福来敲门": "2006"}
fmt.Println(len(movies))  // 2
```

## Map是引用类型

> `Map` 是引用类型，当其被赋值给一个新的变量时，新旧变量指向的是同一个底层数据结构，当改边其中任何一个的时候，另一个也会随之改变。当 `Map` 作为函数参数传递时也是如此.

```go
movies := map[string]string{"肖申克的救赎": "1994", "当幸福来敲门": "2006"}
fmt.Println(movies)     // map[当幸福来敲门:2006 肖申克的救赎:1994]

newMovies := movies
newMovies["肖申克的救赎"] = "1995"
fmt.Println(movies)     // map[当幸福来敲门:2006 肖申克的救赎:1995]
fmt.Println(newMovies)  // map[当幸福来敲门:2006 肖申克的救赎:1995]
```

## 空 Map

> `Map` 之间不能用 == 操作符来判断是否相等，应该使用循环来判断，判断 `Map` 是否为空可以使用 `map == nil` 。

