function MenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    menuList.classList.toggle("ativo");
    menuButton.classList.toggle("ativo");
  }
  
  menuButton.addEventListener("click", toggleMenu);
  menuButton.addEventListener("touchstart", toggleMenu);
}
MenuMobile();
