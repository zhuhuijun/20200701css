# 浮动
1.文字环绕
2.横向排列
2.更好的兼容性

left :父元素的容器中靠左上
right:右上
默认值：none
1.浮动的元素必定是块盒，强制修改为display:block
定位也一定是块盒，
2.浮动元素的包含块和常规流一样，为父元素的内容盒
3.宽度为auto时，常规流是要撑满的，而浮动是适应内容宽度的,没有要求要吸收多余的
4.高度为auto时与常规流一致,是适应内容高度的
3.margin:auto 浮动中表示为0
4.边框,内边距百分比的设置与常规流一致


## 盒子排列

1.左浮动盒子靠上靠左排列
2.右浮动盒子靠上靠右排列
3.浮动盒子在包含块中排列时，避开常规流块盒
4.常规流块盒在排列时完全无视浮动盒子
5.行盒在排列时会
6.外边距合并不会发生
> 如果文字直接在块盒中浏览器会给他生成一个行盒，会生成一个匿名行盒


## 高度坍塌
造成网页布局错乱的根源
常规流盒子的自动高度，外边容器在计算高度时不会考虑浮动盒子
解决的方法是清除浮动
涉及的css属性是clear
- 默认值是:none
- left：清除左浮动，该元素必须出现在前面所有左浮动盒子的下方 
- right:清除右浮动，该元素必须出现在前面所有右浮动盒子的下方 
- both:清除所有浮动