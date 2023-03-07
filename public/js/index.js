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

  var swiper = new Swiper(".myCategorySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,
    pagination: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
             spaceBetween: 10,
             
        }
    }
  });