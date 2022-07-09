import { checkExistParent } from "../../js/common/checkExistParent";

export class SideBar {
  isOpenSideBar = false;
  burgerBtn;
  bodyElem;
  sideBarElem;
  sideBarContentElem;

  constructor(burgerBtn) {
    this.checkClickBySideBar = this.checkClickBySideBar.bind(this);

    this.burgerBtn = burgerBtn;
    this.bodyElem = document.querySelector('body');
    this.sideBarElem = document.querySelector('#side-bar');
    this.sideBarContentElem = document.querySelector('#side-bar-content');
  }

  onOpenSideBar() {
    this.burgerBtn.classList.add('mod-close');
    this.sideBarElem.classList.add('mod-show');
    this.bodyElem.classList.add('mod-no-scroll');
    document.addEventListener('click', this.checkClickBySideBar);
  }

  onCloseSideBar() {
    this.burgerBtn.classList.remove('mod-close');
    this.sideBarElem.classList.remove('mod-show');
    this.isOpenSideBar = false;
    this.bodyElem.classList.remove('mod-no-scroll');
    document.removeEventListener('click', this.checkClickBySideBar);
  }

  checkClickBySideBar(event) {
    if (this.isOpenSideBar && !checkExistParent(event.target, this.sideBarContentElem)) {
      this.onCloseSideBar();
    } else {
      this.isOpenSideBar = true;
    }
  }
}
