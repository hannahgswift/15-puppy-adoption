export default class CreateFormView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
    this.add();
  }

  add() {
    document.querySelector('.nav-form').addEventListener('submit', (ev) => {
      ev.preventDefault();

      const formData = {
        name: document.querySelector('.name-input').value,
        age: document.querySelector('.age-input').value,
        photoUrl: document.querySelector('.photo-input').value,
        profile: document.querySelector('.profile-input').value,
      };

      fetch('http://tiny-tn.herokuapp.com/collections/hs-puppy', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        }).then((res) => res.json())
        .then((data) => {
          this.element.querySelector('.name-input').value = '';
          this.element.querySelector('.age-input').value = '';
          this.element.querySelector('.photo-input').value = '';
          this.element.querySelector('.profile-input').value = '';

          this.application.addPuppyData(data);
        });
    });
  }

  toggle() {
    const button = document.querySelector('.add-btn');
    const form = document.querySelector('.nav-form');
    button.addEventListener('click', () => {
      form.classList.toggle('hidden');
    });
  }
}
