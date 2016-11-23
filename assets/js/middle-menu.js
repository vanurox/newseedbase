$(document).ready(function(){
	var middle_menu = $("#navigation-middle");
	var middle_menu_top = middle_menu.offset().top;
	$(window).on('scroll',function(){
		var cur_scroll = $(this).scrollTop();
		if(cur_scroll >= (middle_menu_top - 200))
		{
			middle_menu.addClass("navbar-fixed-top");
			$("#nav-container-mine").css("display","none");
		}else
		{
			middle_menu.removeClass("navbar-fixed-top");
			$("#nav-container-mine").css("display","block");
		}
	});



	// code for highlighting and making scroll



    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).parent('li').removeClass('active');
        })
        $(this).parent('li').addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navigation-middle div div ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        // if (refElement.position().top <= scrollPos) {
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation-middle ul li').removeClass("active");
            $(this).parent("li").addClass("active");
        }
        else{
            $(this).parent("li").removeClass("active");
        }
    });
}

});