const navBar = document.getElementById("navBAR");

function showNavBar() {
  if (navBar) {
    navBar.classList.toggle("responsive_nav");
  }

  if (
    navBar.classList.contains("responsive_nav") &&
    window.matchMedia("(max-width: 1024px)").matches
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
