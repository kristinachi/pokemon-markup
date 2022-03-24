jQuery(document).ready((function () {
    $(".pokemon-slider").slick({
        centerMode: !1,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
    });
}));
//# sourceMappingURL=my.js.map
