import initHandler from "../utils/init.js";
import loaderHandler from "../utils/loader.js";
import { logoutHandler } from "../utils/cookie.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import activeMenuHandler from "../utils/route.js";

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const chatSearchInput = document.querySelector(".chat__sidebar-search input");
const users = document.querySelectorAll(".user");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const modeBtn = document.querySelector(".modes__btn");
const menuLinks = document.querySelectorAll(".menu__link");

const filterUserHandler = () => {
  const chatSearchValue = chatSearchInput.value.trim().toLowerCase();
  Array.from(users).forEach((item) => {
    const userName = item
      .querySelector(".user__name")
      .textContent.trim()
      .toLowerCase();
    if (userName.includes(chatSearchValue)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

chatSearchInput.addEventListener("input", filterUserHandler);

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
