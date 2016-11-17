var sections = $('section')
  , nav = $('#navigation-home .navbar-fixed-top')
  , nav_height = nav.outerHeight();





$(document).ready(function(){

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  var first_section_height = $("#home").outerHeight();
  // console.log(first_section_height);
  if(cur_pos >= (first_section_height- 150))
  {
    $("#navigation-home #nav-container-mine").addClass("navbar-inverse");
    // $("#navigation-home .navbar-fixed-top ul.navbar-nav ")
  }else
  {
    $("#navigation-home #nav-container-mine").removeClass("navbar-inverse");
  }
 
});


  $('ul.nav li a').on('click', function () {
    var $el = $(this);
    var id = $el.attr('href');
      // console.log(nav_height);
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height - 50
    }, 1000);
    
    return false;
  });


});