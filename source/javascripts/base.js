$(document).ready(function() {
  // Scroll Distance for Sticky Header
  var $window = $(window);
  $window.scroll(function() {
    if ( $window.scrollTop() >= $('.upper_container').height() ) {
        // Your div has reached the top
        $(".mid_container").addClass("sticky");
        $(".lower_container").addClass("sticky2");
    }
  });
  $window.scroll(function() {
    if ( $window.scrollTop() <= $('.upper_container').height() ) {
        // Your div has reached the top
        $(".mid_container").removeClass("sticky");
        $(".lower_container").removeClass("sticky2");
    }
  });

  //basic function for all pictures
  $(".figure").hover(function(){
    var w = $(this).children('.picture').children('img').width();
    $(this).children('.picture').width(w);
    $(this).children('.picture').children('.overlay').toggle();
    $(this).children('.picture').children('.btn-group').toggle();
  });
  //pei button
  $(".pei").hover(function(){
    $(".show-divider").toggleClass("hover");
  });

});