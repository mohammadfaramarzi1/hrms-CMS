import { getData, postData } from "../utils/httpReq.js";
import { getCookie, logoutHandler } from "../utils/cookie.js";
import initHandler from "../utils/init.js";
import loaderHandler from "../utils/loader.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import activeMenuHandler from "../utils/route.js";

const BASE_DATA = "employees";
let employeesArray = [];

const tableBody = document.querySelector("tbody");
const addEmployeeBtn = document.querySelector(".employee-add__btn");
const employeeForm = document.querySelector(".employee__form");
const shadowElem = document.querySelector(".shadow");
const formCancelButton = document.querySelector(".cancel-form");
const saveEmployeeBtn = document.querySelector(".employee-save__btn");
const employeeNameInput = document.getElementById("employee-name");
const employeeIdInput = document.getElementById("employee-id");
const designationSelectBox = document.querySelector(".employee__designation");
const typeSelectBox = document.querySelector(".employee__type");
const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
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
              <h4>${item.id}</h4>
            </td>
            <td>
              <h4>${item.designation}</h4>
            </td>
            <td>
              <h4>${item.type}</h4>
            </td>
          </tr>
        `;
  });
};

const addEmployeeHandler = () => {
  employeeForm.style.display = "flex";
  shadowElem.style.display = "block";
};

const cancelFormHandler = () => {
  employeeForm.style.display = "none";
};

const saveEmployeeHandler = (event) => {
  event.preventDefault();
  const employeeNameValue = employeeNameInput.value;
  const employeeIdValue = employeeIdInput.value;
  const designationValue = designationSelectBox.value;
  const typeValue = typeSelectBox.value;
  if (employeeIdValue && employeeNameValue && designationValue && typeValue) {
    postData(
      employeeNameValue,
      employeeIdValue,
      designationValue,
      typeValue,
      BASE_DATA
    );
    employeeForm.style.display = "none";
    shadowElem.style.display = "none";
    showData(getData(BASE_DATA));
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Inputs Must Be Fill !",
    });
  }
};

addEmployeeBtn.addEventListener("click", addEmployeeHandler);
formCancelButton.addEventListener("click", cancelFormHandler);
saveEmployeeBtn.addEventListener("click", saveEmployeeHandler);

document.addEventListener("DOMContentLoaded", () => {
  initHandler(welcomeName, personName);
  employeesArray = getData(BASE_DATA);
  showData(employeesArray);
});

const showLogoutMenu = () => {
  logoutMenu.style.display = "block";
  logoutLink.style.display = "flex";
};

logoutLink.addEventListener("click", logoutHandler);

logoutBtn.addEventListener("click", showLogoutMenu);

modeBtn.addEventListener("click", changeThemeHandler);

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
