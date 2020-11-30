


$(document).ready(function(){

    	
		
		// Smooth scroll for the navigation menu
		$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		  // On-page links
		  if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		  ) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			  event.preventDefault();
			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1600, function() {
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { 
				  return false;
				} else {
				  $target.attr('tabindex','-1'); 
				  $target.focus();
				};
			  });
			}
		  }
		});



        // go top
        $(window).scroll(function(){
            if($(this).scrollTop()>300){
                document.querySelector('.goto').style.visibility = "visible";
                $('.goto').fadeIn();
            }else{
                $('.goto').fadeOut(); 
            }
        });
    
        $('.goto').click(function(){
            $('html, body').animate({scrollTop:0}, 1000)
        })
    


    $(".filter-btn").click(function(){
        var value = $(this).attr('data-filter');

        if( value == "all"){
            $('.filter').fadeIn(1000);
        }else{
            $('.filter').not('.'+value).hide(700);
            $('.filter').filter('.'+value).show(700);
        }
    });

    $('.filter-btn').on('click', function() {
        $(".filter-btn").removeClass('activ');
        $(this).addClass('activ');
      });
    
});