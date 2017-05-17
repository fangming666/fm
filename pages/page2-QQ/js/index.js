/**
 * Created by Administrator on 2017/3/31.
 */
/************实现图片轮播**********/
var num=2;
var times = setInterval(function () {
    if(num%2){
        $(".item1").addClass("item-active");
        $(".cursor1").addClass("carousel-cursor-active");
        $(".item2").removeClass("item-active");
        $(".cursor2").removeClass("carousel-cursor-active");
        num++;
    }else {
        $(".item1").removeClass("item-active");
        $(".cursor1").removeClass("carousel-cursor-active");
        $(".item2").addClass("item-active");
        $(".cursor2").addClass("carousel-cursor-active");
        num++;
    }

},3000);
console.log(times);
/**鼠标上移图片停止轮播**/
$("#carousel").mouseover(function () {
    clearInterval(times);
});
/**鼠标离开继续**/
$("#carousel").mouseout(function () {
    times = setInterval(function () {
        if(num%2){
            $(".item1").addClass("item-active");
            $(".cursor1").addClass("carousel-cursor-active");
            $(".item2").removeClass("item-active");
            $(".cursor2").removeClass("carousel-cursor-active");
            num++;
        }else {
            $(".item1").removeClass("item-active");
            $(".cursor1").removeClass("carousel-cursor-active");
            $(".item2").addClass("item-active");
            $(".cursor2").addClass("carousel-cursor-active");
            num++;
        }

    },3000);
});
/*****鼠标点击小圆点进行切换*******/
$(".cursor1").click(function () {
    $(".item1").addClass("item-active");
    $(".cursor1").addClass("carousel-cursor-active");
    $(".item2").removeClass("item-active");
    $(".cursor2").removeClass("carousel-cursor-active");
    num=2;
});
$(".cursor2").click(function () {
    $(".item2").addClass("item-active");
    $(".cursor2").addClass("carousel-cursor-active");
    $(".item1").removeClass("item-active");
    $(".cursor1").removeClass("carousel-cursor-active");
    num=1;
});

/****************屏幕滚动事件***********/
window.onscroll = function () {
    console.log(document.body.scrollTop);
    //标题的固定
    if(document.body.scrollTop >= 800){
        $("header").css({position:"fixed",background:"#fff"});
    }else {
        $("header").css({position:"relative",background:"none"});
    }
    //第三个固定背景图的三个图片显示
    if(document.body.scrollTop >= 3700){
        $(".img1").addClass("show1");
        $(".img2").addClass("show2");
        $(".img3").addClass("show3");
    }else if(document.body.scrollTop <= 3500){
        $(".img1").removeClass("show1");
        $(".img2").removeClass("show2");
        $(".img3").removeClass("show3");
    }
};