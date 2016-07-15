export default class ApplicationView {
  constructor(appElement) {
    this.appElement = appElement;
    this.data = [];
  }

  getData() {
    return fetch('http://tiny-tn.herokuapp.com/collections/questions')
    .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  }
}
