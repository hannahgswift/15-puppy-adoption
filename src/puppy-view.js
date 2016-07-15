
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
                <p class="card-info__title"></p>
                <input class="card-input" type="text">
              </li>
              <li class="card-list__item card-list__age">
                <p class="card-info__title age"></p>
                <input class="card-input" type="text">
              </li>
              <li class="card-list__item card-list__photourl">
                <p class="card-info__title photourl"></p>
                <input class="card-input" type="text">
              </li>
              <li class="card-list__item card-list__profile">
                <p class="card-info__title profile"></p>
                <input class="card-input" type="text">
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
    this.element.querySelector('.age').innerHTML = this.currentPup.age;
    this.element.querySelector('.photourl').innerHTML = this.currentPup.photoUrl;
    this.element.querySelector('.pic-frame__pic').src = this.currentPup.photoUrl;
    this.element.querySelector('.profile').innerText = this.currentPup.profile;

    // this.appElement.appendChild(this.element);



  }

}

// console.log('friday is lit');
