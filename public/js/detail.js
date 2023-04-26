var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper2 = new Swiper(".mySwiperRec", {
    grabCursor: true,
    pagination: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
             spaceBetween: 10,
             
        },
        1000:{
            slidesPerView: 3,
            spaceBetween: 20
            
        },
    },
  });