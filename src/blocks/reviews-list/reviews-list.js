import Slider from "../../js/common/slider";

const CARDS_IN_SLIDE = 5;
const PADDING_CARD = 24;
const GAP_CARDS = 20;
const CONTAINER_PADDING_BOTTOM = 32;
const BUTTON_PADDING_TOP = 22;

class ReviewsList {
  slider;
  activeContent = null;
  ratingsContainerElems;
  ratingsWrapperElems;
  swiperContainerElem;
  swipeSlideElems;
  fixContentElems;
  btnsMore;
  btnsMoreContent;

  constructor() {
    const hostElem = document.querySelector('#reviews-list-host');
    if (!hostElem) return;

    this.ratingsContainerElems = Array.from(hostElem.querySelectorAll('.js-ratings-container'));
    this.ratingsWrapperElems = Array.from(hostElem.querySelectorAll('.js-ratings-wrapper'));
    this.btnsMore = Array.from(hostElem.querySelectorAll('.js-btn-more'));
    this.btnsMoreContent = Array.from(hostElem.querySelectorAll('.js-btn-more-content'));
    this.swiperContainerElem = hostElem.querySelector('#js-swiper-container');
    const swiperPaginationElem = hostElem.querySelector('#js-pagination-slider');
    this.swipeSlideElems = hostElem.querySelectorAll('.js-swiper-slide');
    this.fixContentElems = hostElem.querySelectorAll('.js-fix-content');

    this.btnsMore.forEach((btn, index) => {
      btn.onclick = () => {
        this.setActiveContent(index);
      }
    })

    this.slider = new Slider(
      this.swiperContainerElem,
      { mx: 1 },
      CARDS_IN_SLIDE,
      null,
      null,
      swiperPaginationElem,
      20,
      false
    );

    this.setContainerHeight();
  }

  setActiveContent(indexCheck) {
    this.ratingsContainerElems.forEach((item, index) => {
      if (index === indexCheck) {
        if (this.btnsMore[index].classList.value.includes('mod-less')) {
          this.btnsMore[index].classList.remove('mod-less');
          this.activeContent = null;
          this.onHideItem(item);
        } else {
          this.btnsMore[index].classList.add('mod-less');
          this.activeContent = index;
          this.onShowItem(item, index);
        }
      } else {
        this.btnsMore[index].classList.remove('mod-less');
        this.onHideItem(item);
      }
    })

    if (this.activeContent !== null) {
      this.setContainerHeight();
    } else {
      setTimeout(() => {
        this.setContainerHeight();
      }, 400)
    }
  }

  onShowItem(item, index) {
    item.classList.remove('mod-hide');
    item.style.maxHeight = `${ this.ratingsWrapperElems[index].clientHeight }px`;
  }

  onHideItem(item) {
    item.classList.add('mod-hide');
    item.style.maxHeight = '0';
  }

  setContainerHeight() {
    let heightContainer = 0;

    const nextCardIndex = (this.slider.getActiveSlide() + 1) * CARDS_IN_SLIDE;

    this.fixContentElems.forEach((elem, index) => {
      if (index <= nextCardIndex - 1) {
        heightContainer += elem.clientHeight + this.btnsMoreContent[index].clientHeight + BUTTON_PADDING_TOP + PADDING_CARD * 2;
      }
    })

    heightContainer += GAP_CARDS * (CARDS_IN_SLIDE - 1) + CONTAINER_PADDING_BOTTOM;

    if (this.activeContent !== null) {
      heightContainer += this.ratingsWrapperElems[this.activeContent].clientHeight;
    }

    this.swiperContainerElem.style.height = `${ heightContainer }px`;
    this.swiperContainerElem.style.paddingBottom = `${ CONTAINER_PADDING_BOTTOM }px`;
  }
}

new ReviewsList();
