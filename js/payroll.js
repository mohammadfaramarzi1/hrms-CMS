import initHandler from "../utils/init.js";
import { getData } from "../utils/httpReq.js";
import loaderHandler from "../utils/loader.js";
import { logoutHandler } from "../utils/cookie.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import activeMenuHandler from "../utils/route.js";

const BASE_DATA = "employees";
let employeesArray = [];

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const tableBody = document.querySelector(".payroll-table__body");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const modeBtn = document.querySelector(".modes__btn");
const menuLinks = document.querySelectorAll(".menu__link");

const showData = (data) => {
  tableBody.innerHTML = "";
  data.forEach((item) => {
    tableBody.innerHTML += `
            <tr>
              <td>
                <img src="${item.img}" />
                <h4>${item.name}</h4>
              </td>
              <td>
                <h4>${item.ctc}</h4>
              </td>
              <td>
                <h4>${item.salary_per_month}</h4>
              </td>
              <td>
                <h4 class="${item.payment_class}">${item.payment_status}</h4>
              </td>
            </tr>
          `;
  });
};

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
  showData(employeesArray);
});

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
