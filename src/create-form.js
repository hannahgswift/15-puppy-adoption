export default class CreateForm {
  constructor(element, app) {
    this.element = element;
    this.app = app;

    // this.element.querySelector('.add-btn').addEventListener('click', function (){
    //   if (click === true) {
    //     this.element.querySelector('.nav-form').style = display: flex;
    //   }
    // });
    //

    const button = document.getElementsByClassName('.add-btn'); // Assumes element with id='button'

    button.onclick = function() {
      const div = document.getElementsByClassName('.nav-form');
      if (div.style.display !== 'none') {
        div.style.display = 'none';
      } else {
        div.style.display = 'flex';
      }
    };
  }


}
