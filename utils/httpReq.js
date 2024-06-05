const getData = (data) => {
  try {
    return JSON.parse(localStorage.getItem(`${data}`));
  } catch (error) {
    console.log(error);
  }
};

const postData = (
  employeeNameValue,
  employeeIdValue,
  designationValue,
  typeValue,
  data
) => {
  try {
    const newEmployee = {
      name: `${employeeNameValue}`,
      id: `${employeeIdValue}`,
      designation: `${designationValue}`,
      type: `${typeValue}`,
      img: "../images/images.png"
    };
    const dataArray = getData(data);
    dataArray.push(newEmployee);
    localStorage.setItem(`${data}`, JSON.stringify(dataArray));
  } catch (error) {
    console.log(error);
  }
};

const postDataByJob = (
  jobPositionValue,
  jobTypevalue,
  jobZonevalue,
  jobMoneyvalue
) => {
  return `
  <div class="job">
  <div class="job__content">
      <div class="job__title d-flex align-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14 12.1602V13.1602C14 13.1702 14 13.1702 14 13.1802C14 14.2702 13.99 15.1602 12 15.1602C10.02 15.1602 10 14.2802 10 13.1902V12.1602C10 11.1602 10 11.1602 11 11.1602H13C14 11.1602 14 11.1602 14 12.1602Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          <h2 class="job__name">${jobPositionValue}</h2>
          <span class="job__department">${jobTypevalue}</span>                                
      </div>
      <div class="job__info d-flex">
          <button class="job__btn view-all-btn">Design</button>
          <button class="job__btn view-all-btn">Full Time</button>
          <button class="job__btn view-all-btn">Remote</button>
      </div>
      <div class="job__caption d-flex">
         <div class="job__address d-flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="11" r="3" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
              <h3 class="job__location">${jobZonevalue}</h3>
         </div>
         <div class="job__salary">
          <h3 class="job__price">${jobMoneyvalue}/Month</h3>
     </div>
      </div>
  </div>
</div>
  `;
};

const attendancesArray = [
  {
    name: "Leasie Watson",
    designation: "Team Lead - Design",
    type: "Office",
    status: "On Time",
    img: "../images/Ellipse 1192 (1).png",
    class: "green-status",
  },
  {
    name: "Darlene Robertson",
    designation: "Web Designer",
    type: "Office",
    status: "On Time",
    img: "../images/Ellipse 1192 (10).png",
    class: "green-status",
  },
  {
    name: "Jacob Jones",
    designation: "Medical Assistant",
    type: "Remote",
    status: "On Time",
    img: "../images/Ellipse 1192 (11).png",
    class: "green-status",
  },
  {
    name: "Kathryn Murphy",
    designation: "Marketing Coordinator",
    type: "Office",
    status: "Late",
    img: "../images/Ellipse 1192 (14).png",
    class: "red-status",
  },
  {
    name: "Leslie Alexander",
    designation: "Data Analyst",
    type: "Office",
    status: "On Time",
    img: "../images/Ellipse 1192 (15).png",
    class: "green-status",
  },
  {
    name: "Ronald Richards",
    designation: "Phyton Developer",
    type: "Remote",
    status: "On Time",
    img: "../images/Ellipse 1192 (17).png",
    class: "green-status",
  },
  {
    name: "Jenny Wilson",
    designation: "React JS Developer",
    type: "Remote",
    status: "On Time",
    img: "../images/Ellipse 1192 (2).png",
    class: "green-status",
  },
  {
    name: "Dianne Russell",
    designation: "Marketing Department",
    type: "Office",
    status: "On Time",
    img: "../images/Ellipse 1192 (3).png",
    class: "green-status",
  },
  {
    name: "Darrell Steward",
    designation: "Sales Department",
    type: "Remote",
    status: "On Time",
    img: "../images/Ellipse 1192 (4).png",
    class: "green-status",
  },
  {
    name: "Eleanor Pena",
    designation: "Sales Department",
    type: "Remote",
    status: "On Time",
    img: "../images/Ellipse 1192 (5).png",
    class: "green-status",
  },
  {
    name: "Devon Lane",
    designation: "Marketing Department",
    type: "Remote",
    status: "Late",
    img: "../images/Ellipse 1192 (6).png",
    class: "red-status",
  },
  {
    name: "Savannah Nguyen",
    designation: "Marketing Department",
    type: "Remote",
    status: "Late",
    img: "../images/Ellipse 1192 (7).png",
    class: "red-status",
  },
];

