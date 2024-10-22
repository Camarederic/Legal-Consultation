$(function () {
  $(".slider__inner").slick({
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="icons/angle-right.svg"></button>',
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="icons/angle-left.svg"></button>',
    infinite: false,
  });

  $("select").styler();
});
