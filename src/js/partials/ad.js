class Ad {
  constructor(item) {
    this.item = item;
  }

  init() {
    gsap.to(".js-startCup", {duration: .9, delay: .3, y: 60});
    gsap.to(".js-startCup", {duration: .6, delay: .3, onComplete: this.startSweets});
    gsap.to(".js-startCup", {duration: .6, delay: 3.3, onComplete: this.startPeople});
  }

  startSweets() {
    gsap.to(".js-sweets-left", {duration: 1, y: 0, x: 50});
    gsap.to(".js-sweets-right", {duration: 1, y: -50, x: -50});
    gsap.to(".js-sweets-bottom", {duration: 1, y: 300, x: 0});
    gsap.to(".js-sweets", {duration: 30, delay: 1, y: 1000});
    gsap.to(".js-sweets-left", {duration: 3, delay: 1, x: -50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 1, x: 50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 4, x: 50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 4, x: -50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 7, x: -50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 7, x: 50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 10, x: 50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 10, x: -50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 13, x: -50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 13, x: 50});
    gsap.to(".js-sweets-left", {duration: 3, delay: 16, x: 50});
    gsap.to(".js-sweets-right", {duration: 3, delay: 16, x: -50});
  }


  startPeople() {
    gsap.to(".js-blackening", {duration: 2, delay: .3, ease: Power1.easeOut, opacity: 1});
    gsap.to(".js-peopleLeft", {duration: 2, ease: Power1.easeOut, x: 0});
    gsap.to(".js-peopleLeft", {duration: .3, opacity: 1});
    gsap.to(".js-peopleRight", {duration: 2, ease: Power1.easeOut, x: 0});
    gsap.to(".js-peopleRight", {duration: .3, opacity: 1});
  }
}
