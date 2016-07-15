export default class ApplicationView {
  constructor(appElement) {
    this.appElement = appElement;
    this.data = [];
    console.log(this.appElement);

    this.element = document.createElement('li');
    this.element.classList.add('puppy-list__item');
    this.element.innerHTML = `<div class="puppy-card">
      <figure class="pic-frame">
        <img src="" alt="" class="pic-frame__pic">
      </figure>
      <div class="card-info">
        <ul class="card-list">
          <li class="card-list__item card-list__name"></li>
          <li class="card-list__item card-list__age"></li>
          <li class="card-list__item card-list__photourl"></li>
          <li class="card-list__item card-list__profile"></li>
        </ul>
        <div class="button-container">
          <button class="btn btn-dlt">Delete</button>
          <button class="btn dtn-udt">Update</button>
        </div>
      </div>
    </div>`;


  }

  render() {
    // this.element.innerHTML = '';
    console.log(this.appElement);

    this.appElement.appendChild(this.element);

    this.appElement.querySelector('.card-list__name').innerText = 'Fido';

  }

  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

}

console.log('blue');
