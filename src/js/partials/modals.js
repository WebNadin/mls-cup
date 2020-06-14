class Modal {
  constructor(item) {
    this.item = item;
    this.closeBtn = item.querySelector('.js-closeBtn');
    this.closeBtn.addEventListener('click', () => this.closeModal());
  }

  openModal() {
    gsap.to(".js-fullModal", {duration: .3, opacity: 1, scale: 1});
    document.body.classList.add('_fixed');
    let ad = new Ad();
    ad.init();
  }


  closeModal() {
    gsap.to(".js-fullModal", {duration: .3, opacity: 0, scale: .3});
    document.body.classList.remove('_fixed');
  }

}

