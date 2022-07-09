import { Navigation, Swiper, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

/**
 Входящие араметры:
  sliderElem — контейнер swiper-а
 slidesPerView = { md?: number, hg?: number, fl?: number, mx?: number }
 */

export default class Slider {
  swiper;

  constructor(sliderElem, slidesPerView, btnPrev, btnNext, paginationElem, customGap, isLoop) {

    const gap = customGap ? +customGap : 30;

    this.swiper = new Swiper(sliderElem, {
      slidesPerView: slidesPerView.mb || slidesPerView.md || slidesPerView.hg || slidesPerView.fl || slidesPerView.mx,
      lazy: true,
      keyboard: true,
      spaceBetween: 16,
      loop: isLoop,
      speed: 400,
      pagination: {
        el: paginationElem
      },
      navigation: {
        prevEl: btnPrev,
        nextEl: btnNext
      },
      breakpoints: {
        481: {
          slidesPerView: slidesPerView.md || slidesPerView.hg || slidesPerView.fl || slidesPerView.mx
        },
        769: {
          spaceBetween: gap - 10 > 16 ? gap - 10 : 16,
          slidesPerView: slidesPerView.hg || slidesPerView.fl || slidesPerView.mx
        },
        1025: {
        slidesPerView: slidesPerView.fl || slidesPerView.mx
        },
        1281: {
          spaceBetween: gap,
          slidesPerView: slidesPerView.mx || 'auto'
        }
      }
    })
  }
}
