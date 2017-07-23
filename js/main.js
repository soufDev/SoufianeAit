$(function () {
	
	// Change Header Height
	$('.intro').height($(window).height());
	$(window).resize(function() {$('.intro').height($(window).height());})

	// Adjust intro item Center
	$('.intro .wrapper').css('marginTop', ($(window).height() - $('.wrapper').height()) / 2.4 );

	$('.intro .welcome').css('paddingTop', ($(window).height() - $('.welcome').height()) / 2 );

  	$(window).resize(function(){
  		$('.intro .wrapper').css('marginTop', ($(window).height() - $('.wrapper').height()) / 2.4 );
    	$('.intro .welcome').css('paddingTop', ($(window).height() - $('.welcome').height()) / 2 );
  	})


});