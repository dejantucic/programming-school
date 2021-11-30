const scrollFunc = function () {
  const header = document.querySelector(".main-header");
  let num = 100;
  window.addEventListener("scroll", function () {
    let last = window.scrollY;
    if (last > 100) {
      header.classList.remove("up");
      header.classList.add("small");
      if (last > num) {
        header.classList.remove("up");
      } else {
        header.classList.add("up");
      }
    } else {
      header.classList.remove("small");
    }
    num = last;
  });
};

export default scrollFunc;
