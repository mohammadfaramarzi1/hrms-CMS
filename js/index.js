import { getData } from "../utils/httpReq.js";
import { getCookie, logoutHandler } from "../utils/cookie.js";
import initHandler from "../utils/init.js";
import loaderHandler from "../utils/loader.js";
import { changeThemeHandler, checkTheme } from "../utils/theme.js";
import  activeMenuHandler from "../utils/route.js";

const BASE_DATA = "attendances";

const welcomeName = document.querySelector(".header-hello h2");
const personName = document.querySelector(".header-person__name");
const loader = document.querySelector(".loader__container");
const logoutBtn = document.querySelector(".logout__btn");
const logoutMenu = document.querySelector(".logout-menu");
const logoutLink = document.querySelector(".logout-menu__link");
const tableBody = document.querySelector("tbody");
const menuLinks = document.querySelectorAll(".menu__link");
const modeBtn = document.querySelector(".modes__btn");

let options = {
  series: [
    {
      data: [
        {
          x: "Mon",
          y: [10, 50],
        },
        {
          x: "Tue",
          y: [30, 65],
        },
        {
          x: "Wed",
          y: [35, 75],
        },
        {
          x: "Thu",
          y: [18, 49],
        },
        {
          x: "Fri",
          y: [69, 85],
        },
        {
          x: "Sat",
          y: [10, 65],
        },
        {
          x: "Sun",
          y: [20, 50],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "rangeBar",
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: [["#FEB85B", "#FEB85B"]],
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "top",
    horizontalAlign: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      gradientToColors: ["#7152F3"],
      inverseColors: true,
      stops: [0, 100],
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    tickPlacement: "on",
    labels: {
      style: {
        fontFamily: "Dosis SemiBold",
        fontSize: "2rem",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Dosis SemiBold",
        fontSize: "2rem",
      },
    },
  },
};

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const showData = (data) => {
  data.forEach((item) => {
    tableBody.innerHTML += `
      <tr>
        <td>
          <img src="${item.img}" />
          <h4>${item.name}</h4>
        </td>
        <td>
          <h4>${item.designation}</h4>
        </td>
        <td>
          <h4>${item.type}</h4>
        </td>
        <td>
          <div class="${item.class}" id="status">${item.status}</div>
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
  const data = getData(BASE_DATA);
  showData(data);
});

window.addEventListener("load", () => {
  loaderHandler(loader);
  checkTheme(modeBtn);
  activeMenuHandler(menuLinks);
});
