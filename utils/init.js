import { getCookie } from "./cookie.js";
import authorizationHandler from "./auth.js";

const initHandler = async (welcomeName, personName) => {
  getNameHandler(welcomeName, personName);
  authorizationHandler();
};

const getNameHandler = (welcomeName, personName) => {
  const cookieName = getCookie();
  welcomeName.innerHTML = cookieName.cookie;
  personName.innerHTML = cookieName.cookie;
};
export default initHandler;
