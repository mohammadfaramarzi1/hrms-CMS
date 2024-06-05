import initHandler from "../utils/init.js";
import loaderHandler from "../utils/loader.js";
import { logoutHandler } from "../utils/cookie.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import activeMenuHandler from "../utils/route.js";

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const modeBtn = document.querySelector(".modes__btn");
const menuLinks = document.querySelectorAll(".menu__link");

let pieOptions = {
  series: [44, 55, 13, 43],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["TXT", "JPEG", "PNG", "XLS"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
          fontFamily: "Dosis SemiBold",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

let pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieOptions);
pieChart.render();

const showLogoutMenu = () => {
  logoutMenu.style.display = "block";
  logoutLink.style.display = "flex";
};

logoutLink.addEventListener("click", logoutHandler);

logoutBtn.addEventListener("click", showLogoutMenu);

modeBtn.addEventListener("click", changeThemeHandler);

document.addEventListener("DOMContentLoaded", () => {
  initHandler(welcomeName, personName);
});

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
