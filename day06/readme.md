# 选择器

## 简单选择器

1. ID 选择kkd
2. 类选择器
3. 元素选择器
4. 通配符选择器
*号 所有元素
```
属性中包含b的
[class~="b"]{
    font-size: 2em;
}
```
5. 属性选择器
6. 伪类选择器
link:超链接未访问时的状态
visited:超链接访问过后的状态
hover:鼠标悬停状态
active:激活状态，鼠标按下
7. 伪元素选择器
before
after

## 选择器的组合
1. 并且
```
p.red{
    color:red
}
```
2. 后代元素
```

.red li{
    color: #008c8c;
}

```
```
.abc .bcd{

}
```
3、子元素

