"use strict";

(function($) {
  var $item = $(".item");
  
  function addNegativeMarginToIntro() {
    var $bigIntroHeight = $(".big-column .intro"),
        $smallIntroHeight = $(".small-column .intro"),
        $jumbotronIntroHeight = $(".jumbotron .intro");
        
    $bigIntroHeight.css("margin-bottom", (($bigIntroHeight.height() + 30) * -1));
    $smallIntroHeight.css("margin-bottom", (($smallIntroHeight.height() + 30) * -1));
    $jumbotronIntroHeight.css("margin-bottom", (($jumbotronIntroHeight.height() + 30) * -1));
    
  };
  
  function itemHover(){
    var $intro = $(".intro");
    
    $intro.css("margin-bottom", 0);
  }
  
  $(function(){
    addNegativeMarginToIntro();
  });
})(jQuery);
