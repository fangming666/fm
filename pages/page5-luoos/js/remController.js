/**
 * Created by Administrator on 2017/3/9.
 */
app.controller("remController",["$scope","$timeout","$http",function ($scope,$timeout,$http) {
    /****图片轮播小原点数组*****/
    $scope.circle=[
        {data:"0",class:"active"},
        {data:"1",class:""},
        {data:"2",class:""},
        {data:"3",class:"a"},
    ];
    /********图片数组1********/
    $scope.imgs1=[
        {src:"img/lunbo1.jpg",alt:"lunbo1",class:"item active"},
        {src:"img/lunbo2.jpg",alt:"lunbo2",class:"item"},
        {src:"img/lunbo3.jpg",alt:"lunbo3",class:"item"},
        {src:"img/lunbo4.jpg",alt:"lunbo4",class:"item"},

    ];
    /********图片数组2********/
    $scope.imgs2=[
        {src:"img/music1.jpg",alt:"lunbo1",content:"vol.897 夜的肖邦"},
        {src:"img/music2.jpg",alt:"lunbo1",content:"vol.896 我们终将奔赴向前"},
        {src:"img/music3.jpg",alt:"lunbo1",content:"vol.895 两个前男&女友"},
    ]
    /********图片数组2********/
    $scope.imgs3=[
        {src:"img/music4.jpg",alt:"lunbo1",content:"vol.897 夜的肖邦"},
        {src:"img/music5.jpg",alt:"lunbo1",content:"vol.896 我们终将奔赴向前"},
        {src:"img/music6.jpg",alt:"lunbo1",content:"vol.895 两个前男&女友"},
    ];


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
