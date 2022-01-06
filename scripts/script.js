"use strict";

document.addEventListener('DOMContentLoaded', function () {

  // hero-slider
  
  const hero = new HeroSlider('.swiper-container');
  hero.start();

　// header-scroll-view

  const header = document.querySelector(".header");

  const navAnimation = function(el, inview) {
    if(inview) {
    header.classList.remove("triggered");
    }else {
    header.classList.add("triggered");
    }

  }

  const so3 = new ScrollObserver('.nav-trigger', navAnimation, {once: false});
});

// hero-slider
  
class HeroSlider {
  
  constructor(el) {
    this.el = el;
    this.swiper = this.initSwiper();
  }
  
    initSwiper() {
      return new Swiper(this.el, {
        loop: true,
        effect: "slide",
        slidesPerView: 1,
        speed: 1000,
  
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      });
    }
  
    start(options = {}) {

      options = Object.assign({
      delay: 5000,
      disableOnInteraction: false,
      }, options);

      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
       
    }
}

// mobile-menu

class menu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".menu-icon");
    this.DOM.container = document.querySelector(".wrapper");
    this.eventType = this.getEventType();
    this.addEvent();
  }

  getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  toggle() {
        this.DOM.container.classList.toggle("menu-open");
  }

  addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this.toggle.bind(this));
  }
}

new menu();

// page-top

jQuery(function() {
  let pagetop = $(".page-top");   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  // 100px scroll
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $("body,html").animate({
          scrollTop: 0
      }, 500); // 0.5s to top
      return false;
  });
});

// scroll-down

$(window).on('load resize',function(){
  //window height
  var targetY = $(window).height();
  
  //scroll down window height
  $('.scroll-down').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY}, 500); // 0.5s
    return false;
  });
});

// fade-in

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fade-in').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
     $(this).addClass('view');
    }
   });
  }
};