var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
             spaceBetween: 30,
             
        },
        1000: {
            slidesPerView: 3,
             spaceBetween: 30,
             
        },
    },
  });