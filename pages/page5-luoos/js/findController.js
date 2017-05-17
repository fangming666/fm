app.controller("findController",["$scope","$timeout","$http",function ($scope,$timeout,$http) {
    $scope.imgs = [
        {src:"img/qikan1.jpg",alt:"1",content1:"好好",content2:"18个期刊"},
        {src:"img/qikan2.jpg",alt:"1",content1:"温柔",content2:"6个期刊"},
        {src:"img/qikan3.jpg",alt:"1",content1:"如烟",content2:"12个期刊"},
        {src:"img/qikan4.jpg",alt:"1",content1:"步步",content2:"5个期刊"},
    ];
    $scope.imgs2 = [
        {name:"盯鞋"},
        {name:"史诗"},
        {name:"爵士"},
        {name:"民谣金属"},
        {name:"韩国"},
        {name:"民乐"},
    ];
    $scope.imgs3 = [
        {content:"单曲",icon:"ion-ios-musical-notes"},
        {content:"文章",icon:"ion-ios-book-outline"},
        {content:"视频",icon:"ion-ios-videocam-outline"},
        {content:"活动",icon:"ion-ios-paw-outline"},
    ]
    /**********下拉刷新*********/
    $scope.items = [];
    $scope.load = function($done) {
        $timeout(function() {
            $http.jsonp('')
                .success(function(data) {
                    $scope.items.unshift({
                        desc: data,
                        rand: Math.random()
                    });
                })
                .error(function() {
                    $scope.items.unshift({
                        desc: 'No data',
                        rand: Math.random()
                    });
                })
                .finally(function() {
                    $done();
                });
        }, 1000);
    };
}]);
