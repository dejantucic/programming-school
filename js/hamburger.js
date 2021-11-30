const menuBtn = document.querySelector(".main-header__menu-btn");
const menu = document.querySelector(".main-header__items");
const hamburger = () => {
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open-list");
  });
};
export default hamburger;
