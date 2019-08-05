$(document).ready(function() {
       $('html, body').hide();

       if (window.location.hash) {
           setTimeout(function() {
               $('html, body').scrollTop(0).show();
               $('html, body').animate({
                   scrollTop: $(window.location.hash).offset().top
                   }, 1000)
           }, 0);
       }
       else {
           $('html, body').show();
       }
   });
