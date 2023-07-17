//toggle class active

const navbarNav = document.getElementsByClassName("navbar-nav");
const navBarNav = document.querySelector(".navbar-nav");

// document.getElementById("hamburger-menu").onclick = () => {
//   navBarNav.classList.toggle("active");
// };
document.querySelector("#hamburger-menu").onclick = () => {
  navBarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }
});
