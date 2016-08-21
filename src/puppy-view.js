'use strict';

export default class PuppyView {
  constructor(currentPup, application) {
    this.currentPup = currentPup;
    this.application = application;

    this.element = document.createElement('div');
    this.element.classList.add('puppy-list__item');
    this.element.innerHTML = `
    <div class="container">
      <div class="puppy-list">
        <div class="puppy-card">
          <div class="object-fit">
          <div class="pic-frame">
            <img src="" alt="" class="pic-frame__pic">
          </div>
          </div>
          <div class="card-info">
            <ul class="card-list">
              <li class="card-list__item card-list__name">
                <p class="card-info__title">Name</p>
                <input class="card-input name-input" type="text">
              </li>
              <li class="card-list__item card-list__age">
                <p class="card-info__title age">Age</p>
                <input class="card-input age-input" type="text">
              </li>
              <li class="card-list__item card-list__photourl">
                <p class="card-info__title photourl">Photo URL</p>
                <input class="card-input photo-input" type="text">
              </li>
              <li class="card-list__item card-list__profile">
                <p class="card-info__title profile">Profile</p>
                <input class="card-input profile-input" type="text">
              </li>
            </ul>
            <div class="button-container">
              <button class="btn btn-dlt">Delete</button>
              <button class="btn btn-update">Update</button>
            </div>
          </div>
        </div>
        </div>
        </div>`;
    this.render();
    this.remove();
    this.update();
  }

  render() {
    this.element.querySelector('.name-input').value = this.currentPup.name;
    this.element.querySelector('.age-input').value = this.currentPup.age;
    this.element.querySelector('.photo-input').value = this.currentPup.photoUrl;
    this.element.querySelector('.pic-frame__pic').setAttribute('src', this.currentPup.photoUrl);
    this.element.querySelector('.profile-input').value = this.currentPup.profile;
  }

  remove() {
    this.element.querySelector('.btn-dlt').addEventListener('click', (ev) => {
      ev.preventDefault();

      fetch(`http://tiny-tn.herokuapp.com/collections/hs-puppy/${this.currentPup._id}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(this.element),
        }).then((res) => res.json())
        .then(() => {
          alert('Puppy go bye bye.');
          this.application.removePuppyData(this.currentPup);
        });
    });
  }

  update() {
    this.element.querySelector('.btn-update').addEventListener('click', (ev) => {
      ev.preventDefault();

      fetch(`http://tiny-tn.herokuapp.com/collections/hs-puppy/${this.currentPup._id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            name: this.element.querySelector('.name-input').value,
            age: this.element.querySelector('.age-input').value,
            profile: this.element.querySelector('.profile-input').value,
            photoUrl: this.element.querySelector('.photo-input').value,
          }),
        }).then((res) => res.json())
        .then((data) => {
          alert('Puppy has been updated!');
          this.application.updatePuppy(data);
          this.currentPup = data;
          this.render();
        });
    });
  }
}
