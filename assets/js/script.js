
// Color en en Navbar


$(window).on("scroll", function () {
   var wn = $(window).scrollTop();
   if (wn > 700) {
      $(".navbar").css("background", "black");
   }
   else if (wn >50){
      $(".navbar").css("background", "rgb(33,37,41");
   }
   else {
      $(".navbar").css("background", "transparent");
   }
});

// Desaparecer en las tarjetas
$(".tarjetafoto").click(function(){
   $("p").toggle({
   })
})

// Agregar un mensaje al mandar formulario (Se puede mejorar con usar el nombre en el mensaje)
$("#boton").click(function(){
   alert("Muchas gracias por su mensaje, nuestro equipo lo contactará a la brevedad")
})