const setCookie = (username) => {
  document.cookie = `cookie=${username}; path=/`;
};

const getCookie = () => {
  const cookie = document.cookie;
  if (cookie) {
    const cookieArray = cookie.split("=");
    return {
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
};

const logoutHandler = () => {
  document.cookie = "cookie=; max-age=0; path=/";
  location.assign("../src/login.html");
};

export { setCookie, getCookie, logoutHandler };
