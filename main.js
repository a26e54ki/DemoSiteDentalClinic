"use strict";
{
   const fvSwiper = new Swiper(".fv_swiper", {
      loop: true,
      autoplay: {
         delay: 5000,
      },
      effect: "fade",
      speed: 1000,
   })

   const gallerySwiper = new Swiper(".gallery_swiper", {
      loop: true,
      autoplay: {
         delay: 0,
      },
      breakpoints: {
         // スライドの表示枚数：430px以上の場合  
         1440: {
            slidesPerView: 4,
         },

         1024: {
            slidesPerView: 3,
         },

         430: {
            slidesPerView: 2,
         }
      },

      speed: 5000,
      slidesPerView: 1
   })

   const menuButton = document.querySelector(".header_menu-button");
   menuButton.addEventListener("click", () => {
      if (document.querySelector(".menu").classList.contains("disabled")) {
         document.querySelector(".menu").classList.remove("disabled");
         document.querySelector("body").classList.add("not-scroll");
         menuButton.textContent = "CLOSE";
      } else {
         document.querySelector(".menu").classList.add("disabled");
         document.querySelector("body").classList.remove("not-scroll");
         menuButton.textContent = "MENU";
      }
   })

   const menuItemButtons = document.querySelectorAll('a[href^="#"]');
   menuItemButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
         e.preventDefault();

         const target = document.querySelector(button.hash);
         const headerHeight = document.querySelector("header").clientHeight;
         const adjust = headerHeight;
         const offsetTop = window.scrollY + target.getBoundingClientRect().top - adjust;

         window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
         })
      });
   })
}