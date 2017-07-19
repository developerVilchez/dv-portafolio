
$( _=>{
var navOffSet = $('nav').offset().top;
	$(window).scroll(()=>{
		var scrollPos = $(window).scrollTop();
		console.log(scrollPos);
		if(scrollPos>=navOffSet){
			$('nav').addClass("fixed");
		}else {
			$('nav').removeClass("fixed");
		}


	})



	
	$('a[href*="#"]').on('click', function(e) {
  		e.preventDefault();
  	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
	  
});
	


	
	
	$('#iconMobile').on('click',()=>{
		$('.menuMobile').slideToggle();

	})

	$('.menuMobile').on('click','li',()=>{
		$('.menuMobile').slideToggle();
	})




	





});
