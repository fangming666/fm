app.controller("communityController",["$scope","$timeout",function ($scope,$timeout) {
    $scope.titles = [
        {title: "关注"},
        {title: "热门"},
        {title: "最新"}
    ];

    $scope.items1 = [
        {src:"img/head5.jpg",title:"猪肉炖粉条",content:"10",fenSi:"55",music1:"img/music1.jpg",music2:"img/music2.jpg",music3:"img/music3.jpg",miaoShu1:"EveryThing",miaoShu2:"Listing",miaoShu3:"Heading"},
        {src:"img/head4.jpg",title:"土豆炖排骨",content:"10",fenSi:"55",music1:"img/qikan1.jpg",music2:"img/qikan3.jpg",music3:"img/qikan2.jpg",miaoShu1:"EveryThing",miaoShu2:"Listing",miaoShu3:"Heading"},
        {src:"img/head3.jpg",title:"醋溜土豆丝",content:"10",fenSi:"55",music1:"img/music2.jpg",music2:"img/qikan1.jpg",music3:"img/music1.jpg",miaoShu1:"EveryThing",miaoShu2:"Listing",miaoShu3:"Heading"},
        {src:"img/head2.jpg",title:"红烧茄子",content:"10",fenSi:"55",music1:"img/qikan4.jpg",music2:"img/music1.jpg",music3:"img/music3.jpg",miaoShu1:"EveryThing",miaoShu2:"Listing",miaoShu3:"Heading"},
        {src:"img/head1.jpg",title:"鱼香肉丝",content:"10",fenSi:"55",music1:"img/qikan2.jpg",music2:"img/qikan1.jpg",music3:"img/music2.jpg",miaoShu1:"EveryThing",miaoShu2:"Listing",miaoShu3:"Heading"},
        {src:"img/head6.jpg",title:"佛跳墙",content:"10",fenSi:"55",music1:"img/qikan1.jpg",music2:"img/music1.jpg",music3:"img/music3.jpg",miaoShu1:"EveryThing",miaoShu2:"Listing",miaoShu3:"Heading"}

    ];




    $scope.items2 = [
        {src: "img/head2.jpg",alt:"1",title:"房明你给我站住",bg:"img/bg1.jpg",left:"4天前更新",num1:"50",num2:"2",content:"“想念乌兰巴托的山顶，爆炸状的云海和美丽亲切的森林，那些日子总是觉得离神近些。”《无》这首歌的灵感源自乐队Gate to Otherside一次前往蒙古国的萨满溯源之旅，纯净而宽广。",type:1},
        {src: "img/head1.jpg",alt:"1",title:"明明一颗大白菜",left:"4天前更新",num1:"10",num2:"3",content:"我知道这世界上没有一首歌可以取悦所有人，但幸好这些歌可以满足我对平静生活的所有想象。这些轻描淡写的音乐和歌声，没有激昂，或者带着记忆中的伤痕，只是静静的在诉说此刻莫名的状态。",type:2},
        {src: "img/head3.jpg",alt:"1",title:"好大一只皮皮虾",bg:"img/bg2.jpg",left:"5天前更新",num1:"18",num2:"21",content:"如果有一天，我光彩不在，你是否还会为我倾尽美好，还是像大多数人一样躲在角落里，忘记过去的喧嚣。",type:1},
        {src: "img/head4.jpg",alt:"1",title:"亲爱的不二",bg:"img/bg3.jpg",left:"6天前更新",num1:"50",num2:"12",content:"你只是失眠而已，一只被欺负惯的小松鼠总是没有一个好的睡眠。",type:1},

    ];

    $scope.items3 = [
        {src: "img/head5.jpg",alt:"1",title:"所幸",bg:"img/bg4.jpg",left:"一分钟前更新",num1:"50",num2:"2",content:"当听到火车广播都开始播《成都》的时候，我甚至觉得民谣要占领世界了。虽然不是每个民谣歌手都能拿诺奖吧，但至少这两年中国内地民谣的势头越来越猛，每年都会有那么一两个大火的民谣歌手掀起一股浪，从此吃穿不愁。",type:1},
        {src: "img/head6.jpg",alt:"1",title:"只因小其实只猫",left:"两分钟前更新",num1:"10",num2:"3",content:"他开始说，自己只是一个喜欢唱歌的普通人。这种话术沉稳且符合时代变化的潮流，三十而立，浑不吝的赵小雷也渐渐变得谨慎。",type:2},
        {src: "img/head7.jpg",alt:"1",title:"阿瑟阿拉",bg:"img/bg5.jpg",left:"六分钟前更新",num1:"18",num2:"21",content:"时间总把人分开在夜晚的两端，这端是低头时的彳亍前行，那端是抬头后的满目苍穹。生活晃悠悠得厉害，过得不紧不慢。我们只好顺着时间的线索，漫无目的地滑向另外一个焕然一新的日子里。",type:1},
        {src: "img/head1.jpg",alt:"1",title:"爱要我去",bg:"img/bg6.jpg",left:"一小时前更新",num1:"80",num2:"12",content:"你只是失眠而已，一只被欺负惯的小松鼠总是没有一个好的睡眠。",type:1},

    ];




    $scope.index = 0;
    /*点击上面的div  去切换旋转木马*/
    $scope.changeCarousel = function (index) {
        carousels2.setActiveCarouselItemIndex(index);
        $scope.index = index;
    };
    /*滑动旋转木马   去切换div*/
    $scope.changeDiv = function () {
        $scope.index = carousels2.getActiveCarouselItemIndex();
    };




   /* $timeout(function () {
        carousels2.on('postchange', function (event) {
            $scope.index = event.activeIndex;
        })
    }, 5);*/
}]);
