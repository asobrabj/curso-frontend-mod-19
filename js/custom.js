// instancia jquery e evita conflitos
// jQuery( function($){

$(document).ready(function () {

   /* $('.owl-carousel').owlCarousel();*/
   /* remover o botão <> */
   $('.owl-carousel').owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,

      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 3,
            nav: false
         },
         1000: {
            items: 5,
            nav: true,
            loop: false
         }
      }
   })

   /* botão comprar */
   $('.featured-item a').addClass('btn btn-success stretch-link');
   /* efeito nas imagens destaques - seletor */
   $(".btncomp").on("mouseover", function() {
      $(this).css({
         'color': '#157347',
         'background-color': '#fff',
         'border-color': '#656466'});
       
  }).on("mouseout", function() {
        $(this).css({
         'color': '#fff',
         'background-color': '#157347',
         'border-color': 'none'});
  });
    
/* faz inclusao de aviso novos lancamentos*/
$('.launch').attr('class', 'lancamento');
/* adiciona o span de lancamento */
$('.lancamento').append('<span><i>lançamento</i></span>');

/* sem estilo no ul  */
$('.footer-menu ul').css({
   'align-items':'center',
   'list-style': 'none',
});

$('.social-icons ul').css({
         'list-style': 'none'
      });
  


   //let titulos = $('h4') // tag

   //let itens = $('.featured-item') // class

   //let destaques = $('#featured') // id

   //console.log(titulos.first());

   // Configuração de produtos

   //$('.featured-item a').addClass('btn btn-dark stretch-link');

   //$('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   // $('.featured-item:first h4').css('color', '#f00')

   /*$('.featured-item h4').dblclick(function () {

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });

   });*/

   /*
    * Manipulação de eventos
    */

   /*$('.featured-item a').on('blur', function (event) {

      event.preventDefault();

      alert('Produto esgotado');

   })*/


})
