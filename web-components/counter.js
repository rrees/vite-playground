class Counter extends HTMLElement {

  count = 0;

  render() {
    this.querySelector('.count').innerHTML = this.count;
  }

  connectedCallback() {
    console.log('Connected callback firing');

    [['.inc-button', () => {
      console.log('Hello from inc');
      this.count++;
      this.render();
    }],
      ['.dec-button', () => {
        console.log('Hello from dec');
        this.count--;
        this.render();
      }]].forEach(([selector, callback]) => {
      const el = this.querySelector(selector);

      el.addEventListener('click', callback);
    });

    this.render();

  }
  constructor() {
    super();

  }
}

export { Counter };