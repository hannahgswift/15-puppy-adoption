import PuppyView from 'puppy-view';
import CreateForm from 'create-form';

export default class ApplicationView {
  constructor(appElement) {
    this.appElement = appElement;
    this.data = [];

    this.formView = new CreateForm(this.appElement.querySelector('.nav-form'), this);
    this.formView.toggle();

  }

  render() {
    this.appElement.innerHTML = '';

    const components = this.data.map((item) => new PuppyView(item));

    components.forEach((card) => {
      this.appElement.appendChild(card.element);
      card.render();
    })
  }

  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);
      });
  }
}

console.log('blue');