const employeesArray = [
  {
    name: "Leasie Watson",
    id: "66559652",
    designation: "Design Department",
    type: "Office",
    status: "On Time",
    class: "green-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (1).png",
  },
  {
    name: "Darlene Robertson",
    id: "4959652",
    designation: "React JS Department",
    type: "Office",
    status: "On Time",
    class: "green-status",
    ctc: "$50000",
    salary_per_month: "$4500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (10).png",
  },
  {
    name: "Lara Kior",
    id: "964596556",
    designation: "Python Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (11).png",
  },
  {
    name: "Leslie Alexander",
    id: "625625",
    designation: "Marketing Department",
    type: "Office",
    status: "On Time",
    class: "green-status",
    ctc: "$43000",
    salary_per_month: "$3200",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (13).png",
  },
  {
    name: "Ronald Richards",
    id: "1661",
    designation: "Phyton Developer",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (14).png",
  },
  {
    name: "Jacj Trom",
    id: "8797",
    designation: "Design Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$36000",
    salary_per_month: "$2900",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (15).png",
  },
  {
    name: "Jenny Wilson",
    id: "5495",
    designation: "React JS Developer",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$50000",
    salary_per_month: "$3900",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (17).png",
  },
  {
    name: "Robert Fome",
    id: "98597",
    designation: "Sales Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$42000",
    salary_per_month: "$3400",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (2).png",
  },
  {
    name: "Cody Fisher",
    id: "46551",
    designation: "Sales Department",
    type: "Office",
    status: "Late",
    class: "red-status",
    ctc: "$37000",
    salary_per_month: "$2800",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (3).png",
  },
  {
    name: "Dianne Russell",
    id: "3162",
    designation: "Design Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$55000",
    salary_per_month: "$4000",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (4).png",
  },
  {
    name: "Savannah Nguyen",
    id: "56529",
    designation: "Design Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$40000",
    salary_per_month: "$3200",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (5).png",
  },
  {
    name: "Jacob Jones",
    id: "214695",
    designation: "Python Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (6).png",
  },
  {
    name: "Jacob Jamie",
    id: "65944",
    designation: "Python Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$36000",
    salary_per_month: "$3000",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (7).png",
  },
  {
    name: "Rossel Jones",
    id: "98894",
    designation: "Python Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (8).png",
  },
  {
    name: "Marvin McKinney",
    id: "9879",
    designation: "Rect JS Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$51000",
    salary_per_month: "$3500",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (8).png",
  },
  {
    name: "Brooklyn Simmons",
    id: "62626",
    designation: "Project Manager Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (9).png",
  },
  {
    name: "Mickel Simmons",
    id: "9749652",
    designation: "Project Manager Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$56000",
    salary_per_month: "$4500",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192.png",
  },
  {
    name: "Dani Taylor",
    id: "13226",
    designation: "Project Manager Department",
    type: "Office",
    status: "Late",
    class: "red-status",
    ctc: "$65000",
    salary_per_month: "$5000",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 2826.png",
  },
  {
    name: "Kristin Watson",
    id: "36636",
    designation: "Project Manager Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$30000",
    salary_per_month: "$2800",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (1).png",
  },
  {
    name: "Kathryn Murphy",
    id: "6265845",
    designation: "React JS Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$52000",
    salary_per_month: "$3800",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (10).png",
  },
  {
    name: "Taylor Ilo",
    id: "13265",
    designation: "React JS Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (11).png",
  },
  {
    name: "Annah Moiu",
    id: "6265845",
    designation: "React JS Department",
    type: "Office",
    status: "Late",
    class: "red-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (14).png",
  },
  {
    name: "Dianne Russell",
    id: "4894",
    designation: "Marketing Department",
    type: "Office",
    status: "On Time",
    class: "green-status",
    ctc: "$39000",
    salary_per_month: "$3400",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (15).png",
  },
  {
    name: "Darrell Steward",
    id: "49875",
    designation: "Sales Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$40000",
    salary_per_month: "$3200",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (17).png",
  },
  {
    name: "Eleanor Pena",
    id: "94594",
    designation: "Sales Department",
    type: "Remote",
    status: "On Time",
    class: "green-status",
    ctc: "$42000",
    salary_per_month: "$3200",
    payment_status: "Pending",
    payment_class: "yellow-status",
    img: "../images/Ellipse 1192 (4).png",
  },
  {
    name: "Devon Lane",
    id: "95487",
    designation: "Marketing Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$45000",
    salary_per_month: "$3500",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (9).png",
  },
  {
    name: "Savannah Nguyen",
    id: "89877",
    designation: "Marketing Department",
    type: "Remote",
    status: "Late",
    class: "red-status",
    ctc: "$32000",
    salary_per_month: "$3000",
    payment_status: "Completed",
    payment_class: "green-status",
    img: "../images/Ellipse 1192 (7).png",
  },
];

localStorage.setItem("attendances", JSON.stringify(attendancesArray));
localStorage.setItem("employees", JSON.stringify(employeesArray));

export { getData, postData, postDataByJob };
