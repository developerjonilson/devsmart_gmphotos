$('.owl-carousel').owlCarousel({
  loop:true,
  margin:50,
  center: true,
  autoWidth:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
          nav:false,
          loop:true
      }
  }
})


var owlCarousel = $('.carousel-marriage');
$('#marriage1').on('shown.bs.modal', function (event) {
  owlCarousel.owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4
  });
});
$('#marriage1').on('hidden.bs.modal', function (event) {
  owlCarousel.data('owlCarousel').destroy();
  owlCarousel.find('.owl-stage-outer').children().unwrap();
});
$('.carousel-marriage').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4
});
