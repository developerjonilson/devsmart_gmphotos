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

// Start Gallery:

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
