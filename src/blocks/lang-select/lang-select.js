import SlimSelect from "slim-select";

export class LangSelect {
  constructor() {
    const selectsArr = document.querySelectorAll('#slim-select');

    selectsArr.forEach(selectItem => {
      new SlimSelect({
        select: selectItem
      })
    })
  }
}

window.onload = () => {
  new LangSelect();
}
