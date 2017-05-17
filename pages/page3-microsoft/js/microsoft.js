/**
 * Created by Administrator on 2017/1/5.
 */


$(function() {

    /*************头部导航菜单**************/
    var $headerLi = $(".headerLi");
    for(var i in $headerLi) {
        $headerLi.eq(i).click(
            function() {
                $headerLi.css("border","0px");
                $(this).css("border","1px dotted black")
            }
        )
    }

    $("#mySearch").focus(function() {
        $headerLi.css("border","0px");
    });

});
