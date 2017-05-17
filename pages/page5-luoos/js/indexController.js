app.controller("indexController",["$scope","$timeout","$http",function ($scope,$timeout,$http) {
    $scope.items = [
        {name:"推荐",src:"ion-paper-airplane",result:"true",page:"page/recommend.html"},
        {name:"发现",src:"ion-leaf",result:"",page:"page/find.html"},
        {name:"社区",src:"ion-coffee",result:"",page:"page/community.html"},
        {name:"我的",src:"ion-happy-outline",result:"",page:"page/my.html"},
    ];

    /*********跳转到搜索页面******/
    $scope.search = function () {
        mainNavi.pushPage("page/search.html")
    };

    /*************跳转到音乐界面*************/
    $scope.music = function () {
        mainNavi.pushPage("page/music.html")
    }


}]);
