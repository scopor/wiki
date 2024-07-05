Python 是一门 `面向对象` 的 `解释型` 高级编程语言，是 `强类型` 的动态脚本语言，`强类型` 意味着不需要显式声明变量的类型，解释器会根据赋给变量的值自动推断其类型。

## 常见 BUG

### 无效字符

Python 中的符号必须使用英文模式下的，如果使用了中文，就会产生无效字符错误，比如：

```python
def print_hi(name):
    print(f'Hi, {name}')


if __name__ == '__main__':
    print_hi(“PyCharm")
```

编程工具会提示：`Unresolved reference 'PyCharm'`，如果直接运行也会报错：`SyntaxError: invalid character '“' (U+201C)`

### 缩进错误

Python是严格执行缩进的，如下代码会拿到一个缩进错误：`IndentationError: expected an indented block after 'if' statement ...`

```python
def print_hi(name):
    print(f'Hi, {name}')


if __name__ == '__main__':
print_hi("PyCharm")
```

### 语法错误

语法错误也是比较常见的错误，经常会打印：`SyntaxError: invalid syntax`

```python
def print_hi(name):
    print(f'Hi, {name}')


if __name__ == '__main__':
    print_hi("PyCharm")print_hi("PyCharm")
```

### 命名错误

变量事先需要定义，否则会报错：`NameError: name 'PyCharm' is not defined`

```python
def print_hi(name):
    print(f'Hi, {name}')


if __name__ == '__main__':
    print_hi(PyCharm)
```

