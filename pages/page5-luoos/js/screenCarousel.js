app.controller("CarouselController1",["$scope",function ($scope) {
    $scope.next = function () {
        myCarousel.next({
            animation:"none",
            callback:function () {
                console.log("down")
            }
        });
    };
    $scope.prev = function () {
        myCarousel.prev({
            animation:"none",
            callback:function () {
                console.log("down")
            }
        });
    };

    var end;
    $scope.result = function(){
       end = setInterval(function () {
            /*getActiveCarouselItemIndex()：获得激活索引*/
            var index = myCarousel.getActiveCarouselItemIndex();
            if(index == 3){
                myCarousel.first();
            }else {
                myCarousel.next();
            };
        },2000);
    };

    $scope.result();
    $scope.stop = function () {
        window.clearInterval(end);
    }
    $scope.items = [
        {name:"1",style:"background-color: green"},
        {name:"2",style:"background-color: wheat"},
        {name:"3",style:"background-color: yellow"},
        {name:"4",style:"background-color: red"},
    ];

    $scope.change = function () {
        var other = {name:"5",style:"background-color: blue"};
        $scope.items.push(other);
    }
}]);
