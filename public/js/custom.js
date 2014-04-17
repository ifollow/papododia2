// IF JS IS ENABLED, REMOVE 'no-js' AND ADD 'js' CLASS
jQuery('html').removeClass('no-js').addClass('js');

jQuery(document).ready(function($) {

	//ADD CLASS IE8
	if ($browserMSIE && $browserVersion === 8) {
		$('body').addClass('ie-8');	
	} else {}
	
	//FITVIDS
	$("body").fitVids();
	     
	//RESPONSIVE MENU
	$('header nav').meanmenu();
	
	//FULL HEIGHT RESIZE
	$(window).resize(function () {
	    triggerResize();
	});
	
	var triggerResize = function () {
	    var $window = $(window);
	    var windowHeight = $window.height();
	    var windowWidth = $window.width();
	    $('#header-container').css({
	        'height': windowHeight + 'px'
	    }).find('.toggle a').css({
	        'height': windowHeight + 'px'
	    });
	};
	

	//AUTOHEIGHT TEXTAREA
	jQuery('textarea.auto-height').flexText();

// hide alert
   $('.alert a').click(function() {
       $(this).closest('.alert').fadeOut();
   });
   
// tabs
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current').parents('div.work-post').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	})
// toggle
	$(".toggle span").click(function(){
		$(this).toggleClass("active");
		$(this).next("div").stop('true','true').slideToggle("slow");
	});
	
	//ISOTOPE LOADING ANIMATION
	$(".portfolio-template").delay(1200).queue(function(){
		$(this).css('background','none');
		$(this).dequeue();
	});
	
	//BLOG SLIDER
	jQuery(".slider.clearfix").each( function() {
		jQuery(this).bxSlider({
			pager: true,
			nextSelector: jQuery(this).closest( '.post-media' ).children( ".gallery-next" ),
			prevSelector: jQuery(this).closest( '.post-media' ).children( ".gallery-prev" ),
			nextText: "next",
			prevText: "prev"
		});
	});
	

	
	/*===================================================================*/
	/* RIGHT SIDEBAR MAIN
	/*===================================================================*/
	// IE8
	var $browserMSIE = $.browser.msie;
	var $browserVersion = parseInt($.browser.version, 10);
	
	//IE HIDDEN SIDEBAR TOGGLE
	var $browserMSIE = $.browser.msie;
	var $browserVersion = parseInt($.browser.version, 10);
	
	if ($browserMSIE && $browserVersion === 8 || $browserMSIE && $browserVersion === 9) {
	$(document).on("click", '.ie #header-container' , function(){ 
		if ($('#theme-wrapper').hasClass('ie-side-menu')) {
			$('#theme-wrapper').removeClass('ie-side-menu');
		 	$('.hidden-sidebar').css('display','none').css('z-index','-1');
		 	$('.menu-icon').removeClass('close');
		 } else {
		 	$('#theme-wrapper').addClass('ie-side-menu');
		 	$('.hidden-sidebar').css('display','block').css('z-index','99');
		 	$('.menu-icon').addClass('close');
		} 
	 });
	} else {}
	//END IE 
	
	
	//CLICK EVENTS
	var ua = navigator.userAgent,
		clickevent = (ua.match(/iPad/i) || ua.match(/iPhone/i) || ua.match(/Android/i)) ? "touchstart" : "click";
		    console.log(clickevent);
		    
	//MENU BUTTON TRIGGER
	$(document).on(clickevent, '#header-container', function(event){
	event.preventDefault();
		if ($('#theme-wrapper').hasClass('side-menu')) {
		  closeMenu();
		} else {
		  openMenu();
		}
	});
	 
	//OPEN
	function openMenu(){
	 	$('.hidden-sidebar').css('display','block');
	 	$('.menu-icon').addClass('close');
	 	$('#theme-wrapper').addClass('side-menu');
	 	$('.safari #theme-wrapper').addClass('no-flick');
	 	$('.safari #header-container').addClass('no-flick');
	 	setTimeout(function(){$('.hidden-sidebar').css('z-index','0');},300);
	}
	
	//CLOSE 
	function closeMenu(){
		$('.hidden-sidebar').css('z-index','-1');
		$('.menu-icon').removeClass('close');
	    $('#theme-wrapper').removeClass('side-menu');
	    $('.safari #theme-wrapper').removeClass('no-flick');
	    $('.safari #header-container').removeClass('no-flick');
		setTimeout(function(){ $('.hidden-sidebar').css('z-index','-1'); },300);
	 }
	 
	 	
	// TIPTIP
	$(function(){
	$(".tiptip").tipTip({maxWidth: "auto", defaultPosition: "right" });
	});
	
	// height content 
	var contentbar;
	contentbar = $("#theme-wrapper").height();
	$(".page-only").css('min-height', contentbar);
	
});