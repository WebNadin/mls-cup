class Ad {
  constructor(item) {
    this.item = item;
  }
  init(){
    gsap.to(".js-startCup", {duration: 2, delay: .3, y: 60});
  }
}
