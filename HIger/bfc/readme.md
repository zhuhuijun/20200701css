## 盒子的位置
1. 左浮动 左上排布
2. 右浮动 右上浮动
3. 浮动盒子的顶边不得高于上一个盒子的顶边
4. 若剩余空间无法无法放下浮动的盒子，则该盒子向下移动，直到有充足的空间放下盒子，然后再向左或右移动

## 行高的取值
1. px,像素值
2. em
3. 不带单位

## 背景色
背景色填充的是边框盒
画布:最小高度是视口的高度，宽度是视口的最小高度
** HTML
覆盖画布

** BODY
背景覆盖边框盒，如果html没有背景，body要覆盖画布

** 关于背景图
1. body的背景图的宽度百分比，是相对于视口的
2. 背景图的百分比高度是相对于html的元素的
3. background-position 水平上是相对于视口的
4. 背景图的纵向位置百分比，预设值，相对于网页的高度
除非给html设置背景，就一切都正常了

## 多个行盒垂直方向上的对齐
1. 给没有对齐的元素使用，行盒 vertical-align


## 图片白边
1. 图片的父元素是块盒，块盒高度自动，图片底部和父元素底边会出现空白的边，不加边框感觉不出来
2. 设置父元素字体大小为0,有副作用
3. 图片设置为块盒