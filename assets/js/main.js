$(document).ready(function($){
	
			var typed = new Typed(".type", {
		strings: ["My Name is Zahid Hassan",
			"I'm a Graphic designer",],
		typeSpeed:40,	
		backSpeed:40, 
		loop:true
	});
	
	
	
	
	$('#bar1').barfiller({

	  // color of bar
	  barColor: '#117bfb',

	  // shows a tooltip
	  tooltip: true,

	  // duration in ms
	  duration: 1000,

	  // re-animate on resize
	  animateOnResize: true,

	  // custom symbol
	  symbol: "%"
  
	});
	$('#bar2').barfiller({

	  // color of bar
	  barColor: '#117bfb',

	  // shows a tooltip
	  tooltip: true,

	  // duration in ms
	  duration: 1000,

	  // re-animate on resize
	  animateOnResize: true,

	  // custom symbol
	  symbol: "%"
  
	});
	$('#bar3').barfiller({

	  // color of bar
	  barColor: '#117bfb',

	  // shows a tooltip
	  tooltip: true,

	  // duration in ms
	  duration: 1000,

	  // re-animate on resize
	  animateOnResize: true,

	  // custom symbol
	  symbol: "%"
  
	});
	$('#bar4').barfiller({

	  // color of bar
	  barColor: '#117bfb',

	  // shows a tooltip
	  tooltip: true,

	  // duration in ms
	  duration: 1000,

	  // re-animate on resize
	  animateOnResize: true,

	  // custom symbol
	  symbol: "%"
  
	});
	
	$('.sclopy').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		easing: 'swing'
	});
	
	//scroll
	$(".scroll").click(function(){
		$("html,body").animate({
			scrollTop:0
		},500);
		
	});
	//Responsive menu
	$(function(){
		$('.slick').slicknav({
			'label':"",
			'appendTo':'.header-area'
		});
	});
});

		$(window).on("scroll", function() {
					if($(this).scrollTop()>300){
						$(".scroll").fadeIn();
					}
					else{
						$(".scroll").fadeOut();
					}
			
			
					if($(window).scrollTop()) {
						  $('.header-area').addClass('black');
					}

					else {
						  $('.header-area').removeClass('black');
					}
			  })