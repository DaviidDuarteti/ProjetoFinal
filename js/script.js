    var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,

      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        
      },

    autoplay:{
        delay: 2000,

        disableOnInteraction: false,
       
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    var swiper2 = new Swiper(".mySwiper2", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay:{
          delay: 2000,
  
          disableOnInteraction: false,
         
        },
        pagination: {
          el: ".swiper-pagination2",
        },
      });


