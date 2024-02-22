"use strict";
const startScreen = document.querySelector(".start-signup");
const inputEL = document.querySelector("input");
const signUpButton = document.querySelector(".signup-btn");
const successMessage = document.querySelector(".success-message");
const emailSpan = document.querySelector(".prev-email");
const dismissButton = document.querySelector(".dismiss");

let valid;
inputEL.value = "";
let email;

inputEL.addEventListener("keyup", function () {
  valid = inputEL.value.includes("@") ? true : false;
  if (valid) {
    signUpButton.classList.add("valid");
    signUpButton.classList.remove("not-valid");
  } else {
    signUpButton.classList.remove("valid");
    signUpButton.classList.add("not-valid");
  }
});

inputEL.addEventListener("click", function () {
  valid = inputEL.value.includes("@") ? true : false;
  if (valid) {
    signUpButton.classList.add("valid");
    signUpButton.classList.remove("not-valid");
  } else {
    signUpButton.classList.remove("valid");
    signUpButton.classList.add("not-valid");
  }
});

signUpButton.addEventListener("click", function () {
  if (valid) {
    email = inputEL.value;
    emailSpan.textContent = email;
    startScreen.style.display = "none";
    successMessage.style.display = "flex";
  }
});

dismissButton.addEventListener("click", function () {
  successMessage.style.display = "none";
});
