const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.getElementById("logInForm");
const inputlogin = document.getElementById("login");
const inputpassword = document.getElementById("password");

const login = (user) => {
  console.log(user);
};

const logout = () => {};

buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
});

closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
});
logInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    login: inputlogin.value,
    password: inputpassword.value,
  };
  login(user);
});
