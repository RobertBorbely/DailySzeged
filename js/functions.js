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
  
  function MobileMenuInit() {
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");
  
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function(){
        if($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    });  
  }
  
  $(function(){
    addNegativeMarginToIntro();
    MobileMenuInit();
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });
  
    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });
  
    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });
})(jQuery);
