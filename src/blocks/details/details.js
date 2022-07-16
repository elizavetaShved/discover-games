export class Details {
  constructor() {
    const hostElem = document.querySelector('#details-host');
    if (!hostElem) return;

    const btnCopy = hostElem.querySelector('#copy-btn');

    btnCopy.onclick = () => {
      navigator.clipboard.writeText(btnCopy.value)
        .then(() => {
          console.log(btnCopy.value)
          // Получилось!
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    }
  }
}

new Details();
