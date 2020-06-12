//= partials/helper.js

function f(x) {
  console.log('x = ', x);
}

function throttle(func, ms) {

  let isThrottle = false;
  let savedThose;
  let savedArgs;

  function wrapper() {

    if (isThrottle) {
      savedThose = this;
      savedArgs = arguments;
      console.log('savedThose = ', savedThose);
      console.log('savedArgs = ', savedArgs);
      return;
    }

    func.apply(this, arguments);
    isThrottle = true;
    setTimeout(()=> {
      isThrottle = false;
      if (savedArgs) {
        wrapper.apply(savedThose, savedArgs);
        savedArgs = savedThose = null;
      }

    }, ms);

  }

  return wrapper;
}

// создаём обёртки
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)


//document.addEventListener("DOMContentLoaded", function () {
//  printNumbers(2, 10);
//});




