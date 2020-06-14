class Ad {
  constructor(item) {
    this.item = item;
    //this.startCup = gsap.timeline();
  }

  init() {
    gsap.to(".js-startCup", {duration: 2, delay: .3, y: 60});
    gsap.to(".js-startCup", {duration: 2, onComplete: this.startSweets});

    //this.startCup.to(".js-sweets", {duration: 10, delay: .5, y: 1000});
    //this.startCup.to(".js-sweets-right", {duration: 10, delay: .5, y: 1000});
    //this.startCup.to(".js-startCup", {duration: 2, delay: .3, y: 60});

  }

  startSweets() {
    gsap.to(".js-sweets-left", {duration: .5, y: -60});
    gsap.to(".js-sweets-right", {duration: 1, y: -60});
    //gsap.to(".js-sweets", {duration: 5, y: -100, onComplete: this.fallSweets()});

  }

  //fallSweets(){
  //  let sweets = gsap.timeline();
  //  sweets.to(".js-sweets-left", {duration: 10, y: 1000});
  //  sweets.to(".js-sweets-left", {duration: 5, x: 25});
  //  sweets.to(".js-sweets-left", {duration: 5, x: -25});
  //}
}
