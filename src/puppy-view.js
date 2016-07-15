
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
            <img src="http://placekitten.com/300" alt="" class="pic-frame__pic">
          </figure>
          <div class="card-info">
            <ul class="card-list">
              <li class="card-list__item card-list__name">
                <p class="card-info__title">Name</p>
                <input class="card-input" type="text">
              </li>
              <li class="card-list__item card-list__age">
                <p class="card-info__title">Age</p>
                <input class="card-input" type="text">
              </li>
              <li class="card-list__item card-list__photourl">
                <p class="card-info__title">Photo URL</p>
                <input class="card-input" type="text">
              </li>
              <li class="card-list__item card-list__profile">
                <p class="card-info__title">Profile</p>
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

    // this.appElement.appendChild(this.element);

  }

}

// console.log('friday is lit');
