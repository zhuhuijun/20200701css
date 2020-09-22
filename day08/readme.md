# 盒子模型应用

## 1.改变宽高范围
width height 设置的内容的宽高
css3 box-sizing
```
        .item2{
            width: 246px;
            height: 46px;
            line-height: 46px;
            color: #a7a7a7;
            background: #2d2e36;
            padding-left: 46px;
            box-sizing: border-box;
            margin-top: 5px;
        }
```
## 2.改变背景覆盖范围
默认情况下背景覆盖边框盒
```
        div{
            background: #008c8c;
            /* 进行覆盖范围的修改 */
            background-clip: content-box;
            width: 100px;
            height: 100px;
            border: 20px dashed red;
            padding: 30px;
        }

```
## 3.溢出处理
overflow 控制内容溢出边框盒后的处理
```
    <style>
        div{
            width: 300px;
            height: 80px;
            padding: 20px;
            border: 3px dashed;
            overflow-y: scroll;/*hidden,auto*/
        }
    </style>
```
## 4.断词处理
word-break:断词规则，会影响文字在什么地方截断
work-break:normal  CJK 中日韩(文字位置截断)  其它是在单词处截断
break-all:截断所有
keep-all:只能在单词处截断
## 5.空白处理

```
    <style>
        li{
            list-style: none;
            border-bottom: 2px dashed #ccc;
            border-left: 3px solid #008c8c;
            line-height: 2;
            padding-left: 10px;
            margin:1em 0;
            width: 300px;
            /*处理换行圆点，只能处理单行文本  */
            white-space: nowrap;
            overflow:hidden;
            text-overflow: ellipsis;
        }
    </style>

```