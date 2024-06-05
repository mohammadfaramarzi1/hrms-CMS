const routes = [
  {
    title: "dashboard", // Title haman data-title="" dar Html ast
    href: "index.html", // Linki ke dar searchbar Dar hale nemayesh ast. example: https://127.0.0.1/index.html
  },
  {
    title: "article",
    href: "article.html", // example: https://127.0.0.1/Courses.html
  },
  {
    title: "attendance",
    href: "attendances.html", // example: https://127.0.0.1/Aboutus.html
  },
  {
    title: "chat",
    href: "chat.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "departments.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "design-department.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "marketing-department.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all employees",
    href: "employees.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "jobs",
    href: "jobs.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "dashboard",
    href: "notification.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "payroll",
    href: "payroll.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "project-department.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "python-department.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "react-department.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "all departments",
    href: "sales-department.html", // example: https://127.0.0.1/Profiles.html
  },
  {
    title: "upload",
    href: "upload.html", // example: https://127.0.0.1/Profiles.html
  },
];

const activeMenuHandler = (menuLinks) => {
    const path =
      window.location.pathname.split("/")[2] ||
      window.location.pathname.split("/")[1];
  
    const currentRoute = routes.find((route) => {
      return route.href === path;
    });
  
    menuLinks.forEach((menuLink) => {
      if (menuLink.getAttribute("data-title") == currentRoute.title) {
        menuLink.classList.add("active-menu");
      } else {
        menuLink.classList.remove("active-menu");
      }
    });
  }

export default activeMenuHandler;