$(document).ready(function() {
	$("#back_img").hide();

	$("#front_img").on("click", function(e) {
		e.preventDefault();
	}); 
	
	$('.about_erb').mouseenter(function() {
		$('#spack_head').stop().animate({ fontSize : '30px' });
		$('.about_erb').mouseleave(function() {
			$('#spack_head').stop().animate({ fontSize : '20px' });
			// // $('.about_erb').addClass('resize').fadeIn('slow', function() {			
			// });
		});
	});

	$(window).scroll(function(){	var scrollTop = 142; if($(window).scrollTop() >= scrollTop){	$('nav').css({	position : 'fixed',	top : '0'	});	} if($(window).scrollTop() < scrollTop){ $('nav').removeAttr('style');	}
});
});

