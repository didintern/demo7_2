


/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

      



$('#myContainer').multiscroll({
            	// anchors: ['first', 'second', 'third'],
            	menu: '#menu',
            	navigation: true,
            	navigationTooltips: ['COMMUNICATION DESIGN', 'EDUCATION DESIGN', 'MOVEMENT DESIGN', 'BUSINESS DESIGN', 'SOCIAL DESIGN', 'THOUGHT DESIGN'],
            	loopBottom: true,
            	loopTop: true
            });


$('.ms-section').mouseenter(function(){
    $(this).find('.ms-overlay').fadeIn(1000);
})
$('.ms-section').mouseleave(function(){
    $('.ms-overlay').fadeOut(500);
})


  
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends


