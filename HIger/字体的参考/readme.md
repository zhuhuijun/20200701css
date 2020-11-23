## 1.文字
1. font-size
2. line-height
3. vertical-align
4. font-family

fontforge文字是通过软件做出来的，制作文字有几个参考线，不同的文字类型，参考线是不一样的，同一种文字参考线是一样的
1. text top顶线，ascent 
2. super 上基线
3. baseline 基线
4. sub 下基线
5. text bottom 底线 desgent
主要是起到文字对齐的作用
文字的相对大小 1000 2048 1024 金属框和文字的相对大小的比例
Consolas EM-size:2048  ascent1884 descent 514 2398/2048超过了框的高度，字体的大小2398，顶线和基线的距离是2398
设置字体的大小为200px 实际字体的高度200*2398/2048 
行盒和背景覆盖content-area

## 行高
顶线向上延伸的空间和底线向下延伸的空间，二者的空间是一样的，该空间叫gap,gap默认情况是字体设计者决定 的。上边的线叫top ,下边的叫bottom,top和bottom的叫做virtual-area
行高就是virtual-area 
line-hight:normal 使用默认的gap

## vertial-align
> 一个元素，如果子元素出现行盒，该元素内部也会产生参考线，决定参考线的属性font-size font-family,line-height

## 可替换元素和行块盒的基线
> 图片:基线位置位于图片的下外边距
> 表单元素：基线位置位于内容的底边
行块盒:
1、 方块盒最后一行有line-box ,用最后一行的基线作为行块盒的基线
2、如果行块盒内没有行盒，则使用底下外边距作为基线