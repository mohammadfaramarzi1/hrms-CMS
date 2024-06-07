import { setCookie } from "../utils/cookie.js";
import loaderHandler from "../utils/loader.js";

const loginBtn = document.querySelector("button");
const passwordInput = document.querySelector(".login__password");
const usernameInput = document.querySelector(".login__username");
const loader = document.querySelector(".loader__container");

const loginHandler = (event) => {
  event.preventDefault();
  const passwordValue = passwordInput.value;
  const usernameValue = usernameInput.value;

  if (passwordValue.length < 8 || usernameValue.length < 8) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Username And Password Must Be 8 Character At Least",
    });
  } else {
    setCookie(usernameValue);
    setTimeout(async () => {
      const toastMixin = await Swal.mixin({
        toast: true,
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      await toastMixin.fire({
        icon: "success",
        title: "You Logged In Successfully !",
      });
      await location.assign("../index.html");
    }, 1000);
  }
};

loginBtn.addEventListener("click", loginHandler);

window.addEventListener("load", () => {
  loaderHandler(loader);
});
