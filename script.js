var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
// var category is the class of whatever we are clicking
    $('.nav li').removeClass('active'); 
    $(this).addClass('active');
// basically making the nav bars pink when clicked and removing the pink from ones not clicked
	$('.thumbnail').removeClass('selected');
    if (category === 'nav-consumer') {
    											// conditionals that add pink border to thumbnails that are clicked, and remove from other classes
    	$('.consumer').addClass('selected');
    }else if (category === 'nav-mobile') {
    	
    	$('.mobile').addClass('selected');
    }else if (category === 'nav-enterprise') {
    	
    	$('.enterprise').addClass('selected');
    }else if (category === 'nav-commerce') {
    	
    	$('.commerce').addClass('selected');
    }		
  });
};
 
$(document).ready(main);
// storing all behavior in function called main
// important that it runs after page loaded 