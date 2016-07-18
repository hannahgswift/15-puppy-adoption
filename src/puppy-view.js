
export default class PuppyView {
  constructor(currentPup, app) {
    this.currentPup = currentPup;

    console.log(this.element);

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
                <input class="card-input" type="text"></input>
              </li>
              <li class="card-list__item card-list__age">
                <p class="card-info__title age">Age</p>
                <input class="card-input age-input" type="text"></input>
              </li>
              <li class="card-list__item card-list__photourl">
                <p class="card-info__title photourl">Photo URL</p>
                <input class="card-input" type="text"></input>
              </li>
              <li class="card-list__item card-list__profile">
                <p class="card-info__title profile">Profile</p>
                <input class="card-input" type="text"></input>
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

    console.log('puppy view present for pupppy duty');
  }

  render() {
    console.log(this.element);

    this.element.querySelector('.card-info__title').innerHTML = this.currentPup.name;
    this.element.querySelector('.age-input').value = this.currentPup.age;
    this.element.querySelector('.photourl').innerHTML = this.currentPup.photoUrl;
    this.element.querySelector('.pic-frame__pic').src = this.currentPup.photoUrl;
    this.element.querySelector('.profile').innerHTML = this.currentPup.profile;

    // this ill change to .value

    // this.appElement.appendChild(this.element);



  }

}
