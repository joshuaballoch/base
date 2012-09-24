$(document).ready(function() {
  var distance = $('.mid_container').offset().top,
    $window = $(window);
    
  
    
  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        // Your div has reached the top
        $(".mid_container").addClass("sticky");
        $(".lower_container").addClass("sticky2");
    }
  });
  $window.scroll(function() {
    if ( $window.scrollTop() <= distance ) {
        // Your div has reached the top
        $(".mid_container").removeClass("sticky");
        $(".lower_container").removeClass("sticky2");
    }
  });
  
});