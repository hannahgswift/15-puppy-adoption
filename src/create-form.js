export default class CreateFormView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
  }

  // newFunction() {
  //
  //   this.element.querySelector('.nav-form').addEventListener('click', () => {
  //
  //     const PuppyData = {
  //       name: this.element.querySelector('.name-input').value,
  //       age: this.element.querySelector('.age-input').value,
  //       photoUrl: this.element.querySelector('.photo-input').value,
  //       profile: this.element.querySelector('.profile-input').value
  //     }
  //     event.preventDefault();
  //
  //     fetch(`http://tiny-tn.herokuapp.com/collections/hs-puppy`), {
  //         method: 'post',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(puppyData)
  //       }.then((res) => res.json())
  //       .then((data) => {
  //
  //         this.element.querySelector('.name-input').value = '';
  //         this.element.querySelector('.age-input').value = '';
  //         this.element.querySelector('.photo-input').value = '';
  //         this.element.querySelector('.profile-input').value = '';
  //
  //       });
  //
  //   });
  //
  //
  // }




  toggle() {
    const button = document.querySelector('.add-btn');
    const form = document.querySelector('.nav-form');
    button.addEventListener('click', () => {
      form.classList.toggle('hidden');
    })
  }



}
