import { checkExistParent } from "../../js/common/checkExistParent";
import SlimSelect from "slim-select";

export default function header() {
  const hostElem = document.querySelector('#header-host');
  if(!hostElem) return;

  const bodyElem = document.querySelector('body');
  const burgerBtn = hostElem.querySelector('#btn-burger');
  const sideBarElem = document.querySelector('#side-bar');
  const sideBarContentElem = document.querySelector('#side-bar-content');
  const select = hostElem.querySelector('#slim-select');
  const sideBarSelect = sideBarElem.querySelector('#slim-select');

  let isOpenSideBar = false;

  const selectsArr = [select, sideBarSelect];

  selectsArr.forEach(selectItem => {
    new SlimSelect({
      select: selectItem
    })
  })

  const onOpenSideBar = () => {
    burgerBtn.classList.add('mod-close');
    sideBarElem.classList.add('mod-show');
    bodyElem.classList.add('mod-no-scroll');
    document.addEventListener('click', checkClickBySideBar);
  }

  const onCloseSideBar = () => {
    burgerBtn.classList.remove('mod-close');
    sideBarElem.classList.remove('mod-show');
    isOpenSideBar = false;
    bodyElem.classList.remove('mod-no-scroll');
    document.removeEventListener('click', checkClickBySideBar);
  }

  const checkClickBySideBar = (event) => {
    if (isOpenSideBar && !checkExistParent(event.target, sideBarContentElem)) {
      onCloseSideBar();
    } else {
      isOpenSideBar = true;
    }
  }

  burgerBtn.onclick = () => {
    if (isOpenSideBar) {
      onCloseSideBar();
    } else {
      onOpenSideBar();
    }
  };
}

window.onload = () => {
  header();
}
