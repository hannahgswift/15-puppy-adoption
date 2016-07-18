export default class CreateForm {
  constructor(element, app) {
    this.element = element;
    this.app = app;
  }

  toggle() {
    const button = document.querySelector('.add-btn');
    const form = document.querySelector('.nav-form');
    button.addEventListener('click', () => {
      form.classList.toggle('hidden');
    })
  }


}
