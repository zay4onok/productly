$(function () {
  $('.strategies__list').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  });
});
