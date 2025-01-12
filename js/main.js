$(function () {
  $('.reviews__list').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: 'unslick',
      },
    ],
  });
  $('.rent__slider').slick({
    dots: true,
    arrows: false,
    verticalSwiping: true,
    vertical: true,
  });
});
