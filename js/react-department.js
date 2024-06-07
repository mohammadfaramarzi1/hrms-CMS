import { getData } from "../utils/httpReq.js";
import initHandler from "../utils/init.js";
import loaderHandler from "../utils/loader.js";
import { logoutHandler } from "../utils/cookie.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import showData from "../utils/showData.js";
import activeMenuHandler from "../utils/route.js";

const BASE_DATA = "employees";
let employeesArray = [];

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const tableBody = document.querySelector("tbody");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const modeBtn = document.querySelector(".modes__btn");
const menuLinks = document.querySelectorAll(".menu__link");

const showLogoutMenu = () => {
  logoutMenu.style.display = "block";
  logoutLink.style.display = "flex";
};

logoutLink.addEventListener("click", logoutHandler);

logoutBtn.addEventListener("click", showLogoutMenu);

modeBtn.addEventListener("click", changeThemeHandler);

document.addEventListener("DOMContentLoaded", () => {
  initHandler(welcomeName, personName);
  employeesArray = getData(BASE_DATA);
  showData(employeesArray, "React JS Department", tableBody);
});

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
