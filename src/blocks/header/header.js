export default function header() {
  const hostElem = document.querySelector('#header-host');
  if(!hostElem) return;

  const burgerBtn = hostElem.querySelector('#btn-burger');
  const sideBarElem = document.querySelector('#side-bar');

  let isOpenSideBar = false;

  burgerBtn.onclick = () => {
    if (isOpenSideBar) {
      burgerBtn.classList.remove('mod-close');
      sideBarElem.classList.remove('mod-show');
    } else {
      burgerBtn.classList.add('mod-close');
      sideBarElem.classList.add('mod-show');
    }

    isOpenSideBar = !isOpenSideBar;
  };
}

window.onload = () => {
  header();
}
