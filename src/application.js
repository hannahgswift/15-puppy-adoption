export default class ApplicationView {
  constructor(appElement) {
    this.appElement = appElement;
    this.data = [];

    this.element = document.querySelector('.puppy-list');
  }

  render() {
    this.element.innerHTML = '';
    console.log('render is here');
  }

  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((res) => res.json())
    .then((data) => {

    });
  }

}

console.log('blue');
