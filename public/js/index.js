// ambil semua button yang memiliki kelas "nav-btn"
const buttons = document.querySelectorAll(".btn-tech");

// loop melalui setiap button dan tambahkan event listener klik pada setiap button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // hapus kelas "active" dari button yang sedang aktif
    const activeButton = document.querySelector(".btn-tech.active");
    activeButton.classList.remove("active");
    
    // tambahkan kelas "active" pada button yang diklik
    button.classList.add("active");
  });
});











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
    },
    navigation: {
        nextEl: "#nav-next",
      },
  });

  var swiper = new Swiper(".myStackSwiper", {
    slidesPerView: 3,
    grabCursor: true,
    pagination: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
             spaceBetween: 10,
             
        },
        1000:{
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
            
        },

        1300:{
            slidesPerView: 5,
            spaceBetween: 30,
            width: 1000
        }
    },
  
  });