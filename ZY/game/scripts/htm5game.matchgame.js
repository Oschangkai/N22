/*
var cards = document.getElementById('cards');
anchor.onclick = function(event) {
if (this.clicked) {
if(event.preventDefault){
event.preventDefault();
}else{
event.returnValue =false;
}
} else {
this.clicked = true;
}
}*/


//随机排序函数，返回-1或1

//  翻牌功能的实现
function selectCard() {
    var $fcard=$(".card-flipped");
    //翻了两张牌后退出翻牌
    if($fcard.length<1)
    {
        return;
    }
    //alert($(this).data("pattern"));
    $(this).addClass("card-flipped");
//    若翻动了两张牌，检测一致性
    var $fcards=$(".card-flipped");
    if($fcards.length==2)
    {
       // checkPattern($fcards);
        setTimeout(function(){
        checkPattern($fcards);},700);
    }
}
//检测2张牌是否一致
function checkPattern(cards)
{
    var pattern1 = $(cards[0]).data("pattern");
    var pattern2 = $(cards[1]).data("pattern");
    //alert(pattern1);
    //alert(pattern2);
//    if(($("div.a"))!=($("div.b")))
//    {
//        $(cards).removeClass("card-flipped")
//    }
//    else
//    {
//        $(cards).addClass("card-removed")
//        $(cards).removeClass("card-flipped")
//    }
    $(cards).removeClass("card-flipped");
    if(($("div.a"))==($("div.b")))
    {
//        .bind
        $(cards).addClass("card-removed")
            .bind("webkitTransitionEnd",function(){
                $(this).remove();
    });
    }
}
