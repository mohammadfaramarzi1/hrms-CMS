import initHandler from "../utils/init.js";
import { postDataByJob } from "../utils/httpReq.js";
import loaderHandler from "../utils/loader.js";
import { logoutHandler } from "../utils/cookie.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import activeMenuHandler from "../utils/route.js";

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const addNewJobBtn = document.querySelector(".add-job__btn");
const jobForm = document.querySelector(".job__form");
const shadowElem = document.querySelector(".shadow");
const jobSaveBtn = document.querySelector(".job-save__btn");
const jobPositionSelectBox = document.querySelector(".job__position");
const jobTypeSelectBox = document.querySelector(".job__type");
const jobZoneSelectBox = document.querySelector(".job__zone");
const jobMoneySelectBox = document.querySelector(".job__money");
const leftJobsContainer = document.querySelector(".jobs-left");
const cancelFormBtn = document.querySelector(".cancel-form");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const modeBtn = document.querySelector(".modes__btn");
const menuLinks = document.querySelectorAll(".menu__link");

const addNewJobHandler = () => {
  jobForm.style.display = "block";
  shadowElem.style.display = "block";
};

const jobSaveHandler = (event) => {
  event.preventDefault();
  const jobPositionValue = jobPositionSelectBox.value;
  const jobTypevalue = jobTypeSelectBox.value;
  const jobZonevalue = jobZoneSelectBox.value;
  const jobMoneyvalue = jobMoneySelectBox.value;
  if (jobPositionValue && jobTypevalue && jobZonevalue && jobMoneyvalue) {
    const data = postDataByJob(
      jobPositionValue,
      jobTypevalue,
      jobZonevalue,
      jobMoneyvalue,
      leftJobsContainer
    );
    leftJobsContainer.innerHTML += data;
    jobForm.style.display = "none";
    shadowElem.style.display = "none";
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Inputs Must Be Fill !",
    });
  }
};

const cancelFormHandler = () => {
  jobForm.style.display = "none";
};

const showLogoutMenu = () => {
  logoutMenu.style.display = "block";
  logoutLink.style.display = "flex";
};

logoutLink.addEventListener("click", logoutHandler);

logoutBtn.addEventListener("click", showLogoutMenu);

addNewJobBtn.addEventListener("click", addNewJobHandler);
jobSaveBtn.addEventListener("click", jobSaveHandler);
cancelFormBtn.addEventListener("clcik", cancelFormHandler);
modeBtn.addEventListener("click", changeThemeHandler);

document.addEventListener("DOMContentLoaded", () => {
  initHandler(welcomeName, personName);
});

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
