// Sign In form

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

// Map Button

function myFunction() {
  var id ='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652.1806977769256!2d90.372262449912!3d23.740934884518434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1469719155899" width="250" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>';
  document.getElementById("demo").innerHTML = (id);
   }
       

// Main_page images slider

//$(document).ready(function() {
//    $('.slideshow01').cycle({
    
//  });
//});

//$(document).ready(function () {
//        $('.slideshow01').cycle({
//            animation: 'fade',
//            controlsContainer: '.slideshow01'
//        });
//    });


//$(document).ready(function() {
//  $('.slideshow02').cycle({ 
//    fx:      'turnDown', 
//    delay:   -4000 
//  });
   
//});


//$(document).ready(function() {
//    $('.slideshow03').cycle({ 
//    fx:    'zoom', 
//    sync:  false, 
//    delay: -2000 
//  });
//});