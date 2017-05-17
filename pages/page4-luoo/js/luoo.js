/*头部位置PC端的时候搜索框的焦点事件*/
var $search = $("#search");
$search.focus(function() {
    $search.css({width:"100%"})
});
$search.blur(function () {
    $search.css({width:"70%"})
});

/********原创区域的时间更新******/
var $data = new Date();
var $oriData  = $("#oriData");
var $year = $data.getFullYear();
var $mouse = $data.getMonth()+1;
var $day = $data.getDate();
$oriData.html($year+"-"+$mouse+"-"+$day);
