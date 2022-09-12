function loginRedirect() {
  document.location.replace("/login");
}

function signupRedirect() {
  document.location.replace("/signup");
}

document.querySelector("#login").addEventListener("click", loginRedirect);
document.querySelector("#signup").addEventListener("click", signupRedirect);
