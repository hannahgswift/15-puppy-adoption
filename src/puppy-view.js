'use strict';


export default class PuppyView {
  constructor(currentPup, app) {
    this.currentPup = currentPup;

    // this.render();

    this.element = document.createElement('div');
    this.element.classList.add('puppy-list__item');
    this.element.innerHTML = `
    <div class="container">
      <div class="puppy-list">
        <div class="puppy-card">
          <figure class="pic-frame">
            <img src="" alt="" class="pic-frame__pic">
          </figure>
          <div class="card-info">
            <ul class="card-list">
              <li class="card-list__item card-list__name">
                <p class="card-info__title">Name</p>
                <input class="card-input name-input" type="text"></input>
              </li>
              <li class="card-list__item card-list__age">
                <p class="card-info__title age">Age</p>
                <input class="card-input age-input" type="text"></input>
              </li>
              <li class="card-list__item card-list__photourl">
                <p class="card-info__title photourl">Photo URL</p>
                <input class="card-input photo-input" type="text"></input>
              </li>
              <li class="card-list__item card-list__profile">
                <p class="card-info__title profile">Profile</p>
                <input class="card-input profile-input" type="text"></input>
              </li>
            </ul>
            <div class="button-container">
              <button class="btn btn-dlt">Delete</button>
              <button class="btn dtn-udt">Update</button>
            </div>
          </div>
        </div>
        </div>
        </div>`;
    this.render();
  }

  render() {
    console.log(this.element);

    this.element.querySelector('.name-input').value = this.currentPup.name;
    this.element.querySelector('.age-input').value = this.currentPup.age;
    this.element.querySelector('.photo-input').value = this.currentPup.photoUrl;
    this.element.querySelector('.pic-frame__pic').setAttribute('src', this.currentPup.photoUrl);
    this.element.querySelector('.profile-input').value = this.currentPup.profile;
  }

}
