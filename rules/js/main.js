

 $(window).scroll(function() {
		$('.scroll1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("visible bounceInRight");
			}
		});
	});

   $(window).scroll(function() {
        $('.scroll2').each(function(){
          if ($(this).offset().top < $(window).scrollTop()+500) {
            $(this).addClass('visible fadeIn');
          }
        });
      });

      $(window).scroll(function() {
        $('.scroll3').each(function(){
          if ($(this).offset().top < $(window).scrollTop()+800) {
            $(this).addClass('visible fadeIn');
          }
        });
      });


$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".go-to").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


     $("#feedback").click(function () {

     $('.popup-feedback').toggleClass("menu_state_open"); });

          $("#buy").click(function () {

     $('.popup-buy').toggleClass("menu_state_open"); });

      $(".close-btn").click(function () {
    $('.popup-buy').removeClass("menu_state_open");    
    $('.popup-feedback').removeClass("menu_state_open"); });