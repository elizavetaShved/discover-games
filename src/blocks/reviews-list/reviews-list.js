import Slider from "../../js/common/slider";

class ReviewsList {
  activeContent = null;
  ratingsContainerElems;
  ratingsWrapperElems;
  btnsMore;

  constructor() {
    const hostElem = document.querySelector('#reviews-list-host');
    if (!hostElem) return;

    this.ratingsContainerElems = Array.from(hostElem.querySelectorAll('.js-ratings-container'));
    this.ratingsWrapperElems = Array.from(hostElem.querySelectorAll('.js-ratings-wrapper'));
    this.btnsMore = Array.from(hostElem.querySelectorAll('.js-btn-more'));
    const swiperContainerElem = hostElem.querySelector('#js-swiper-container');

    this.btnsMore.forEach((btn, index) => {
      btn.onclick = () => {
        this.setActiveContent(index);
      }
    })

    new Slider(
      swiperContainerElem,
      { mx: 1 },
      5,
      null,
      null,
      null,
      20,
      false
    );
  }

  setActiveContent(indexCheck) {
    this.ratingsContainerElems.forEach((item, index) => {
      if (index === indexCheck) {
        if (this.btnsMore[index].classList.value.includes('mod-less')) {
          this.btnsMore[index].classList.remove('mod-less');
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
  }

  onShowItem(item, index) {
    item.classList.remove('mod-hide');
    item.style.maxHeight = `${ this.ratingsWrapperElems[index].clientHeight }px`;
  }

  onHideItem(item) {
    item.classList.add('mod-hide');
    item.style.maxHeight = '0';
  }
}

new ReviewsList();
