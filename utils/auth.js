import { getCookie } from "./cookie.js";

const authorizationHandler = () => {
  const cookie = getCookie();
  if (!cookie) {
    location.assign("../src/login.html");
  } else {
    return false;
  }
};

export default authorizationHandler;
