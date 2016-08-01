import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';

export default class ApplicationView {
  constructor(appElement) {
    this.appElement = appElement;
    this.listElement = appElement.querySelector('.app-main');
    this.data = [];

    this.formView = new CreateFormView(this.appElement, this);
    this.formView.toggle();
    // this.formView.newFunction();
    this.start();
  }

  render() {
    this.listElement.innerHTML = '';

    this.data.forEach((puppy) => {
      const duck = new PuppyView(puppy, this);
      this.listElement.appendChild(duck.element);
    });

    // const components = this.data.map((item) => new PuppyView(item));
    //
    // components.forEach((card) => {
    //   this.listElement.appendChild(card.element);
    //   card.render();
    // });
  }

  addPuppyData(puppy) {
    this.data = [...this.data, puppy];
    this.render();
  }

  start() {
    // const formView = new CreateFormView(this.appElement);
    return fetch('http://tiny-tn.herokuapp.com/collections/hs-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);
      });
  }
}

console.log('blue');
