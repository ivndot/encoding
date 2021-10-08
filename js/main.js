//btn menu
const btnMenu = document.querySelector(".menu__btn");
//side nav
const sideNav = document.querySelector(".sidenav");

//listener to menu button
btnMenu.addEventListener("click", () => {
  sideNav.classList.toggle("sidenav--display");
});

