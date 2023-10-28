 //bars-times icons
const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelectorAll(".header--menu > li >a");

navToggler.addEventListener("click", changeMenuState);
//changeMenuState
function changeMenuState() {
  const headerMenu = document.querySelector("ul.header--menu");
  const navIcon = document.querySelectorAll(".navIcon");
  headerMenu.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
}
//Menuactive

function setMenuActive() {
  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll(".header --menu--item>a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {
      li.classList.remove("active");

      if (current == li.getAttribute("href").split("#")[1]) {
        li.classList.add("active");
      }
    });
  });
}



//function-on-menuclick
function onMenuClick() {
  console.log(navLinks);
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", changeMenuState);
  }
}
setMenuActive();
onMenuClick(); 

/*const navToggler = document.querySelector(".nav-toggler");
const headerMenu = document.querySelector("ul.header--menu");
const navLinks = document.querySelectorAll(".header--menu > li > a");
const sections = document.querySelectorAll("section");

navToggler.addEventListener("click", changeMenuState);

function changeMenuState() {
  headerMenu.classList.toggle("show");

  navLinks.forEach((link) => {
    link.classList.toggle("hidden");
  });
}

function setMenuActive() {
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (current === link.getAttribute("href").split("#")[1]) {
        link.classList.add("active");
      }
    });
  });
}

function onMenuClick() {
  navLinks.forEach((link) => {
    link.addEventListener("click", changeMenuState);
  });
}

setMenuActive();
onMenuClick();
*/