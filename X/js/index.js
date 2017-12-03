

(function() {
  var $menu = $("#menu"),
    $navigation = $("#navigation"),
    
    $site = $("#site");

  $menu.on("click", function() {
    var $this = $(this);

    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $navigation.removeClass("slide-right");
      
      $site.removeClass("slide-right");
    } else {
      $this.addClass("active");
      $navigation.addClass("slide-right");
      $site.addClass("slide-right");
    }
  });
}.call(this));

$('#top').click(function () {
           $("html, body").animate({
               scrollTop: 0
           }, 600);
           return false;
       });

