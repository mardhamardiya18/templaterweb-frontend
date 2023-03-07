var swiper = new Swiper(".myTechSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    pagination: false,
    autoplay: {
        delay: 800,
      },
    breakpoints: {
        768: {
            slidesPerView: 6,
             spaceBetween: 0,
        }
    }
  });