import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';

export default class ApplicationView {
  constructor(appElement) {
    this.appElement = appElement;
    this.listElement = appElement.querySelector('.app-main');
    this.data = [];

    this.formView = new CreateFormView(this.appElement, this);
    this.formView.toggle();
    this.start();
  }

  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/hs-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);
      });
  }

  render() {
    this.listElement.innerHTML = '';

    this.data.forEach((puppy) => {
      const duck = new PuppyView(puppy, this);
      this.listElement.appendChild(duck.element);
    });
  }

  addPuppyData(puppy) {
    this.data = [puppy, ...this.data];
    this.render();
  }

  removePuppyData(puppy) {
    this.data = this.data.filter((x) => x !== puppy);
    this.render();
  }

  updatePuppy(newPup) {
    this.data = this.data.map((d) => {
      if (d._id === newPup._id) {
        return newPup;
      }
      return d;
    });
  }

  // start() {
  //   return fetch('http://tiny-tn.herokuapp.com/collections/hs-puppy')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.data = data;
  //       this.render(data);
  //     });
  // }
}
