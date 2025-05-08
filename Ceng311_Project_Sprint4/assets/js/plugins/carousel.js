// This script initializes the Slick carousel plugin with autoplay, fade effect, and navigation for the slideshow container
$(document).ready(function () {
  $(".slideshow-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    fade: true,
  });
});
