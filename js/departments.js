import { getData } from "../utils/httpReq.js";
import initHandler from "../utils/init.js";
import loaderHandler from "../utils/loader.js";
import { logoutHandler } from "../utils/cookie.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import activeMenuHandler from "../utils/route.js";

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const designDepartment = document.getElementById("design-department");
const projectDepartment = document.getElementById("project-department");
const salesDepartment = document.getElementById("sales-department");
const marketingDepartment = document.getElementById("marketing-department");
const reactDepartment = document.getElementById("react-department");
const pythonDepartment = document.getElementById("python-department");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const modeBtn = document.querySelector(".modes__btn");
const menuLinks = document.querySelectorAll(".menu__link")

const BASE_DATA = "employees";
let employeesArray = [];

const showTemplateEmployees = () => {
  showData("Design Department", designDepartment);
  showData("Project Manager Department", projectDepartment);
  showData("Sales Department", salesDepartment);
  showData("Marketing Department", marketingDepartment);
  showData("React JS Department", reactDepartment);
  showData("Python Department", pythonDepartment);
};

const showData = (designation, container) => {
  employeesArray = getData(BASE_DATA);
  const mainFilteredEmployees = employeesArray.filter(
    (data) => data.designation === designation
  );
  mainFilteredEmployees.map((employee) => {
    const JSX = `
      <div class="department__detail">
          <div class="department__detail-name">
              <h4>${employee.name}</h4>
              <h4 class="department__detail-caption">${employee.designation}</h4>
          </div>
      </div>
    `;
    container.innerHTML += JSX;
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
  showTemplateEmployees();
});

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
