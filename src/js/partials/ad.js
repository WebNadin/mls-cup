class Ad {
  constructor(item) {
    this.item = item;
  }

  init() {
    gsap.to(".js-startCup", {duration: .9, delay: .3, y: 60});
    gsap.to(".js-startCup", {duration: .6, delay: .3, onComplete: this.startSweets});
  }

  startSweets() {
    gsap.to(".js-sweets-left", {duration: 1, y: 0, x: 50});
    gsap.to(".js-sweets-right", {duration: 1, y: -50, x: -50});
    gsap.to(".js-sweets-bottom", {duration: 1, y: 300, x: 0});
    gsap.to(".js-sweets", {duration: 30, delay: 1.3, y: 1000});
    gsap.to(".js-sweets-left", {duration: 3, delay: 1.3, x: -50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 1.3, x: 50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 4.3, x: 50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 4.3, x: -50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 7.3, x: -50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 7.3, x: 50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 10.3, x: 50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 10.3, x: -50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 13.3, x: -50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 13.3, x: 50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 16.3, x: 50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 16.3, x: -50});
  }
}
