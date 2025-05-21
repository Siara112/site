let lastScrollTop = 0;
const rocket = document.getElementById("rocket");
const flame = document.getElementById("flame");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    rocket.classList.add("rocket-up");
    rocket.classList.remove("rocket-down");
    flame.classList.remove("flame-off");
  } else {
    rocket.classList.remove("rocket-up");
    rocket.classList.add("rocket-down");
    flame.classList.add("flame-off");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
