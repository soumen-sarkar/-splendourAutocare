$(window).load(function(){
	
	//Image carousel
	$('.carousel').carousel({
		//interval: 4000
	})
	
	//Offer carousel
	$('.offerSlide').carousel({
		//interval: 4000
	})
	
	//Script for Machinery carousel
	var owl = $("#machineryCarousel");	
		owl.owlCarousel({
		autoPlay : 500000000000000000000000000000000,	
		items : 4,
		itemsDesktop : [1200,3],
		itemsDesktopSmall : [991,4],
		itemsTablet : [767,3],
		itemsTabletSmall : [480,2],
		itemsMobile : true,
		pagination : false,
		navigation : true	
	});
	
	//Script for nav button animation
	$(".navigation .navbar-toggle").click(function(){
		$(this).toggleClass("active");
	});
	
	//Script for hotspot tooltip
	$('.hotSpot').mouseenter(function() {
        $(this).find('.toolTipData').stop().fadeIn();			
    });
	$('.hotSpot').mouseleave(function() {		
		$(this).find('.toolTipData').stop().fadeOut();
    });
	
	//Script for car zoom
	
	$('.hotSpot').on('click', function() {    	
		$('.toolTipData').hide();
		$('.closeOverlay').css({"display": "block"});
		$('.carImage').css({"transform": "scale(2,2)"});		
		$('.spot').hide();
		$(this).find('.spot').show();		
		
		$(this).find('.spotTips').show();
		$('.tipsInfoContainer').hide();
    });
	
	$('.hotSpot .spotTips').on('click', function() {
		alert('Hello');
		//$(this).offsetParent()
		//$(this).find('.tipsInfoContainer').show();		
    });	

	$(".closeOverlay").click(function() {
		$('.spot').show();
		$('.spotTips').hide();
		$('.closeOverlay').css({"display": "none"});
		$('.carImage').css({"transform": "scale(1,1)", "top": "0px", "left": "0px"});
	});
	
});	
