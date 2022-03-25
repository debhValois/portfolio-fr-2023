// PORTFOLIO RESPONSIVO FR | DEBH VALOIS | 19/03/2022 - 25/03/2022

/* ABRE E FECHA MENU LATERAL EM MODO MOBILE :
FAZER ICONS BOOTSTRAP ALTERNAREM ENTRE SI */
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");
menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

//FECHA O MENU QDO CLICAR EM ALGUM ITEM E MUDA ICON P LIST
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

// ANIMAR TODOS OS ITENS NA TELA QUE TIVEREM MEU ATRIBUTO "DATA-ANIME"
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;
  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
animeScroll();
window.addEventListener("scroll", ()=>{
  animeScroll();
})