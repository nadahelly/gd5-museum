// main-slide
var swiper = new Swiper(".slide-intro", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 정지,재생 버튼

$(".swiper-btn-play").on("click", function () {
  swiper.autoplay.start();
  return false;
});
$(".swiper-btn-stop").on("click", function () {
  swiper.autoplay.stop();
  return false;
});

//전시안내
var swiper = new Swiper(".show-contents", {
  slidesPerView: 4.1,
  spaceBetween: 20,
  pagination: {
    el: ".show-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".show-button-next",
    prevEl: ".show-button-prev",
  },
});
// calendar
// 추진사업안내
