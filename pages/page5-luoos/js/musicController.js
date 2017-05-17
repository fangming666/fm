/**
 * Created by Administrator on 2017/3/13.
 */
app.controller("musicController",["$scope",function ($scope) {
    $scope.back = function () {
        mainNavi.popPage("");
    };
    $scope.items = [
        {title:"Hurt",content:"回去告诉你妈妈，山谷中再也没有枪声了",src:"img/musicContent.jpg"}
    ];

   //  var index = 0;
   // var start = function (index) {
   //     setInterval(document.getElementsByClassName("myMusic")[0].style = "transform:rotate("+index+")"
   //     ,1000)
   // };
   //  start();
    $scope.changePlayState = function (){
        var pause = document.getElementsByClassName("pause")[0];
        var musicBgImg = document.getElementsByClassName("myMusic")[0];
        var musicBtn =document.getElementById("musicBtn");
        if(pause.paused){
            pause.play();
            musicBtn.setAttribute("src","img/stop.png");
            setInterval(function () {
                var current=pause.currentTime;
                var total=pause.duration;
                var percent=current/total;
                var deg=percent*360*5;
                musicBgImg.style.webkitTransform = "rotate("+deg+"deg)";
            },80);

        }else{
            pause.pause();
            musicBtn.setAttribute("src","img/play.png");
        }
    };
}]);



