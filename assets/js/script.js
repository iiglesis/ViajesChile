
// Tratando que funcione
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

// Desaparecer
$(".card").click(function(){
   $("p").toggle({
   })
})

// Agregar un mensaje al mandar formulario (Se puede mejorar con usar el nombre en el mensaje)
$("#boton").click(function(){
   alert("Muchas gracias por su mensaje, nuestro equipo lo contactará a la brevedad")
})