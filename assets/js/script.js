$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
           $('.navbar').addClass('box-hover');
           $('.navbar').removeClass('barra')
        } else {
           $('..navbar').removeClass('box-hover');
        }
    });
  });
  