# 一、盒模型

box:盒子，每个元素在页面上都会生成一个矩形区域

盒子类型：
1、行盒，display等于inline元素
2、块盒，display等于block元素
行盒在页面中不换行
块盒在页面上独占一行
display默认值为inline
常见的行盒元素 a img span vedio
盒子模型的内容从内到外依次为
## 1.内容 :content
width heigt 内容的宽高
## 2.填充 ：padding 内边距
盒子边框到盒子内容的距离 
padding-left
padding-right
padding-top
padding-bottom
padding : 上 右 下左
内容+填充区 = ** 填充盒(paddinbg-box) **
## 3.边框 :border
边框样式:border-style
边框宽度:border-width
边框颜色:border-color
## 4.外边距:margin 盒子与盒子之间的距离 

## 二、行盒
1.盒子沿着内容延伸
2.行盒不能设置宽高，因为内容取决于字体的大小和行高和字体类型来间接进行调整
3.对于padding,水平方向上有效，垂直方向上只会影响背景，没有占据空间
4、border 水平方向上有效，垂直方向上可以看到效果，但是不占据空间
5.margin 水平上有效，垂直方向上无效


## 三、行块盒
1.不是独占一行，盒模型中的所有属性都有效
dispaly:inline-block

html:5
! 的快捷键是生成html5

空白折叠 没有办法消除 行盒/行块盒的问题

## 四、可替换元素与非可替换元素
大部分元素，页面上显示的内容取决于元素的内容，非可替换元素div,p,span,a
还有一些元素不是，少部分元素，页面上显示的结果取决于元素的属性称之为可替换元素
img,video,audio,行盒 类似与行块盒
