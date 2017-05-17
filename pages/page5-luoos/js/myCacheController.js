/**
 * Created by Administrator on 2017/3/13.
 */
app.controller("myCacheController",["$scope",function ($scope) {
    $scope.titles = [
        {title:"1"},
        {title:"1"},
        {title:"1"},
        {title:"1"},
        {title:"1"},
    ];
    $scope.index = 0;
    /*点击上面的div  去切换旋转木马*/
    $scope.changeCarousel = function (index) {
        console.log(1);
        carousels3.setActiveCarouselItemIndex(index);
        $scope.index = index;
    };
    /*滑动旋转木马   去切换div*/
    $scope.changeDiv = function () {
        $scope.index = carousels3.getActiveCarouselItemIndex();
    };
}]);
