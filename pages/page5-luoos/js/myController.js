/**
 * Created by Administrator on 2017/3/9.
 */
app.controller("myController",["$scope",function ($scope) {
    $scope.arr = [
        {content:"我的收藏",clicks:"page/my/myCache.html"},
        {content:"我的缓存",clicks:"page/my/mySubscribe.html"},
        {content:"我的订阅",clicks:"page/my/myCollect.html"},
    ];
    $scope.arr1 = [
        {content:"定时关闭"},
        {content:"意见反馈"},
        {content:"账号绑定"},
        {content:"设置"}
    ];

    function clicks(index) {
        mainNavi.pushPage($scope.arr[index].clicks);
    }
    $scope.myNews = function () {
        mainNavi.pushPage("page/my/myNews.html")
    };
}]);
